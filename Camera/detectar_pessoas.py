import subprocess
import time
import numpy as np
import cv2
from ultralytics import YOLO

# Carregar modelo YOLO
model = YOLO("yolov8n.pt")

URL = "rtsp://admin:gabriel123@192.168.0.101:554/onvif1"

# Resolução padrão (ajuste se sua câmera for diferente: 1920x1080, 1280x720, etc.)
WIDTH, HEIGHT = 1920, 1080
FRAME_SIZE = WIDTH * HEIGHT * 3  # BGR24


def obter_dimensoes_ffprobe(url, transport="tcp"):
    """Tenta obter largura e altura do stream com ffprobe."""
    cmd = [
        "ffprobe",
        "-rtsp_transport", transport,
        "-v", "error",
        "-select_streams", "v:0",
        "-show_entries", "stream=width,height",
        "-of", "csv=p=0",
        "-i", url,
    ]
    try:
        out = subprocess.run(
            cmd, capture_output=True, text=True, timeout=10,
            creationflags=subprocess.CREATE_NO_WINDOW if hasattr(subprocess, "CREATE_NO_WINDOW") else 0,
        )
        if out.returncode == 0 and out.stdout.strip():
            w, h = out.stdout.strip().split(",")
            return int(w), int(h)
    except (FileNotFoundError, subprocess.TimeoutExpired, ValueError):
        pass
    return None, None


def iniciar_ffmpeg_rtsp(url, transport="tcp", width=1920, height=1080):
    """Inicia FFmpeg lendo RTSP e enviando raw BGR24 para stdout."""
    cmd = [
        "ffmpeg",
        "-rtsp_transport", transport,
        "-i", url,
        "-f", "rawvideo",
        "-pix_fmt", "bgr24",
        "-an",  # sem áudio
        "-sn",  # sem legendas
        "-r", "25",  # framerate (ajuste se precisar)
        "-s", f"{width}x{height}",
        "pipe:1",
    ]
    return subprocess.Popen(
        cmd,
        stdout=subprocess.PIPE,
        stderr=subprocess.DEVNULL,
        bufsize=FRAME_SIZE,
        creationflags=subprocess.CREATE_NO_WINDOW if hasattr(subprocess, "CREATE_NO_WINDOW") else 0,
    )


# Tentar obter dimensões (com TCP primeiro)
for tr in ("tcp", "udp"):
    w, h = obter_dimensoes_ffprobe(URL, tr)
    if w and h:
        WIDTH, HEIGHT = w, h
        print(f"Dimensões do stream: {WIDTH}x{HEIGHT} (transport: {tr})")
        break

FRAME_SIZE = WIDTH * HEIGHT * 3

# Tentar conectar: primeiro TCP, depois UDP
proc = None
transport_used = None
for tr in ("tcp", "udp"):
    print(f"Tentando conectar com rtsp_transport={tr}...")
    proc = iniciar_ffmpeg_rtsp(URL, transport=tr, width=WIDTH, height=HEIGHT)
    time.sleep(2)
    if proc.poll() is not None:
        proc = None
        continue
    # Testar se está saindo dado
    chunk = proc.stdout.read(FRAME_SIZE)
    if len(chunk) == FRAME_SIZE:
        transport_used = tr
        print(f"Conexão OK com transporte: {tr}")
        # Guardar o primeiro frame para processar no loop
        first_frame = np.frombuffer(chunk, dtype=np.uint8).reshape((HEIGHT, WIDTH, 3))
        break
    proc.terminate()
    proc = None

if proc is None or transport_used is None:
    print("Erro ao conectar na câmera. Verifique:")
    print("  - URL, usuário e senha")
    print("  - Câmera ligada e na mesma rede")
    print("  - FFmpeg instalado e no PATH (ffmpeg e ffprobe)")
    exit(1)

# Loop principal usando o primeiro frame já lido
frame = first_frame
try:
    while True:
        # Cópia gravável (np.frombuffer retorna array read-only)
        frame_draw = frame.copy()
        results = model(frame)
        pessoas = 0

        for r in results:
            for box in r.boxes:
                cls = int(box.cls[0])
                if cls == 0:  # pessoa
                    pessoas += 1
                    x1, y1, x2, y2 = map(int, box.xyxy[0])
                    cv2.rectangle(frame_draw, (x1, y1), (x2, y2), (0, 255, 0), 2)
                    cv2.putText(
                        frame_draw, "Pessoa", (x1, y1 - 10),
                        cv2.FONT_HERSHEY_SIMPLEX, 0.6, (0, 255, 0), 2,
                    )

        cv2.putText(
            frame_draw, f"Pessoas: {pessoas}", (20, 40),
            cv2.FONT_HERSHEY_SIMPLEX, 1, (0, 0, 255), 3,
        )
        cv2.imshow("Monitoramento", frame_draw)

        if cv2.waitKey(1) == 27:
            break

        # Ler próximo frame
        raw = proc.stdout.read(FRAME_SIZE)
        if len(raw) != FRAME_SIZE:
            print("Erro ao receber frame (stream encerrado?)")
            break
        frame = np.frombuffer(raw, dtype=np.uint8).reshape((HEIGHT, WIDTH, 3)).copy()
finally:
    proc.terminate()
    proc.wait()
    cv2.destroyAllWindows()

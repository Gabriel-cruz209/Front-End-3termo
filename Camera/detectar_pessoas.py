import os
import cv2
import time
from ultralytics import YOLO

# Forçar RTSP via TCP
os.environ["OPENCV_FFMPEG_CAPTURE_OPTIONS"] = "rtsp_transport;tcp"

# carregar modelo YOLO
model = YOLO("yolov8n.pt")

url = "rtsp://admin:gabriel123@192.168.0.101:554/onvif1"

cap = cv2.VideoCapture(url, cv2.CAP_FFMPEG)

cap.set(cv2.CAP_PROP_BUFFERSIZE, 2)

if not cap.isOpened():
    print("Erro ao conectar na câmera")
    exit()

time.sleep(2)

while True:

    ret, frame = cap.read()

    if not ret:
        print("Erro ao receber frame")
        continue

    results = model(frame)

    pessoas = 0

    for r in results:
        for box in r.boxes:

            cls = int(box.cls[0])

            if cls == 0:  # pessoa

                pessoas += 1

                x1, y1, x2, y2 = map(int, box.xyxy[0])

                cv2.rectangle(frame,(x1,y1),(x2,y2),(0,255,0),2)

                cv2.putText(frame,"Pessoa",
                            (x1,y1-10),
                            cv2.FONT_HERSHEY_SIMPLEX,
                            0.6,
                            (0,255,0),
                            2)

    cv2.putText(frame,
                f"Pessoas: {pessoas}",
                (20,40),
                cv2.FONT_HERSHEY_SIMPLEX,
                1,
                (0,0,255),
                3)

    cv2.imshow("Monitoramento",frame)

    if cv2.waitKey(1) == 27:
        break

cap.release()
cv2.destroyAllWindows()
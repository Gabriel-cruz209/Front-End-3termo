import cv2
import mediapipe as mp
import sys

def main():
    # Atalhos para as soluções do MediaPipe
    mp_hands = mp.solutions.hands
    mp_drawing = mp.solutions.drawing_utils
    mp_drawing_styles = mp.solutions.drawing_styles

    # Configuração da captura de vídeo
    cap = cv2.VideoCapture(0)
    
    if not cap.isOpened():
        print("Erro: Não foi possível acessar a webcam.")
        return

    # Uso do 'with' garante que os recursos do MediaPipe sejam liberados ao fechar
    with mp_hands.Hands(
        model_complexity=0, # 0 é mais rápido, 1 é mais preciso
        min_detection_confidence=0.5,
        min_tracking_confidence=0.5,
        max_num_hands=2
    ) as hands:
        
        print("Sucesso: MediaPipe carregado! Pressione 'ESC' para sair.")

        while cap.isOpened():
            success, frame = cap.read()
            if not success:
                print("Ignorando frame vazio da câmera.")
                continue

            # 1. Melhora performance: marca a imagem como não gravável para processar
            frame.flags.writeable = False
            frame = cv2.flip(frame, 1) # Inverte para efeito de espelho
            
            # 2. Converte BGR (OpenCV) para RGB (MediaPipe)
            frame_rgb = cv2.cvtColor(frame, cv2.COLOR_BGR2RGB)
            results = hands.process(frame_rgb)

            # 3. Volta a imagem para gravável para desenhar nela
            frame.flags.writeable = True

            # 4. Desenha os pontos (landmarks) se houver detecção
            if results.multi_hand_landmarks:
                for hand_landmarks in results.multi_hand_landmarks:
                    mp_drawing.draw_landmarks(
                        frame,
                        hand_landmarks,
                        mp_hands.HAND_CONNECTIONS,
                        mp_drawing_styles.get_default_hand_landmarks_style(),
                        mp_drawing_styles.get_default_hand_connections_style()
                    )

            # Exibe o resultado
            cv2.imshow('MediaPipe Hand Tracking', frame)

            # Sai ao apertar ESC (tecla 27)
            if cv2.waitKey(5) & 0xFF == 27:
                break

    # Limpeza final
    cap.release()
    cv2.destroyAllWindows()


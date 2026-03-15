import av
import cv2

url = "rtsp://admin:gabriel123@192.168.0.101:554/onvif1"

container = av.open(url)

for frame in container.decode(video=0):

    img = frame.to_ndarray(format="bgr24")

    cv2.imshow("Camera IP", img)

    if cv2.waitKey(1) == 27:
        break

cv2.destroyAllWindows()
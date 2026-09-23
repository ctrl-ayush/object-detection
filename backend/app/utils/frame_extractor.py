import cv2


def extract_frames(video_path):

    cap = cv2.VideoCapture(video_path)

    while cap.isOpened():

        ret, frame = cap.read()

        if not ret:
            break

        yield frame

    cap.release()
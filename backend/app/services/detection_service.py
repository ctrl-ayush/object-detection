import cv2
from app.models.yolo_model import yolo_model


def detect_objects(frame):

    results = yolo_model.predict(frame)

    # Draw bounding boxes
    annotated_frame = results[0].plot()

    return annotated_frame, results
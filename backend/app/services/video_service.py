import cv2

from app.utils.frame_extractor import extract_frames
from app.utils.video_writer import VideoWriter
from app.services.detection_service import detect_objects


def process_video(input_path: str, output_path: str):

    cap = cv2.VideoCapture(input_path)

    fps = cap.get(cv2.CAP_PROP_FPS)
    width = int(cap.get(cv2.CAP_PROP_FRAME_WIDTH))
    height = int(cap.get(cv2.CAP_PROP_FRAME_HEIGHT))

    cap.release()

    writer = VideoWriter(output_path, fps, width, height)

    for frame in extract_frames(input_path):

        annotated_frame, _ = detect_objects(frame)

        writer.write_frame(annotated_frame)

    writer.release()

    return output_path
from pathlib import Path
from threading import Lock

from ultralytics import YOLO

from app.config import settings

class YOLOModel:

    def __init__(self, model_path: str = settings.MODEL_PATH):
        path = Path(model_path)
        if not path.is_absolute():
            path = Path(__file__).resolve().parents[2] / path

        self.model = YOLO(str(path))
        self.lock = Lock()

    def predict(self, frame):
        with self.lock:
            results = self.model.predict(
                frame,
                conf=settings.CONFIDENCE_THRESHOLD,
                verbose=False,
            )
        return results


# Singleton instance (loaded once)
yolo_model = YOLOModel()
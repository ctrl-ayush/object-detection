import os


class Settings:

    MODEL_PATH = os.getenv("MODEL_PATH", "weights/yolo11m.pt")

    INPUT_DIR = os.getenv("INPUT_DIR", "temp/input")

    OUTPUT_DIR = os.getenv("OUTPUT_DIR", "temp/output")

    CONFIDENCE_THRESHOLD = float(os.getenv("CONFIDENCE_THRESHOLD", 0.25))


settings = Settings()
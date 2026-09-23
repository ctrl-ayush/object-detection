from pydantic import BaseModel


class FrameDetectionRequest(BaseModel):
    image: str
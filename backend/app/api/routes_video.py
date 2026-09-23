import os

from fastapi import APIRouter, UploadFile, File

# Import video processing service
from app.services.video_service import process_video


# Router instance
router = APIRouter()


# Directories used to store uploaded and processed videos
INPUT_DIR = "temp/input"
OUTPUT_DIR = "temp/output"


# Ensure directories exist
os.makedirs(INPUT_DIR, exist_ok=True)
os.makedirs(OUTPUT_DIR, exist_ok=True)



@router.post("/detect/video")
async def detect_video(file: UploadFile = File(...)):

    """
    Endpoint: Upload a video and run object detection on it
    """

    # Save uploaded video to temp/input
    input_path = os.path.join(INPUT_DIR, file.filename)

    # Path where processed video will be stored
    output_path = os.path.join(
        OUTPUT_DIR,
        f"processed_{file.filename}"
    )


    # Write uploaded file to disk
    with open(input_path, "wb") as buffer:
        buffer.write(await file.read())


    # Run object detection
    processed_video_path = process_video(input_path, output_path)


    """

    Windows uses "\" in paths but URLs require "/".
    We convert the path before sending it to the frontend.
    """
    processed_video_path = processed_video_path.replace("\\", "/")


    return {
        "message": "video processed",
        "output_path": processed_video_path
    }
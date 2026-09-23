from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware

from app.api.routes_video import router as video_router
from app.api.routes_camera import router as camera_router
from fastapi.staticfiles import StaticFiles


app = FastAPI(
    title="Object Detection API",
    version="1.0.0"
)

# CORS (for frontend communication)
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

# Register routes
app.include_router(video_router, prefix="/api/v1")
app.include_router(camera_router, prefix="/api/v1")
app.mount("/temp", StaticFiles(directory="temp"), name="temp")


@app.get("/health")
def health_check():
    return {"status": "running"}
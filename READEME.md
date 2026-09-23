# AI Object Detection System

## Project Description

The AI Object Detection System is a web application that detects objects in both live camera streams and uploaded video files using a deep learning model.

The application allows users to:

* Detect objects in real-time using a webcam.
* Upload a video and process it to identify objects frame by frame.
* View bounding boxes around detected objects in the output.

The system consists of a React frontend that interacts with a FastAPI backend. The backend processes images and videos using a YOLO object detection model and returns annotated results to the frontend.

---

## Tech Stack

### Frontend

* React
* Material UI
* JavaScript
* HTML / CSS

### Backend

* Python
* FastAPI
* OpenCV
* NumPy

### AI / Computer Vision

* YOLO (Ultralytics) Object Detection Model

---

## Features

### Live Camera Detection

* Access webcam directly from the browser.
* Capture frames continuously.
* Send frames to backend for object detection.
* Display detected objects with bounding boxes.

### Video Upload Detection

* Upload a video file.
* Backend processes the video frame by frame.
* Object detection is applied on each frame.
* A new processed video with bounding boxes is generated and displayed.

### AI Processing

* Uses YOLO object detection model.
* Detects multiple objects in a frame.
* Draws bounding boxes and labels around detected objects.

---

## Steps to Run the Project (Without Docker)

### 1. Clone the Repository

```bash
git clone <repository-url>
cd <project-folder>
```

---

### 2. Run Backend Server

Navigate to the backend directory.

```bash
cd backend
```

Create a virtual environment.

```bash
python -m venv venv
```

Activate the virtual environment.

**Windows**

```bash
venv\Scripts\activate
```

**Mac/Linux**

```bash
source venv/bin/activate
```

Install backend dependencies.

```bash
pip install -r requirements.txt
```

Start the FastAPI server.

```bash
uvicorn main:app --reload
```

Backend will run at:

```
http://localhost:8000
```

API documentation will be available at:

```
http://localhost:8000/docs
```

---

### 3. Run Frontend Application

Open a new terminal and navigate to the frontend directory.

```bash
cd frontend
```

Install dependencies.

```bash
npm install
```

Start the React development server.

```bash
npm start
```

Frontend will run at:

```
http://localhost:3000
```

---

### 4. Use the Application

1. Open the frontend in your browser.
2. Choose one of the detection modes:

   * Live Camera Detection
   * Upload Video Detection
3. View the detection results directly in the UI.

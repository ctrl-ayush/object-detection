# 🚀 AI Object Detection System using YOLO, FastAPI & React

An end-to-end **AI-powered Object Detection System** built using **YOLO (Ultralytics), FastAPI, React, and OpenCV**. The application can detect multiple objects in **real-time through a webcam** as well as **uploaded video files**, providing an intuitive web interface for interacting with a state-of-the-art computer vision model.

---

# 📖 Project Overview

Object detection is one of the most widely used applications of Computer Vision, enabling machines to identify and locate multiple objects within an image or video.

This project demonstrates a complete full-stack AI application where:

* A **React** frontend provides an interactive user interface.
* A **FastAPI** backend exposes REST APIs for AI inference.
* A **YOLO (Ultralytics)** model performs high-speed object detection.
* **OpenCV** processes images and videos frame by frame.
* The processed output is returned with bounding boxes, labels, and confidence scores.

The application supports both **real-time webcam detection** and **video upload detection**, making it suitable for learning, demonstrations, and further AI application development.

---

# ✨ Features

## 🎥 Live Camera Object Detection

* Real-time object detection using your webcam
* Continuous frame capture from the browser
* Fast AI inference using YOLO
* Bounding boxes with class labels
* Confidence score visualization
* Smooth live detection experience

---

## 📁 Video Upload Detection

* Upload any supported video file
* Frame-by-frame object detection
* Automatic video processing
* Generates an annotated output video
* Displays detected objects with bounding boxes and labels

---

## 🧠 AI-Powered Detection

* YOLO (Ultralytics) object detection model
* Detects multiple objects simultaneously
* High-speed inference
* Accurate object localization
* Supports a wide range of object classes from the pretrained model

---

# 🏗️ System Architecture

```text
                React Frontend
                      │
          Upload Video / Webcam
                      │
                      ▼
                FastAPI Backend
                      │
                      ▼
             OpenCV Frame Processing
                      │
                      ▼
          YOLO (Ultralytics) Model
                      │
                      ▼
      Bounding Boxes + Labels + Confidence
                      │
                      ▼
          Annotated Output to Frontend
```

---

# 🛠️ Technology Stack

## Frontend

* React
* Material UI
* JavaScript
* HTML5
* CSS3

## Backend

* Python
* FastAPI
* OpenCV
* NumPy
* Uvicorn

## AI / Computer Vision

* YOLO (Ultralytics)
* Deep Learning
* Computer Vision

---

# 📂 Project Structure

```text
object-detection/
│
├── backend/
│   ├── main.py
│   ├── requirements.txt
│   └── ...
│
├── frontend/
│   ├── src/
│   ├── public/
│   └── ...
│
├── README.md
└── ...
```

---

# ⚙️ Installation & Setup

## 1. Clone the Repository

```bash
git clone https://github.com/MandeepKharb/object-detection.git

cd object-detection
```

---

## 2. Backend Setup

Navigate to the backend directory:

```bash
cd backend
```

Create a virtual environment:

```bash
python -m venv venv
```

Activate the virtual environment.

### Windows

```bash
venv\Scripts\activate
```

### macOS / Linux

```bash
source venv/bin/activate
```

Install the required dependencies:

```bash
pip install -r requirements.txt
```

Start the FastAPI server:

```bash
uvicorn main:app --reload
```

Backend URL:

```text
http://localhost:8000
```

Swagger API Documentation:

```text
http://localhost:8000/docs
```

---

## 3. Frontend Setup

Open another terminal.

Navigate to the frontend folder:

```bash
cd frontend
```

Install dependencies:

```bash
npm install
```

Start the React application:

```bash
npm start
```

Frontend URL:

```text
http://localhost:3000
```

---

# 🚀 How to Use

### Live Camera Detection

1. Launch the application.
2. Allow browser access to your webcam.
3. Start live detection.
4. Watch objects being detected in real time.

---

### Video Upload Detection

1. Select the **Upload Video** option.
2. Choose a supported video file.
3. Upload the video.
4. Wait for processing.
5. View the generated video with detected objects highlighted using bounding boxes.

---

# 🎬 Project Demonstration

Watch the complete project walkthrough on YouTube:

**https://youtu.be/278nPWZNpzY?si=aa3asagH6g1MGq-K**

---

# 📸 Screenshots

You can add screenshots such as:

* Home Screen
* Live Camera Detection
* Video Upload Interface
* Detection Results
* Processed Video Output

---

# 🔮 Future Enhancements

* Custom YOLO model training
* Support for image uploads
* Object tracking (ByteTrack / DeepSORT)
* Real-time video streaming support
* Docker deployment
* GPU acceleration
* Cloud deployment (AWS, Azure, GCP)
* Detection analytics dashboard

---

# 🤝 Contributions

Contributions, feature requests, and suggestions are welcome. Feel free to fork the repository and submit a Pull Request.

---

# 👨‍💻 Author

**Mandeep Kharb**

If you found this project helpful, consider giving it a ⭐ on GitHub.

---

# 📄 License

This project is intended for educational and learning purposes.

// Import axios to make HTTP requests to the backend API
import axios from "axios";

/*
Create a reusable axios instance.

baseURL:
This is the base URL of our backend server.
All API calls will automatically append their endpoint to this URL.

Example:
"/detect/video" → http://localhost:8000/api/v1/detect/video
*/
const API = axios.create({
  baseURL: "http://localhost:8000/api/v1",
});


/*
Function: uploadVideo

Purpose:
Send a video file to the backend so the backend can run object detection.

Steps:
1. Create FormData object (required for file uploads).
2. Append the selected video file.
3. Send POST request to backend endpoint.
4. Return the backend response.
*/
export const uploadVideo = async (file) => {

  // Create FormData object to hold file
  const formData = new FormData();

  // Add the file into the form data
  formData.append("file", file);

  // Send POST request to backend
  const response = await API.post(
    "/detect/video",
    formData,
    {
      headers: {
        "Content-Type": "multipart/form-data"
      }
    }
  );

  // Return response data from backend
  return response.data;
};


/*
Function: detectFrame

Purpose:
Send a single image frame to the backend for object detection.
This will be used for LIVE CAMERA detection.

The frame will be sent as a base64 encoded string.
*/
export const detectFrame = async (imageBase64) => {

  const response = await API.post(
    "/detect/frame",
    {
      image: imageBase64
    }
  );

  return response.data;
};
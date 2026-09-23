import React, { useState } from "react";

import {
  Card,
  CardContent,
  Button,
  Box,
  CircularProgress
} from "@mui/material";

import { uploadVideo } from "../services/api";


/*
Video Upload Component

Flow

1. Browse video
2. Preview video
3. Process video
4. Show processing overlay
5. Replace preview with processed video
6. Allow browsing another video
*/

function VideoUpload() {

  const [videoFile, setVideoFile] = useState(null);
  const [videoPreview, setVideoPreview] = useState(null);
  const [processedVideo, setProcessedVideo] = useState(null);
  const [loading, setLoading] = useState(false);



  /*
  Handle video selection
  */
  const handleFileChange = (event) => {

    const file = event.target.files[0];

    if (!file) return;

    setVideoFile(file);

    const previewURL = URL.createObjectURL(file);

    setVideoPreview(previewURL);

    setProcessedVideo(null);
  };



  /*
  Reset uploader to initial state
  */
  const resetUploader = () => {

    setVideoFile(null);
    setVideoPreview(null);
    setProcessedVideo(null);
    setLoading(false);
  };



  /*
  Send video to backend
  */
  const handleUpload = async () => {

    if (!videoFile) return;

    try {

      setLoading(true);

      const response = await uploadVideo(videoFile);

      const videoUrl =
        "http://localhost:8000/" +
        response.output_path;

      setProcessedVideo(videoUrl);

    } catch (error) {

      console.error("Video processing error:", error);

    } finally {

      setLoading(false);
    }
  };



  return (

    <Card sx={{ padding: 3 }}>

      <CardContent>

        {/* INITIAL STATE */}
        {!videoPreview && (

          <Box
            sx={{
              display: "flex",
              justifyContent: "center"
            }}
          >

            <Button
              variant="contained"
              component="label"
              size="large"
            >
              Browse Video

              <input
                hidden
                type="file"
                accept="video/*"
                onChange={handleFileChange}
              />

            </Button>

          </Box>

        )}



        {/* VIDEO PLAYER (preview or processed) */}
        {videoPreview && (

          <Box
            sx={{
              position: "relative"
            }}
          >

            <video
              width="100%"
              controls
              src={processedVideo || videoPreview}
              key={processedVideo || videoPreview}
              style={{
                borderRadius: "10px",
                border: processedVideo
                  ? "2px solid #4caf50"
                  : "2px solid #1976d2"
              }}
            />



            {/* PROCESSING OVERLAY */}
            {loading && (

              <Box
                sx={{
                  position: "absolute",
                  top: 0,
                  left: 0,
                  right: 0,
                  bottom: 0,
                  background: "rgba(0,0,0,0.5)",
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "center",
                  alignItems: "center",
                  borderRadius: "10px"
                }}
              >

                <CircularProgress />

                <Box sx={{ marginTop: 2, color: "#fff" }}>
                  Processing Video...
                </Box>

              </Box>

            )}



            {/* PROCESS BUTTON */}
            {!processedVideo && (

              <Box
                sx={{
                  display: "flex",
                  justifyContent: "center",
                  marginTop: 3
                }}
              >

                <Button
                  variant="contained"
                  size="large"
                  onClick={handleUpload}
                  disabled={loading}
                >
                  Process Video
                </Button>

              </Box>

            )}



            {/* BROWSE ANOTHER VIDEO */}
            {processedVideo && (

              <Box
                sx={{
                  display: "flex",
                  justifyContent: "center",
                  marginTop: 3
                }}
              >

                <Button
                  variant="outlined"
                  size="large"
                  onClick={resetUploader}
                >
                  Browse Another Video
                </Button>

              </Box>

            )}

          </Box>

        )}

      </CardContent>

    </Card>
  );
}

export default VideoUpload;
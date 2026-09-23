import React, { useState } from "react";

import { Tabs, Tab, Box, Typography, Paper } from "@mui/material";

import VideoUpload from "../components/VideoUpload";
import CameraStream from "../components/CameraStream";


/*
Home Component

Improved UI layout:
1. Centered title
2. Subtitle
3. Card container
4. Styled tabs
*/

function Home() {

  const [tabIndex, setTabIndex] = useState(0);

  const handleChange = (event, newValue) => {
    setTabIndex(newValue);
  };


  return (

    <Box
      sx={{
        width: "100%",
        display: "flex",
        justifyContent: "center"
      }}
    >

      {/* Main Card Container */}
      <Paper
        elevation={10}
        sx={{
          width: "900px",
          padding: 4,
          borderRadius: 3,
          background: "rgba(255,255,255,0.95)"
        }}
      >

        {/* Title */}
        <Typography
          variant="h4"
          align="center"
          sx={{
            fontWeight: "bold",
            marginBottom: 1
          }}
        >
          AI Object Detection System
        </Typography>


        {/* Subtitle */}
        <Typography
          align="center"
          color="text.secondary"
          sx={{ marginBottom: 4 }}
        >
          Detect objects from uploaded videos or live camera streams
        </Typography>


        {/* Tabs */}
        <Tabs
          value={tabIndex}
          onChange={handleChange}
          centered
          sx={{
            marginBottom: 3
          }}
        >
          <Tab label="Live Camera Detection" />
          <Tab label="Upload Video Detection" />
        </Tabs>


        {/* Tab Content */}
        <Box>

          {/* Render Camera ONLY when tab 0 */}
          {tabIndex === 0 && <CameraStream />}

          {/* Render Upload ONLY when tab 1 */}
          {tabIndex === 1 && <VideoUpload />}

        </Box>

      </Paper>

    </Box>
  );
}

export default Home;
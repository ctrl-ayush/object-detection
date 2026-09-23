import React from "react";

// Import the Home page component
import Home from "./pages/Home";


/*
App Component

Purpose:
This is the root component of the React application.

Responsibilities:
1. Load the main application pages
2. Serve as the root UI container
3. Later we can add routing here if we introduce multiple pages
*/
function App() {

  return (

    <div>

      {/* Render the main Home page */}
      <Home />

    </div>

  );
}

export default App;
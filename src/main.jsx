import React from "react";
import { createRoot } from "react-dom/client";
import DirectorCut from "./DirectorCut.jsx";
import "./director-cut.css";
import "./reel.css";

createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <DirectorCut />
  </React.StrictMode>
);

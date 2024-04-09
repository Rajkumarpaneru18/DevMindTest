import React from 'react'
import flagsmith from "flagsmith";
import { FlagsmithProvider } from "flagsmith/react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <FlagsmithProvider
      options={{
        environmentID: "PyHx8wNxKyr3NZNPrVHc2D",
      }}
      flagsmith={flagsmith}
    >
      {<App />}
    </FlagsmithProvider>{" "}
  </React.StrictMode>
);

import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { BrowserRouter } from "react-router-dom";
import { AuthReducer } from "./context/AuthReducer.js";
import { Toaster } from "react-hot-toast";
import StateContext from "./context/StateContext.js";

createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <AuthReducer>
      <StateContext>
      <App />
      <Toaster />
      </StateContext>
    </AuthReducer>
  </BrowserRouter>
);

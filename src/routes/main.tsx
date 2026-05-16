import React from "react";
import ReactDOM from "react-dom/client";
import "./styles.css";

function App() {
  return (
    <div
      style={{
        background: "#020617",
        color: "white",
        minHeight: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column",
        fontFamily: "Arial"
      }}
    >
      <h1 style={{ fontSize: "60px", marginBottom: "20px" }}>
        Nova Digital
      </h1>

      <p style={{ fontSize: "20px", opacity: 0.8 }}>
        Web & Mobile App Development
      </p>
    </div>
  );
}

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
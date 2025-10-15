import React from "react";
import { Link } from "react-router-dom";
import LazyLottie from "../components/LazyLottie";
import notFoundAnimation from "../assets/Page Not Found 404.json";
import "../styles/contact.css";

const NotFound = () => (
  <div className="contact-page" style={{ minHeight: "80vh", display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center" }}>
      <div style={{ maxWidth: 800, marginBottom: 32 }}>
      <LazyLottie animationLoader={() => import('../assets/Page Not Found 404.json')} style={{ width: "100%", height: 800 }} />
    </div>
  </div>
);

export default NotFound;

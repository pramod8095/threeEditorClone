import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import "./Canvas.css";

export default function CanvasRight() {
  const [position, setPosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    addEventListeners();
    return () => removeEventListeners();
  });

  const addEventListeners = () => {
    document.addEventListener("mousemove", onMouseMove);
  };

  const removeEventListeners = () => {
    document.removeEventListener("mousemove", onMouseMove);
  };

  const onMouseMove = (e) => {
    setPosition({ x: e.clientX, y: e.clientY });
  };
  const backgroundColour = useSelector(
    (state) => state.applicationReducer.backgroundColour
  );
  const heroValue = useSelector((state) => state.applicationReducer.heroValue);
  return (
    <div
      style={{
        padding: "70px 0",
        border: "3px ",
        textAlign: "center",
        width: "600",
        height: "100%",
        backgroundColor: backgroundColour,
      }}
    >
      <div
        style={{
          color: "white",
          fontSize: "15em",
        }}
      >
        <div
          className="cursor"
          style={{
            left: `${position.x}px`,
            top: `${position.y}px`,
          }}
        ></div>
        {heroValue}
      </div>
    </div>
  );
}

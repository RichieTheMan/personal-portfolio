import React from "react";
import "./styles.css";

export function HeroLight() {
  return (
    <div className="hero-light-frame">
      <div className="light-mask">
        <div className="light-main-frame" />
        <div className="light-overlay-frame" />
        <div className="noise-mask">
          <div className="noise-frame" />
        </div>
      </div>
    </div>
  );
}

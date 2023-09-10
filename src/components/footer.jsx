import React from "react";
import "./footer.css";

export const Footer = () => {
  return (
    <div className="footerContainer">
      <p className="footerText">
        Built by{" "}
        <a
          href="https://www.linkedin.com/in/kutaysahin/"
          className="footerLink"
          target="_blank"
          rel="noreferrer"
        >
          Kutay Şahin
        </a>{" "}
        w/ ♥
      </p>
    </div>
  );
};

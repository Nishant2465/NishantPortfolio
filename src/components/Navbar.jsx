import React from "react";

const Navbar = () => (
  <div className="w3-top w3-hide-large w3-hide-medium" id="myNavbar">
    <div className="w3-bar w3-black w3-opacity w3-hover-opacity-off w3-center w3-small">
      <a href="#home" className="w3-bar-item w3-button" style={{ width: "25%" }}>HOME</a>
      <a href="#about" className="w3-bar-item w3-button" style={{ width: "25%" }}>ABOUT</a>
      <a href="#photos" className="w3-bar-item w3-button" style={{ width: "25%" }}>PHOTOS</a>
      <a href="#contact" className="w3-bar-item w3-button" style={{ width: "25%" }}>CONTACT</a>
    </div>
  </div>
);

export default Navbar;

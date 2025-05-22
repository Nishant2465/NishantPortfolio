import React from "react";
import Sidebar from "./components/Sildebar";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import About from "./components/About";
import Photos from "./components/Photos";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import "./App.css";

const App = () => (
  <div className="w3-black">
    <Sidebar />
    <Navbar />
    <div className="w3-padding-large" id="main">
      <Home />
      <About />
      <Photos />
      <Contact />
      <Footer />
    </div>
  </div>
);

export default App;
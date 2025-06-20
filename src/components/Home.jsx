import React from "react";

const Home = () => {
  return (
    <section
      id="home"
      style={{
        backgroundImage: `url("/images/IMG_0305.jpg")`,
        backgroundSize: "contain",
        backgroundPosition: "left",
        backgroundRepeat: "no-repeat",
        height: "70vh",
        width: "95%",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "end",
        color: "White",
        textAlign: "left",
      }}
    >
      <h1 style={{ fontSize: "5rem", marginBottom: "0rem" }}>
        I'm Nishant Sharma.
      </h1>
      <p style={{ fontSize: "2rem" }}>-- Explorer and Web Developer.</p>
    </section>
  );
};

export default Home;

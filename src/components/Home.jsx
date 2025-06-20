import React from "react";

const Home = () => {
  return (
    <section
      id="home"
      style={{
        backgroundImage: `url("/images/IMG_0305.jpg")`,
        backgroundSize: "contain",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        height: "70vh",
        width: "100%",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        padding: "0.5rem",
        color: "White",
        textAlign: "left",
        position: "relative",
      }}
    >
      <div
    style={{
      backgroundColor: "rgba(0, 0, 0, 0.4)",
      padding: "0.5rem 0.5rem",
      borderRadius: "5px",
      display: "flex",
      flexDirectional: "column",
      alignItems: "center",
      marginTop: "18rem",
    }}
  >
    <h1
      style={{
        fontSize: "4rem",
        marginBottom: "-2rem",
        fontFamily: "'Pacifico', cursive",
        marginTop: "-2rem"
      }}
    >
      I'm Nishant Sharma.
    </h1>
    <p
      style={{
        fontSize: "1.25rem",
        fontFamily: "'Pacifico', cursive",
        alignSelf: "start",
        marginTop: "5rem",
      }}
    >
     - Explorer and Web Developer.
    </p>
  </div>
    </section>
  );
};

export default Home;

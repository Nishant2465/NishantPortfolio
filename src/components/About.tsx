import React, { useState } from "react";

const About = () => {
  const [stats, setStats] = useState([
    { label: "Colleagues", value: 11 },
    { label: "Explorer Things", value: 55 },
    { label: "Successfully Trips", value: 89 },
    { label: "Meetups", value: 150 },
  ]);

  const handleClick = (index: number) => {
    const newStats = [...stats];
    newStats[index].value += 1;
    setStats(newStats);
    alert(`Thanks for clicking on ${newStats[index].label}!`);
  };

  return (
    <div className="w3-content w3-justify w3-text-grey w3-padding-64" id="about">
      <h2 className="w3-text-light-grey">About Me</h2>
      <hr style={{ width: "200px" }} className="w3-opacity" />

      <p>
        Welcome to my portfolio!
        I believe in the power of continuous growth, fresh perspectives, and meaningful creativity. 
        My work is driven by a desire to explore innovative ideas, learn from diverse experiences, and express thoughtful solutions through every project I take on.
        Traveling is one of my greatest inspirations. It opens my eyes to new cultures, connects me with different ways of life, and teaches me to embrace the beauty of diversity. 
        Whether it’s through professional projects or personal journeys, I strive to approach every experience with an open mind and attention to the small details that make a big impact.
        Authenticity, growth, and a love for craftsmanship define both my work and my way of living. Thank you for visiting — I’m excited to share my journey with you.
      </p>

      <h3 className="w3-padding-16 w3-text-light-grey">My Skills</h3>
      {["Explorer/Astounded", "Web Development"].map((skill, idx) => (
        <div key={idx}>
          <p className="w3-wide">{skill}</p>
          <div className="w3-white">
            <div
              className="w3-dark-grey"
              style={{ height: "28px", width: `${95 - idx * 10}%` }}
            ></div>
          </div>
        </div>
      ))}

      <div className="w3-row w3-center w3-padding-16 w3-section w3-light-grey">
        {stats.map((item, i) => (
          <div key={i} className="w3-quarter w3-section">
            <button
              className="w3-button w3-xlarge w3-white w3-hover-grey"
              onClick={() => handleClick(i)}
            >
              {item.value}+
            </button>
            <br />
            {item.label}
          </div>
        ))}
      </div>

      <a href="/resume.pdf" download>
        <button className="w3-button w3-light-grey w3-padding-large w3-section">
          <i className="fa fa-download"></i> Download Resume
        </button>
      </a>
    </div>
  );
};

export default About;

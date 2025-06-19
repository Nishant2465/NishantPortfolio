import React from "react";

const About = () => (
  <div className="w3-content w3-justify w3-text-grey w3-padding-64" id="about">
    <h2 className="w3-text-light-grey">Nishant Sharma</h2>
    <hr style={{ width: "200px" }} className="w3-opacity" />
    <p>Welcome to my portfolio!
      Hi there, I’m Nishant Sharma — a curious mind, a creative thinker, and a passionate learner.
      I believe in the power of continuous growth, fresh perspectives, and meaningful creativity. My work is fueled by a desire to explore new ideas, learn from diverse experiences, and bring thoughtful expression into everything I create.
      Traveling is one of my greatest sources of inspiration. It allows me to see the world through different lenses, connect with unique cultures, and embrace the beauty of diversity. Whether it’s through my projects or personal adventures, I strive to approach every journey with an open mind and an eye for the little details that make each experience truly special.
      Authenticity, growth, and a love for craftsmanship define not just my work, but the way I live. Thanks for stopping by — I’m excited to share my journey with you.
</p>

    <h3 className="w3-padding-16 w3-text-light-grey">My Skills</h3>
    {['Explorer/Astounded', 'Web Development', 'Skills for coding(HTML/CSS/JS/React/NodeJS/NestJS)'].map((skill, idx) => (
      <div key={idx}>
        <p className="w3-wide">{skill}</p>
        <div className="w3-white"> 
          <div className="w3-dark-grey" style={{ height: "28px", width: `${95 - idx * 10}%` }}></div>
        </div>
      </div>
    ))}

    <div className="w3-row w3-center w3-padding-16 w3-section w3-light-grey">
      {['11+ Colleagues', '55+ Explorer Things', '89+ Successfully Trips ', '150+ Meetups'].map((item, i) => (
        <div key={i} className="w3-quarter w3-section">
          <span className="w3-xlarge">{item.split(' ')[0]}</span><br />{item.split(' ').slice(1).join(' ')}
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
export default About;
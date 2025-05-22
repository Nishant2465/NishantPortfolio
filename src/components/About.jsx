import React from "react";

const About = () => (
  <div className="w3-content w3-justify w3-text-grey w3-padding-64" id="about">
    <h2 className="w3-text-light-grey">Nishant Sharma</h2>
    <hr style={{ width: "200px" }} className="w3-opacity" />
    <p>Welcome to my portfolio, Hi there Nishant Sharma this side. i'm someone who values curiosity, creativity, 
      and continuous growth. I enjoy exploring new ideas, learning from different perspectives, 
      and expressing myself through the work i create. I love travelling and exploring the world, 
      it inspires me to see things from new perspectives and connect with different cultures. 
      I approach life with an open mind and a passion for learning. I value authenticity, growth, 
      and the little details that make each journey unique, both in life and in the work i create.</p>

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
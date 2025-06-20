import React, { useState } from "react";
import emailjs from "emailjs-com";

const Contact = () => {
  const [formData, setFormData] = useState({
    Name: "",
    Email: "",
    Subject: "",
    Message: ""
  });

  const handleChange = (e) => {
    const { placeholder, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [placeholder]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    emailjs.send(
      'service_19p43ma',
      'template_izzh3bp',
      formData,
      'CV45Mt8JlC-TonYeu'
    )
    .then((response) => {
      console.log('SUCCESS!', response.status, response.text);
      alert('Message sent successfully!');
      setFormData({
        Name: "",
        Email: "",
        Subject: "",
        Message: ""
      });
    }, (err) => {
      console.error('FAILED...', err);
      alert('Failed to send message. Try again later.');
    });
  };

  return (
    <div className="w3-padding-64 w3-content w3-text-grey" id="contact">
      <h2 className="w3-text-light-grey">Contact Me</h2>
      <hr style={{ width: "200px" }} className="w3-opacity" />

      <div className="w3-section">
        <p><i className="fa fa-map-marker fa-fw w3-text-white w3-xxlarge w3-margin-right"></i> Dharamshala, India</p>
        <p><i className="fa fa-phone fa-fw w3-text-white w3-xxlarge w3-margin-right"></i> +91 8894496032</p>
        <p><i className="fa fa-envelope fa-fw w3-text-white w3-xxlarge w3-margin-right"></i> nishant2465@gmail.com</p>
      </div>

      <form onSubmit={handleSubmit}>
        {["Name", "Email", "Subject", "Message"].map((field, i) => (
          <p key={i}>
            <input
              className="w3-input w3-padding-16"
              type="text"
              placeholder={field}
              value={formData[field]}
              onChange={handleChange}
              required
            />
          </p>
        ))}
        <p>
          <button className="w3-button w3-light-grey w3-padding-large" type="submit">
            <i className="fa fa-paper-plane"></i> SEND MESSAGE
          </button>
        </p>
      </form>
    </div>
  );
};

export default Contact;








/*import React from "react";

const Contact = () => (
  <div className="w3-padding-64 w3-content w3-text-grey" id="contact">
    <h2 className="w3-text-light-grey">Contact Me</h2>
    <hr style={{ width: "200px" }} className="w3-opacity" />

    <div className="w3-section">
      <p><i className="fa fa-map-marker fa-fw w3-text-white w3-xxlarge w3-margin-right"></i> Dharamshala, India</p>
      <p><i className="fa fa-phone fa-fw w3-text-white w3-xxlarge w3-margin-right"></i> +91 8894496032</p>
      <p><i className="fa fa-envelope fa-fw w3-text-white w3-xxlarge w3-margin-right"></i> nishant2465@gmail.com</p>
    </div>

    <form>
      {['Name', 'Email', 'Subject', 'Message'].map((field, i) => (
        <p key={i}><input className="w3-input w3-padding-16" type="text" placeholder={field} required /></p>
      ))}
      <p><button className="w3-button w3-light-grey w3-padding-large" type="submit"><i className="fa fa-paper-plane"></i> SEND MESSAGE</button></p>
    </form>
  </div>
);

export default Contact;*/
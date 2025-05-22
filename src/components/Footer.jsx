import React from "react";

const socialLinks = [
  { icon: "facebook-official", url: "https://www.facebook.com/saffarnama" },
  { icon: "instagram", url: "https://www.instagram.com/saffarnama" },
  { icon: "snapchat", url: "https://www.snapchat.com" },
  { icon: "pinterest-p", url: "https://in.pinterest.com/search/pins/?q=mountains%20dharamshala&rs=typed" },
  { icon: "twitter", url: "https://x.com/i/flow/login?redirect_after_login=%2FNishant93925066" },
  { icon: "linkedin", url: "https://www.linkedin.com/in/nishant-sharma-b845881a7/" },
];

const Footer = () => (
  <footer className="w3-content w3-padding-64 w3-text-grey w3-xlarge">
    {socialLinks.map(({ icon, url }) => (
      <a
        key={icon}
        href={url}
        target="_blank"
        rel="noopener noreferrer"
        style={{ marginRight: "10px", color: "inherit", textDecoration: "none" }}
      >
        <i className={`fa fa-${icon} w3-hover-opacity`}></i>
      </a>
    ))}
  </footer>
);

export default Footer;






/*import React from "react";

const Footer = () => (
  <footer className="w3-content w3-padding-64 w3-text-grey w3-xlarge">
    {['facebook-official', 'instagram', 'snapchat', 'pinterest-p', 'twitter', 'linkedin'].map(icon => (
      <i key={icon} className={`fa fa-${icon} w3-hover-opacity`} style={{ marginRight: "10px" }}></i>
    ))}
  </footer>
);

export default Footer;*/

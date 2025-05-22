import React from "react";

const photos = [
  { file: "OIP.jpg", link: "https://himtrek.co.in/activity/triund-trek/" },
  { file: "OIP (1).jpg", link: "https://en.wikipedia.org/wiki/Bhagsu" },
  { file: "OIP (2).jpg", link: "https://en.wikipedia.org/wiki/Dharamshala" },
  { file: "OIP (3).jpg", link: "https://en.wikipedia.org/wiki/Kasol" },
  { file: "OIP (4).jpg", link: "https://www.dalailama.com/" },
  { file: "OIP (5).jpg", link: "https://example.com/place6" },
  { file: "OIP (6).jpg", link: "https://example.com/place7" },
  { file: "OIP (7).jpg", link: "https://example.com/place8" },
  { file: "OIP (8).jpg", link: "https://example.com/place9" },
];

const Photos = () => (
  <div className="w3-padding-64 w3-content" id="photos">
    <h2 className="w3-text-light-grey">My Photos of Visiting Places</h2>
    <hr style={{ width: "200px" }} className="w3-opacity" />
    <div className="w3-row-padding" style={{ margin: "0 -16px" }}>
      {/* Left column: first 4 photos */}
      <div className="w3-half">
        {photos.slice(0, 4).map(({ file, link }, idx) => (
          <a
            key={idx}
            href={link}
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              src={`/images/${file}`}
              style={{ width: "100%", marginBottom: "16px" }}
              alt={`place ${idx + 1}`}
            />
          </a>
        ))}
      </div>

      {/* Right column: remaining 5 photos */}
      <div className="w3-half">
        {photos.slice(4).map(({ file, link }, idx) => (
          <a
            key={idx + 4}
            href={link}
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              src={`/images/${file}`}
              style={{ width: "100%", marginBottom: "16px" }}
              alt={`place ${idx + 5}`}
            />
          </a>
        ))}
      </div>
    </div>
  </div>
);

export default Photos;




/*import React from "react";

const photoPaths = [
  "OIP.jpg", "OIP (1).jpg", "OIP (2).jpg", "OIP (3).jpg", "OIP (4).jpg", "OIP (5).jpg", "OIP (6).jpg"
];

const Photos = () => (
  <div className="w3-padding-64 w3-content" id="photos">
    <h2 className="w3-text-light-grey">My Photos of visiting places</h2>
    <hr style={{ width: "200px" }} className="w3-opacity" />
    <div className="w3-row-padding" style={{ margin: "0 -16px" }}>
      <div className="w3-half">
        {photoPaths.slice(0, 3).map((file, idx) => <img key={idx} src={`/images/${file}`} style={{ width: "100%" }} alt="place" />)}
      </div>
      <div className="w3-half">
        {photoPaths.slice(3).map((file, idx) => <img key={idx} src={`/images/${file}`} style={{ width: "100%" }} alt="place" />)}
      </div>
    </div>
  </div>
);

export default Photos;*/
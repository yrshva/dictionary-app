import axios from "axios";
import { useEffect, useState } from "react";
import "../styles/Pictures.css";

export default function Pictures(props) {
  const [pictures, setPictures] = useState(null);
  function showPictures(response) {
    setPictures(response.data.photos);
    console.log("made api req");
  }

  useEffect(() => {
    const pexelsApisUrl = `https://api.pexels.com/v1/search?query=${props.word}&per_page=3`;
    axios
      .get(pexelsApisUrl, {
        headers: {
          Authorization: `Bearer ${process.env.REACT_APP_PEXELS_API_KEY}`,
        },
      })
      .then(showPictures)
      .catch((error) => {
        console.error("error while loading pictures");
      });
  }, [props.word]);

  if (pictures) {
    return (
      <div className="col-12 col-lg-6">
        <div className="pictures">
          {pictures.map((pic, index) => (
            <img
              key={index}
              src={pic.src.landscape}
              alt={pic.alt}
              className="img-fluid pic"
            />
          ))}
        </div>
      </div>
    );
  } else return null;
}

import React, { useState } from "react";
import "./image.css";
import { imageRawData } from "./data";
function DrugImages() {
  const [imageData, setImageData] = useState(imageRawData);
  function printImages() {
    return imageData.map(function (data, key) {
      return (
        <li key={key} className="drugImageWrapper d-flex col-sm-6">
          <img className="imagePharmacy" src={data.imageURl} />
        </li>
      );
    });
  }
  return (
    <div className="container text-center">
      <div className="row d-flex justify-content-center">
        <h1 className="headingWrapper">Works at 50,000 + pharmacies nationwide</h1>
      </div>
      <ul className="imageContainer mx-auto row d-flex">{printImages()}</ul>
    </div>
  );
}

export default DrugImages;

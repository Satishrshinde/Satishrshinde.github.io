import React from "react";
import ReactStars from "react-stars";
import ReactTooltip from "react-tooltip";
import { clothsData } from "./data";

function Home() {
  function listingCloths() {
    return clothsData.map(function (clothing, key) {
      return (
        <div key={key} className="col-sm-4 clothingColum">
          <div className="card text-center">
            <div className="imageWrapper">
              <img className="card-img-top" src={clothing.image} alt={""} />
            </div>
            <div className="card-body">
              <h3 className="card-title overflow">{clothing.title}</h3>
              <p data-tip data-for={`description${key}`} className="card-text overflow">
                {clothing.description}
              </p>
              <ReactTooltip id={`description${key}`} place="top" effect="solid">
                {clothing.description}
              </ReactTooltip>
              <h3>Price: {clothing.price}Rs</h3>
              <h4>Category : {clothing.category}</h4>
              <button className="btn redBtn ">ADD TO CART</button>
              <div className="d-flex justify-content-center">
                <ReactStars
                  count={clothing.rating.rate}
                  size={24}
                  color1={"#ffd700"}
                  color2={"#ffd700"}
                />
              </div>
            </div>
          </div>
        </div>
      );
    });
  }
  return (
    <div className="container">
      <div className="row">
        <h2 className="col-sm-12 text-center">Clothing Application</h2>
        {listingCloths()}
      </div>
    </div>
  );
}

export default Home;

import React from "react";
import { Link } from "react-router-dom";
import ReactStars from "react-stars";
import ReactTooltip from "react-tooltip";
import { clothsData, numberArray, personArray } from "./data";

function Home() {
  function listingCloths() {
    return clothsData.map(function (clothing, key) {
      return (
        <div className="col-sm-4 clothingColum">
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
              <h3 classname="">Price: {clothing.price}Rs</h3>
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
  function numbers() {
    return numberArray.map(function (num) {
      return <p>{num}</p>;
    });
  }
  function resume() {
    return personArray.map(function (info) {
      return (
        <li>
          <p>{info.name}</p>
          <p>{info.age}</p>
        </li>
      );
    });
  }

  return (
    <div className="container">
      <div className="row d-none">
        <h2 className="col-sm-8 text-center">Welcome User</h2>
        <div className="col-sm-4">
          <Link className="btn btn-primary col-sm-4" to="/signup">
            Sign up
          </Link>
          <Link className="btn btn-warning col-sm-4 offset-sm-2" to="/login">
            Login
          </Link>
        </div>
      </div>
      <div className="row">
        <h2 className="col-sm-12 text-center">Clothing Application</h2>
        {listingCloths()}
      </div>
      <div className="row d-none">
        <div className="col-sm-6">{numbers()}</div>
        <div className="col-sm-6">{resume()}</div>
      </div>
    </div>
  );
}

export default Home;

import React from "react";
import { Link } from "react-router-dom";
import { clothsData, numberArray, personArray } from "./data";

function Home() {
  function listingCloths() {
    return clothsData.map(function (clothing) {
      return (
        <div className="col-sm-4">
          <div class="card">
            <img class="card-img-top" src={clothing.image} alt={""} />
            <div class="card-body">
              <h3 class="card-title"> {clothing.title}</h3>
              <p class="card-text">{clothing.description}</p>
              <p>{clothing.price}</p>
              <h4>{clothing.catogory}</h4>
              <p>{clothing.rating.count}</p>
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
  const data = "name";
  console.log(data);
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

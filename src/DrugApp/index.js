import React, { useState } from "react";
import "./Drug.css";
import { drugSavings, BESTCOUNT } from "../data";

function DrugApp() {
  // this is react variable and its method
  const [drugData, setDrugData] = useState(drugSavings);
  function printDrugData() {
    return drugData.map(function (info, key) {
      return (
        <li key={key} className="col-sm-6">
          <div className="d-flex drugItem align-items-center">
            <div className="imageWraper">
              <img src={info.imageUrl} />
            </div>
            <div className="drugContent col-sm-6">
              <span className="drugName d-flex">{info.drugName}</span>
              <span className={`details ${info.quantity > 20 ? "redColor" : ""}`}>
                {info.form},{info.dosage},{info.quantity} count
              </span>
            </div>
            <div className={`priceWraper ${info.price > BESTCOUNT ? "blueColor" : ""}`}>
              <span>${info.price}</span>
            </div>
          </div>
        </li>
      );
    });
  }
  function filterData() {
    // newData is local variable
    const newData = drugData.filter(function (info) {
      return info.price < BESTCOUNT;
    });
    setDrugData(newData);
  }
  return (
    <div className="drugContainer mx-auto p-3">
      <h2 className="text-center">BEST DRUGS </h2>
      <ul className="drugListWrapper row m-0 p-0">{printDrugData()}</ul>
      <button className="btn btn-danger" onClick={filterData}>
        Show drugs less than ${BESTCOUNT}
      </button>
    </div>
  );
}

export default DrugApp;

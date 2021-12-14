import React from "react";
import { numberArray, personArray, viewers } from "./data";

function UseMapFilter() {
  function printNumbers(inputArray) {
    return inputArray.map(function (num, key) {
      return <p key={key}>{num}</p>;
    });
  }

  // filter numbers by even or odd

  function filterNumbers(type) {
    return numberArray.filter(function (num) {
      if (type === "even") {
        return num % 2 === 0;
      } else {
        return num % 2 !== 0;
      }
    });
  }

  function removeName(nameToRemove) {
    const personArray = [
      { name: "vishal", age: 28 },
      { name: "test", age: 23 },
      { name: "satish", age: 23 },
      { name: "harsh", age: 23 }
    ];
    return personArray.filter(function (data) {
      return data.name !== nameToRemove;
    });
  }

  removeName("vishal");

  function removePerticularValue(removeValue) {
    const array = [23, 3, 43, 32, 3, 3];
    return array.filter(function (num) {
      return num !== removeValue;
    });
  }

  removePerticularValue(3);

  function filterPersonArray() {
    return personArray.filter(function (info) {
      return info.age > 24;
    });
  }

  function printPersonData(inputArray) {
    return inputArray.map(function (info, key) {
      return (
        <li key={key}>
          <p>{info.name}</p>
          <p>{info.age}</p>
        </li>
      );
    });
  }

  // invert signs of number
  const Array = [1, 2, 3, 4, 5];
  function invertArray() {
    return Array.map(function (num) {
      return num * -1;
    });
  }
  console.log(invertArray());

  // multiply number by 2
  const numbers = [2, 3, 5, 7, 55];

  function doubleNumbers() {
    return numbers.map(function (num) {
      return num * 2;
    });
  }
  console.log(doubleNumbers());

  // convert numbers to string
  function numbersToString() {
    return numbers.map(function (num) {
      return num.toString();
    });
  }
  console.log(numbersToString());

  // filter array of objects based on age

  function adultViewers() {
    return viewers.filter(function (person) {
      return person.age > 18;
    });
  }
  console.log(adultViewers());

  return (
    <div className="container">
      <h2 className="text-center">Map filter programs</h2>
      <div className="row">
        <div className="col">Entire array print using map{printNumbers(numberArray)}</div>
        <div className="col">EVEN num array:: {printNumbers(filterNumbers("even"))} </div>
        <div className="col">ODD num array:: {printNumbers(filterNumbers("odd"))} </div>
        <div className="col">{printPersonData(personArray)}</div>
        <div className="col">{printPersonData(filterPersonArray())}</div>
      </div>
    </div>
  );
}

export default UseMapFilter;

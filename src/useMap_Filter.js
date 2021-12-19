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
  //console.log(invertArray());

  // multiply number by 2
  const numbers = [2, 3, 5, 7, 55];

  function doubleNumbers() {
    return numbers.map(function (num) {
      return num * 2;
    });
  }
  //console.log(doubleNumbers());

  // convert numbers to string
  function numbersToString() {
    return numbers.map(function (num) {
      return num.toString();
    });
  }
  //console.log(numbersToString());

  // filter array of objects based on age

  function adultViewers() {
    return viewers.filter(function (person) {
      return person.age > 18;
    });
  }
  //console.log(adultViewers());

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

//check if the array includes an element
// includes method true or false
// true if element exist in array otherwise false
function elementExists(arr, element) {
  return arr.includes(element);
}
console.log(elementExists([1, 2, 3, 4, 5], 2));

const array1 = [1, 2, 3];

console.log(array1.includes(2));
// expected output: true

const pets = ["cat", "dog", "bat"];

console.log(pets.includes("cat"));
// expected output: true

console.log(pets.includes("at"));
// expected output: false

//get the sum of all the numbers in array
// return single value .
function getSumOfNumbers(array) {
  return array.reduce(function (sum, num) {
    console.log(sum, num);
    return sum + num;
  }, 0);
}

const arrayOfNumber = [1, 2, 3, 4, 5];

console.log(getSumOfNumbers(arrayOfNumber));

//get the sum of all the strings in array
// return single value .
const stringArray = ["satish", "shinde", "raosaheb", "shinde"];

function getSumOfStrings(array) {
  return array.reduce(function (sum, name) {
    console.log(sum, name);
    return sum + name;
  }, "");
}
console.log(getSumOfStrings(stringArray));

//using reduce on array of object
// return single value .

const personData = [
  { name: "vishal", age: 26 },
  { name: "satish", age: 23 },
  { name: "Harsh", age: 20 }
];

function getSumOfAge(array) {
  return array.reduce(function (sum, person) {
    console.log(sum, person);
    // here person is an object with two keys i.e name and age
    // hence we are using person.age
    return sum + person.age;
  }, 0);
}

console.log(getSumOfAge(personData));

//to get length of each element
function getLengthOfElement(array) {
  return array.map(function (data) {
    return data.length;
  });
}
const people = ["satish", "rohit", "vishal", "harshwardhan"];
console.log(getLengthOfElement(people));

export default UseMapFilter;

import React from "react";
function StringFunction() {
  //1  compare two strings length
  // function Compare(str1, str2) {
  //   return str1.length === str2.length;
  // }
  // console.log(Compare("satish", "shind"));

  // //2
  // //concat first and last name
  // function concatName(firstName, lastName) {
  //   return `${lastName} ,${firstName}`;
  // }
  // console.log(concatName("satish", "shinde"));

  // // //3 find the index
  // function findIndex(arr, str) {
  //   return arr.indexOf(str);
  // }
  // console.log(findIndex(["satish", "shinde", "vishal"], "shinde"));

  // //4 convert an to string
  // function arrayToString(arr) {
  //   return arr.join(",");
  // }
  // console.log(arrayToString(["satish", "shinde", "vishal"]));

  // 5 repeat string
  function repeatString(txt, n) {
    if (typeof txt === "string") {
      return txt.repeat(n);
    }
    return "not a string";
    // alternative way
    // return typeof txt === "string" ? txt.repeat(n) : "not a string";
  }
  //console.log(repeatString(1998, 6));

  //6 check for spaces
  function checkSpaceInString(str) {
    return str.includes(" ");
  }
  //console.log(checkSpaceInString("satish, vishal"));

  // 7 convert array of number written in strings to numbers
  function convertStringToNumbers(arr) {
    return arr.map(function (i) {
      return Number(i);
    });
  }
  //console.log(convertStringToNumbers(["1.4", "4.4", "5.7", "-4.3", "9.8", "5.3"]));

  // 8 check if last alphabat N
  function isLastCharacterN(string) {
    return string.endsWith("n");
    // alternative way
    // return string[string.length -1] === 'n';
  }
  //console.log(isLastCharacterN("satish"));

  // 9 return defaultmood
  function moodTaday(mood) {
    if (mood === "") {
      return "Today I am feeling nuetral.";
    }
    return `Today I am feeling ${mood}.`;
    // alternative way
    // return `Today I am feeling ${mood ? mood : "nuetral"}.`;
  }
  //console.log(moodTaday("ss"));

  //10 count D in the string
  function countDInString(string) {
    // loop
    return string.match(/D/gi).length;
    // alternative way using for loop
    let counter = 0;
    for (let i = 0; i < string.length; i++) {
      if (string[i] === "D" || string[i] === "d") {
        counter++;
      }
    }
    return counter;
  }
  //console.log(countDInString("Doctor Dinesh is not a Good Doctor"));

  // 11 city facts
  const Paris = { name: "Paris", population: "2,140,526", continent: "Europe" };
  const Nanded = { name: "Nanded", population: "28,10,000", continent: "Asia" };

  function cityFacts(city) {
    // using object destructuring
    const { name, population, continent } = city;
    return `${name} has a population of ${population} and is situated in ${continent}.`;
  }
  //console.log(cityFacts(Nanded));

  //12 count potato in string
  function countPotato(string) {
    return string.match(/potato/g).length;
  }
  //console.log(countPotato("potato is written as potato not potata "));

  //12 count character instance
  function countCharacter(character, string) {
    let counter = 0;
    for (let i = 0; i < string.length; i++) {
      if (string[i] === character) {
        counter++;
      }
    }
    return counter;
  }
  //function countCharacter(character,string){
  //   return string.match(character/g).length
  // }
  //console.log(countCharacter("a","satya"))

  // 13 count vovels
  function countVowels(string) {
    let counter = 0;
    for (let i = 0; i < string.length; i++) {
      if (
        string[i] === "a" ||
        string[i] === "e" ||
        string[i] === "i" ||
        string[i] === "o" ||
        string[i] === "u"
      ) {
        counter++;
      }
    }
    return counter;
  }

  function countVowels2(string) {
    let counter = 0;
    let vowelArr = ["a", "e", "i", "o", "u"];

    for (let i = 0; i < string.length; i++) {
      if (/^[aeyiuo]+$/.test(string[i].toLowerCase()))
      if (vowelArr.includes(string[i].toLowerCase())) {
        counter++;
      }
    }
  }
  //console.log(countVowels("satishshinde"))

  // 14 doublton numbers (exact two integars which are not same in number. )

  function checkdoubleton(item) {
    // let unquerArr = [];
    // let inputString = `${number}`;
    // for (let i = 0;i < inputString.length;i++){
    //   if(!unquerArr.includes(inputString[i])) {
    //     unquerArr.push(inputString[i]);
    //   }
    // }
    return new Set(`${item}`).size === 2;
  }

  function doubleton(number) {
    // loop should run unless isDoubleTonNum is true
    while (!checkdoubleton(number)) {
      ++number;
    }
    return number;
  }
  console.log(doubleton(134));

  // 14/ 34/ 20 / 5 /131

  return <h1>String Programs</h1>;
}
export default StringFunction;

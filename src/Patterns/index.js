import React from "react";
import "./index.css";

const Patterns = () => {
  // how to solve this questions?
  // STEP 1 => check number of rows
  // STEP 2 => check numnber of columns
  // STEP 3 => what should be printed
  const squareStarpattern = size => {
    // row or column count
    // defining an empty string
    let string = "";
    for (let row = 0; row < size; row++) {
      // external loop
      for (let column = 0; column < size; column++) {
        // internal loop
        string += "*";
      }
      // newline after each row
      string += "\n";
    }
    console.log(string);
  };

  const leftTrianglepattern = size => {
    // defining an empty string
    let string = "";
    for (let row = 0; row < size; row++) {
      // row 1 column 1
      for (let column = 0; column <= row; column++) {
        string += "*";
      }
      // newline after each row
      string += "\n";
    }
    console.log(string);
  };

  const downwardTrianglepattern = size => {
    let string = "";
    for (let row = 0; row < size; row++) {
      for (let column = row; column < size; column++) {
        // this should be run 5 times for first time
        string += "*";
      }
      string += "\n";
    }
    console.log(string);
  };

  const numberLeftTrianglepattern = () => {
    // number of rows => 5
    // number of columns per row => 1,2,3,4,5
    // row 1 column 1
    // row 2 column 2
    // row 3 column 3
    // row 4 column 4
    // row 5 column 5
    // loop should start from 1 and run till 5
    // what should be printed ? value of j
    let string = "";
    for (let row = 1; row <= 5; row++) {
      for (let column = 1; column <= row; column++) {
        string += `${column} `;
      }
      string += "\n";
    }
    console.log(string);
  };

  const rightArrowPattern = () => {
    // number of rows are 10
    // number of columns
    // outer loop will run 2n - 1 times i.e i <= 2n - 1;
    // when row is less than column print number of columns
    // when row are greater than column => column = 2*n -row
    let size = 5;
    let string = "";
    for (let row = 0; row < 2 * size; row++) {
      // outer loop will run 10 times i.e 2n
      // added condition for inner loop
      const columnCount = row > size ? 2 * size - row : row;
      for (let column = 0; column < columnCount; column++) {
        // check if
        // here we need
        // this loop will run 10 times
        //
        string += "* ";
      }
      string += "\n";
    }
    console.log(string);
  };

  const diamondPattern = () => {
    //
  };
  return (
    <div className="patterns mx-auto">
      <div className="squareStarpattern">
        <p>1)Square star pattern</p>
        <p>
          ***** <br /> ***** <br /> ***** <br /> ***** <br /> *****
        </p>
        {/* {squareStarpattern(5)} */}
      </div>
      <div className="squareStarpattern">
        <p>2)left triangle pattern</p>
        <p>
          * <br /> ** <br /> *** <br /> **** <br /> *****
        </p>
        {/* {leftTrianglepattern(5)} */}
      </div>
      <div className="squareStarpattern">
        <p>3)downward triangle pattern</p>
        <p>
          ***** <br /> **** <br /> *** <br /> ** <br /> *
        </p>
        {/* {downwardTrianglepattern(5)} */}
      </div>
      <div className="numberLeftPyramidpattern">
        <p>4)numberLeft triangle pattern</p>
        <p>
          1 <br /> 1 2<br /> 1 2 3 <br /> 1 2 3 4 <br /> 1 2 3 4 5
        </p>
        {/* {numberLeftTrianglepattern(5)} */}
      </div>
      <div className="numberLeftPyramidpattern">
        <p>5)rightArrow pattern</p>
        <p>
          * <br /> * *<br /> * * * <br /> * * * * <br /> * * * * * <br /> * * * * <br /> * * *{" "}
          <br /> * * <br /> *
        </p>
        {/* {rightArrowPattern(5)} */}
      </div>
      <div className="numberLeftPyramidpattern">
        <p>6)diamond 6</p>
        <pre>    * <br/>
  &nbsp;&nbsp; ***<br/>
  &nbsp; ***** <br/>
 &nbsp;******* <br/>
********* <br/>
 &nbsp;******* <br/>
 &nbsp; ***** <br/>
  &nbsp; &nbsp;***<br/>
   &nbsp;&nbsp;&nbsp; *</pre>
        {/* {diamondPattern(5)} */}
      </div>
    </div>
  );
};
export default Patterns;

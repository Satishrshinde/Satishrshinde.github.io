import React from "react";
import { Link } from "react-router-dom";
import convertWeeksToDays,{convertMinuteToSeconds,person,STATES} from "./constant/index"
// console.log(convertWeeksToDays(10))
// console.log(person)
// console.log(STATES);
// console.log(convertMinuteToSeconds(5))
function Header() {
  return (
    <div className="container">
      <div className="row">
        <div className="col-sm-12 d-flex justify-content-end">
          <Link className="btn btn-primary m-3" to="/signup">
            Sign up
          </Link>
          <Link className="btn btn-warning m-3" to="/login">
            Login
          </Link>
          <Link className="btn btn-success m-3" to="/shop">
            Cloth Store
          </Link>
          <Link className="btn btn-dark m-3" to="/todoapp">
            Todo App
          </Link>
          <Link className="btn btn-danger m-3" to="/grocery">
            Grocery App
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Header;

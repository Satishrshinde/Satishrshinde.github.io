import React from "react";
import { Link } from "react-router-dom";

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
          <Link className="btn btn-success m-3" to="/">
            Clothing App
          </Link>
          <Link className="btn btn-dark m-3" to="/todoapp">
            Todo App
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Header;

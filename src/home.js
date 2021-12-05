import React from "react";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="container">
      <div className="row">
        <h2 className="col-sm-8 text-center">Welcome User</h2>
        <div>
          <Link className="btn btn-primary col-sm-4" to="/signup">
            Sign up
          </Link>
          <Link className="btn btn-warning col-sm-4 offset-sm-2" to="/login">
            Login
          </Link>
        </div>
      </div>
    </div>
  );
};
export default Home;

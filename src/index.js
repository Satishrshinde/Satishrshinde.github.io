import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Signup from "./signup";
import Login from "./login";
import Home from "./home";
import Header from "./Header";
import NotFound from "./NotFound";
import TodoApp from "./TodoApp";
// import UseMapFilter from "./useMap_Filter";
import GroceryApp from "./GroceryApp";
import StringFunction from "./string_code";
import Patterns from "./Patterns";
// import DrugApp from "./DrugApp";
// import DrugImages from "./image";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

const Routing = () => {
  return (
    <>
      <Router>
        <Header />
        <Routes>
          <Route exact path="/shop" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          {/* <Route path="/mapfilter" element={<UseMapFilter />} /> */}
          <Route path="/todoapp" element={<TodoApp />} />
          <Route path="/grocery" element={<GroceryApp />} />
          <Route path="/string" element={<StringFunction />} />
          <Route path="/pattern" element={<Patterns />} />

          {/* <Route path="/drugapp" element={<DrugApp />} />
          <Route path="/drugimages" element={<DrugImages />} /> */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Router>
    </>
  );
};

ReactDOM.render(
  <React.StrictMode>
    <Routing />
  </React.StrictMode>,
  document.getElementById("root")
);

import React from "react";
import School from "./School";



import "./School.css";
import SubTopBar2 from "./SubTopBar2";
import FunctionBarwithMap from "./FunctionBarwithMap";

function Example() {
  return (
    <div>
   <SubTopBar2 />
    <div className="container">
      <School />
      <div className = "area landscape">
      <FunctionBarwithMap />
    </div>
    </div>
    </div>
  );
}

export default Example;

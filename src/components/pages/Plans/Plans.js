import React from "react";
import Plan from "../../Plan";
import { planObjOne, planObjThree, planObjTwo } from "./data";
import "./plans.css";

function Plans() {
  return (
    <>
      <div className="main-section-plans">
        <Plan {...planObjOne}></Plan>
        <Plan {...planObjTwo}></Plan>
        <Plan {...planObjThree}></Plan>
      </div>
    </>
  );
}

export default Plans;

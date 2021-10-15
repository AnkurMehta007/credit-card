import React from "react";
import { Link } from "react-router-dom";
import { GiSilverBullet } from "react-icons/gi";
import "./Plan.css";
import { IconContext } from "react-icons/lib";

function Plan({ heading, description, price, img }) {
  return (
    <>
      <div className="plan-wrapper">
        <Link className="links">
          <div className="plan-card">
            <div className="plan-card-image-wrapper">
              <img src={img}></img>
            </div>
            <div className="plan-card-text-wrapper">
              <h1>{heading}</h1>
              <p>{description}</p>
              <h2>{price}</h2>
            </div>
          </div>
        </Link>
      </div>
    </>
  );
}

export default Plan;

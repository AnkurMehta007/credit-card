import React from "react";
import HeroSection from "../../HeroSection";

import { homeObjOne, homeObjTwo, homeObjThree, homeObjFour } from "./Data";

function Home() {
  return (
    <>
      <HeroSection {...homeObjOne}></HeroSection>
      <HeroSection {...homeObjThree}></HeroSection>
      <HeroSection {...homeObjTwo}></HeroSection>
      <HeroSection {...homeObjFour}></HeroSection>
    </>
  );
}

export default Home;

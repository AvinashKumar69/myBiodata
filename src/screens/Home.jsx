import React from "react";
import Collage from "../components/Collage";
import FamilyDetails from "../components/FamilyDetails";
import MyDetails from "../components/MyDetails";
import PersonalTimeline from "../components/PersonalTimeline";

const Home = () => {
  return (
    <>
      <MyDetails />
      <PersonalTimeline />
      <FamilyDetails />
      <Collage />
    </>
  );
};

export default Home;

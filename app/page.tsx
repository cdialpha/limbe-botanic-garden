import React from "react";
import Hero from "../components/Hero";
import Location from "../components/Location";
import QuickSummary from "../components/QuickSummary";

const Home = () => {
  return (
    <div className="overflow-hidden relative top-10">
      <Hero />
      <QuickSummary />
      <Location />
    </div>
  );
};

export default Home;

import React, { useState } from "react";
import HeroSection from "../components/HeroSection";
import InfoSection from "../components/InfoSection";
import { homeObjOne } from "../components/InfoSection/Data";
import Navbar from "../components/Navbar";
import DiscoverSection from "../components/DiscoverSection";
import {
  servicesObjOne,
  servicesObjTwo,
} from "../components/DiscoverSection/Data";
import Sidebar from "../components/Sidebar";

const Home = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <Sidebar isOpen={isOpen} toggle={toggle} />
      <Navbar toggle={toggle} />
      <HeroSection />
      <InfoSection {...homeObjOne} />
      <DiscoverSection {...servicesObjOne} />
      <DiscoverSection {...servicesObjTwo} />
    </>
  );
};

export default Home;

import React, { useState } from "react";
import HeroSection from "../components/HeroSection";
import InfoSection from "../components/InfoSection";
import { homeObjOne } from "../components/InfoSection/Data";
import Navbar from "../components/Navbar";
import ServicesSection from "../components/ServicesSection";
import {
  servicesObjOne,
  servicesObjTwo,
} from "../components/ServicesSection/Data";
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
      <ServicesSection {...servicesObjOne} />
      <ServicesSection {...servicesObjTwo} />
    </>
  );
};

export default Home;

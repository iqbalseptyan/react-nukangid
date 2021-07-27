import React, { useState } from "react";
import HeroSection from "../components/HeroSection";
import InfoSection from "../components/InfoSection";
import { homeObjOne, homeObjTwo } from "../components/InfoSection/Data";
import Navbar from "../components/Navbar";
import DiscoverSection from "../components/DiscoverSection";
import {
  discoverObjOne,
  discoverObjTwo,
} from "../components/DiscoverSection/Data";
import Sidebar from "../components/Sidebar";
import ServicesSection from "../components/ServicesSection";
import Blog from "../components/Blog";
import Profile from "../components/Profile";
import Footer from "../components/Footer";

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
      <DiscoverSection {...discoverObjOne} />
      <DiscoverSection {...discoverObjTwo} />
      <ServicesSection />
      <Blog />
      <Profile />
      <InfoSection {...homeObjTwo} />
      <Footer />
    </>
  );
};

export default Home;

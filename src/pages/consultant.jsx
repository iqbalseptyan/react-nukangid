import React from "react";
import Navbar from "../components/Consultant/Navbar";
import Services from "../components/Consultant/Services";
import Footer from "../components/Footer";
import InfoSection from "../components/InfoSection";
import { homeObjTwo } from "../components/InfoSection/Data";

const Consultant = () => {
  return (
    <>
      <Navbar />
      <Services />
      <InfoSection {...homeObjTwo} />
      <Footer />
    </>
  );
};

export default Consultant;

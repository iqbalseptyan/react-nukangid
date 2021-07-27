import React from "react";
import {
  ServicesImg,
  ServicesCard,
  ServicesContainer,
  ServicesH1,
  ServicesIcon,
  ServicesP,
  ServicesWrapper,
} from "./ServicesElements";
import playstore from "../../images/nukang.svg";
import search from "../../images/search.svg";
import chat from "../../images/chat.svg";
import hire from "../../images/hire.svg";

const ServicesSection = () => {
  return (
    <>
      <ServicesImg src={playstore} />
      <ServicesContainer id="services">
        <ServicesH1>How it works.</ServicesH1>
        <ServicesWrapper>
          <ServicesCard>
            <ServicesIcon src={search} />
            <ServicesH1>Search.</ServicesH1>
            <ServicesP>
              Browse profiles, see prices and use filters to find pros who match
              your project.
            </ServicesP>
          </ServicesCard>
          <ServicesCard>
            <ServicesIcon src={chat} />
            <ServicesH1>Chat.</ServicesH1>
            <ServicesP>
              Contact the pros you like to discuss project details.
            </ServicesP>
          </ServicesCard>
          <ServicesCard>
            <ServicesIcon src={hire} />
            <ServicesH1>Hire.</ServicesH1>
            <ServicesP>
              Check pro availability and book appointments directly in the app.
            </ServicesP>
          </ServicesCard>
        </ServicesWrapper>
      </ServicesContainer>
    </>
  );
};

export default ServicesSection;

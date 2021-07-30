import React, { useState } from "react";
import { Button } from "../ButtonElements";
import {
  HeroContainer,
  HeroBg,
  HeroContent,
  HeroH1,
  HeroBtnWrapper,
  ArrowForward,
  ArrowRight,
} from "./HeroElements";
import banner from "../../images/hero.svg";
const HeroSection = () => {
  const [hover, setHover] = useState(false);

  const onHover = () => {
    setHover(!hover);
  };
  return (
    <>
      <HeroContainer>
        <HeroBg src={banner} />
        <HeroContent>
          <HeroH1>
            Feel confident when choosing a contractor and your price
          </HeroH1>
          <HeroBtnWrapper>
            <Button
              to="signup"
              onMouseEnter={onHover}
              onMouseLeave={onHover}
              outline
              dark
              small
              fontSmall
              borderOutline
            >
              Get Started {hover ? <ArrowForward /> : <ArrowRight />}
            </Button>
          </HeroBtnWrapper>
        </HeroContent>
      </HeroContainer>
    </>
  );
};

export default HeroSection;

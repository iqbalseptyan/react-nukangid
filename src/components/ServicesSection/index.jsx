import React from "react";
import {
  Column1,
  Column2,
  ServicesCard,
  ServicesContainer,
  ServicesH1,
  ServicesH2,
  ServicesH3,
  ServicesIcon,
  ServicesP,
  ServicesRow,
  ServicesWrapper,
  StarIcon,
} from "./ServicesElements";
import icon1 from "../../images/svg-1.svg";
import icon2 from "../../images/svg-2.svg";

const ServicesSection = ({
  lightBg,
  id,
  imgStart,
  topLine,
  headLine,
  description,
  buttonLabel,
  img,
  alt,
  primary,
  dark,
  dark2,
  title,
}) => {
  return (
    <ServicesContainer id={id}>
      <ServicesH1>{title}</ServicesH1>
      <ServicesWrapper>
        <ServicesCard>
          <ServicesIcon src={icon1} />
          <ServicesRow>
            <Column1>
              <ServicesH2>Taufikurhaman</ServicesH2>
              <ServicesP>Renovasi & Bangun</ServicesP>
              <StarIcon /> 4.5
            </Column1>
            <Column2>
              <ServicesH3>Rp. 125 K/H</ServicesH3>
            </Column2>
          </ServicesRow>
        </ServicesCard>
        <ServicesCard>
          <ServicesIcon src={icon2} />
          <ServicesRow>
            <Column1>
              <ServicesH2>Eko Yulio</ServicesH2>
              <ServicesP>Renovasi & Bangun</ServicesP>
              <StarIcon /> 4.5
            </Column1>
            <Column2>
              <ServicesH3>Rp. 125 K/H</ServicesH3>
            </Column2>
          </ServicesRow>
        </ServicesCard>
        <ServicesCard>
          <ServicesIcon src={icon1} />
          <ServicesRow>
            <Column1>
              <ServicesH2>Taufikurhaman</ServicesH2>
              <ServicesP>Renovasi & Bangun</ServicesP>
              <StarIcon /> 4.5
            </Column1>
            <Column2>
              <ServicesH3>Rp. 125 K/H</ServicesH3>
            </Column2>
          </ServicesRow>
        </ServicesCard>
      </ServicesWrapper>
    </ServicesContainer>
  );
};

export default ServicesSection;

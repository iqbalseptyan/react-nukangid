import React from "react";
import {
  Column1,
  Column2,
  DiscoverCard,
  DiscoverContainer,
  DiscoverH1,
  DiscoverH2,
  DiscoverH3,
  DiscoverIcon,
  DiscoverP,
  DiscoverRow,
  DiscoverWrapper,
  StarIcon,
} from "./DiscoverElements";
import icon1 from "../../images/svg-1.svg";
import icon2 from "../../images/svg-2.svg";

const DiscoverSection = ({
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
    <DiscoverContainer id={id}>
      <DiscoverH1>{title}</DiscoverH1>
      <DiscoverWrapper>
        <DiscoverCard>
          <DiscoverIcon src={icon1} />
          <DiscoverRow>
            <Column1>
              <DiscoverH2>Taufikurhaman</DiscoverH2>
              <DiscoverP>Renovasi & Bangun</DiscoverP>
              <StarIcon /> 4.5
            </Column1>
            <Column2>
              <DiscoverH3>Rp. 125 K/H</DiscoverH3>
            </Column2>
          </DiscoverRow>
        </DiscoverCard>
        <DiscoverCard>
          <DiscoverIcon src={icon2} />
          <DiscoverRow>
            <Column1>
              <DiscoverH2>Eko Yulio</DiscoverH2>
              <DiscoverP>Renovasi & Bangun</DiscoverP>
              <StarIcon /> 4.5
            </Column1>
            <Column2>
              <DiscoverH3>Rp. 125 K/H</DiscoverH3>
            </Column2>
          </DiscoverRow>
        </DiscoverCard>
        <DiscoverCard>
          <DiscoverIcon src={icon1} />
          <DiscoverRow>
            <Column1>
              <DiscoverH2>Taufikurhaman</DiscoverH2>
              <DiscoverP>Renovasi & Bangun</DiscoverP>
              <StarIcon /> 4.5
            </Column1>
            <Column2>
              <DiscoverH3>Rp. 125 K/H</DiscoverH3>
            </Column2>
          </DiscoverRow>
        </DiscoverCard>
      </DiscoverWrapper>
    </DiscoverContainer>
  );
};

export default DiscoverSection;

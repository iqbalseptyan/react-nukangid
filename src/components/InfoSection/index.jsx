import React from "react";
import { LinkPage } from "../ButtonElements";
import {
  BtnWrap,
  Column1,
  Column2,
  Heading,
  Img,
  ImgWarp,
  InfoContainer,
  InfoRow,
  InfoWrapper,
  Subtitle,
  TextWrapper,
  TopLine,
} from "./InfoElements";

const InfoSection = ({
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
}) => {
  return (
    <>
      <InfoContainer lightBg={lightBg} id={id}>
        <InfoWrapper>
          <InfoRow imgStart={imgStart}>
            <Column1>
              <TextWrapper>
                <TopLine>{topLine}</TopLine>
                <Heading>{headLine}</Heading>
                <Subtitle> {description}</Subtitle>

                <BtnWrap>
                  <LinkPage
                    href="/consultant"
                  >
                    {buttonLabel}
                  </LinkPage>
                </BtnWrap>

              </TextWrapper>
            </Column1>
            <Column2>
              <ImgWarp>
                <Img src={img} alt={alt} />
              </ImgWarp>
            </Column2>
          </InfoRow>
        </InfoWrapper>
      </InfoContainer>
    </>
  );
};

export default InfoSection;

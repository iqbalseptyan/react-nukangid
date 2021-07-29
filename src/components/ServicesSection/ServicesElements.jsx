import styled from "styled-components";

export const ServicesImg = styled.img`
  margin-left: auto;
  margin-right: auto;
  display: block;
  width: 80%;
  height: 80%;
  /* margin-bottom: 20px; */
  @media screen and (max-width: 768px) {
    height: 100%;
    width: 100%;
  }
`;

export const ServicesContainer = styled.div`
  height: 650px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  @media screen and (max-width: 1200px) {
    height: 1100px;
  }
  @media screen and (max-width: 768px) {
    height: 2000px;
  }
  @media screen and (max-width: 480px) {
    height: 1300px;
  }
`;
export const ServicesH1 = styled.h1`
  font-size: 2.5rem;
  margin-top: 0;

  margin-left: 24px;
  color: #000;
  margin-bottom: 32px;
  @media screen and (max-width: 480px) {
    font-size: 1.5rem;
    margin-bottom: 16px;
    margin-left: auto;
    margin-right: auto;
    display: flex;
  }
`;

export const ServicesWrapper = styled.div`
  max-width: auto;
  margin: 0 auto;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  align-items: center;
  grid-gap: 16px;
  padding: 0 50px;

  @media screen and (max-width: 1200px) {
    grid-template-columns: 1fr 1fr;
    padding: 0 24px;
  }
  @media screen and (max-width: 768px) {
    grid-template-columns: 1fr;
    padding: 0 20px;
  }
`;

export const ServicesCard = styled.div`
  background: #fff;
  display: flex;
  flex-direction: column;
  align-items: center;
  width: auto;
  height: auto;
  padding: 24px;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.2);
  transition: all 0.2s ease-in-out;

  &:hover {
    transform: scale(1.02);
    transition: all 0.2s ease-in-out;
    cursor: pointer;
  }
`;
export const ServicesIcon = styled.img`
  height: 200px;
  width: 100%;
  margin-bottom: 24px;
`;

export const ServicesH2 = styled.h2`
  margin-bottom: 2px;
  font-size: 1rem;
  font-weight: 700;
  color: #626161;
`;
export const ServicesH3 = styled.h3`
  margin-bottom: 2px;
  font-size: 1rem;
  font-weight: 600;
  color: #626161;
`;
export const ServicesP = styled.p`
  text-align: center;
  font-size: 1rem;
  font-weight: 400;
`;

import styled from "styled-components";

export const ProfileContainer = styled.div`
  display: flex;
  width: 50%;
  justify-content: center;
  align-items: center;
  margin-left: auto;
  margin-right: auto;
  margin-bottom: 64px;

  @media screen and (max-width: 1024px) {
    width: auto;
  }
  @media screen and (max-width: 480px) {
    width: auto;
  }
`;

export const ProfileRow = styled.div`
  display: grid;
  grid-auto-columns: minmax(auto, auto);
  align-items: center;
  grid-template-areas: "col1 col2";
`;
export const Column1 = styled.div`
  /* text-align: left; */
  grid-area: col1;
`;
export const Column2 = styled.div`
  margin-left: 24px;
  text-align: left;
  grid-area: col2;
`;

export const ProfileH1 = styled.h1`
  /* font-size: 2.5rem
  margin-top: 0;

  color: #000;
  margin-bottom: 32px; */
  @media screen and (max-width: 480px) {
    font-size: 1.5rem;
    margin-bottom: 16px;
    margin-left: auto;
    margin-right: auto;
    display: flex;
  }
`;
export const ProfileWrapper = styled.div`
  max-width: auto;
  margin: 0 auto;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  align-items: center;
  grid-gap: 16px;
  padding: 0 50px;

  @media screen and (max-width: 1024px) {
    grid-template-columns: 1fr 1fr;
    padding: 0 24px;
  }
  @media screen and (max-width: 480px) {
    grid-template-columns: 1fr;
    padding: 0 20px;
  }
`;

export const ProfileCard = styled.div`
  background: #fff;
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 350px;
  height: auto;
  padding: 24px;
  transition: all 0.2s ease-in-out;

  &:hover {
    transform: scale(1.02);
    transition: all 0.2s ease-in-out;
    cursor: pointer;
  }
`;

export const ProfileIcon = styled.img`
  height: 260px;
  width: auto;
  border-radius: 50%;
`;

export const ProfileH2 = styled.h2`
  margin-bottom: 2px;
  font-size: 1rem;
  font-weight: 700;
  color: #626161;
`;

export const ProfileP = styled.p`
  font-size: 1rem;
  font-weight: 400;
`;

export const BannerContainer = styled.div`
  display: grid;
  width: 100%;
  height: auto;
  justify-content: center;
  align-items: center;
  margin-left: auto;
  margin-right: auto;
`;

export const Banner = styled.img`
  @media screen and (max-width: 1200px) {
    width: 100%;
    height: auto;
    margin-bottom: 24px;
  }
  @media screen and (max-width: 768px) {
    width: 100%;
    /* max-width: 400px; */
    height: auto;
    margin-bottom: 12px;
  }
`;

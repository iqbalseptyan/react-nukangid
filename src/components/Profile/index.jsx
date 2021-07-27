import React from "react";
import {
  Banner,
  BannerContainer,
  Column1,
  Column2,
  ProfileContainer,
  ProfileH1,
  ProfileH2,
  ProfileIcon,
  ProfileP,
  ProfileRow,
} from "./ProfileElements";
import IconProfile from "../../images/profile.svg";
import banner1 from "../../images/banner-1.svg";
import banner2 from "../../images/banner-2.svg";

const Profile = () => {
  return (
    <>
      <ProfileContainer>
        <ProfileRow>
          <Column1>
            <ProfileIcon src={IconProfile} />
          </Column1>
          <Column2>
            <ProfileH1>Farid Bisri</ProfileH1>
            <ProfileH2>Pengusaha</ProfileH2>
            <ProfileP>
              Pas banget listrik dirumah bermasalah malah susah banget cari
              tukang yang bagus. Pas tau ada nukang hub langsung panggil dan
              beres deh seketika. Mudah dan aman banget proses nya. Terima kasih
              nukang hub
            </ProfileP>
          </Column2>
        </ProfileRow>
      </ProfileContainer>
      <BannerContainer>
        <Banner src={banner1} />
        <Banner src={banner2} />
      </BannerContainer>
    </>
  );
};

export default Profile;

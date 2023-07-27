import styled from "styled-components";
import { BiBuildingHouse } from "react-icons/bi";
import { HiOutlineUserGroup } from "react-icons/hi";
import { MdOutlineFindInPage } from "react-icons/md";

export const HeroContainerLanding = styled.div`
  background: #fdf2ed;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0 30px;
  height: 80vh;
  position: relative;
  z-index: 1;
  padding-top: 60px;
  margin-bottom: 3rem;
`;

export const HeroContentLanding = styled.div`
  z-index: 3;
  max-width: 1200px;
  position: absolute;
  padding: 8px 24px;
  display: flex;
  flex-direction: row;
  margin-left: auto;
  margin-right: auto;
  align-items: center;
  margin-top: 3rem;

  @media screen and (max-width: 480px) {
    flex-direction: column;
  }
`;

export const ImageDesk = styled.img`
  width: 550px;
  @media screen and (max-width: 480px) {
    width: 350px;
    margin-top: 2rem;
  }
`;

export const HeroContentSubLanding = styled.div`
  margin-right: 5rem;
  margin-left: 5rem;
  @media screen and (max-width: 480px) {
    margin-right: 1rem;
    margin-left: 1rem;
  }
`;

export const HeroH1 = styled.div`
  color: #2a5965;
  font-size: 26px;
  text-align: justify;
  margin-bottom: 2rem;

  @media screen and (max-width: 480px) {
    font-size: 20px;
  }
`;

export const HeroP = styled.p`
  color: #2a5965;
  font-size: 16px;
  text-align: justify;
  margin-bottom: 2rem;

  @media screen and (max-width: 480px) {
    font-size: 16px;
  }
`;

export const ImageMob = styled.img`
  margin-top: 1.5rem;
  margin-right: 2rem;
  width: 220px;
  margin-bottom: 1.5rem;
`;

export const LandingContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  margin-left: auto;
  margin-right: auto;
  margin-top: 1rem;
  margin-bottom: 4rem;
  padding-left: 16rem;
  padding-right: 16rem;

  @media screen and (max-width: 480px) {
    flex-direction: column-reverse;
    padding-left: 2rem;
    padding-right: 2rem;
    align-items: center;
  }
`;

export const LandingSubContainer = styled.div`
  align-items: center;
  margin-left: 3rem;

  @media screen and (max-width: 480px) {
    margin-left: 1rem;
  }
`;

export const Features = styled.div`
  width: 60px;
  height: 60px;
  border-radius: 50%;
  background-color: #2a5965;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 1rem;
  @media screen and (max-width: 480px) {
    margin: 0rem 1rem 0rem 0rem;
  }
`;

export const Feature1 = styled(BiBuildingHouse)`
  color: #fff;
  font-size: 32px;
  margin: 1rem;
`;

export const Feature2 = styled(HiOutlineUserGroup)`
  color: #fff;
  font-size: 32px;
  margin: 1rem;
`;

export const Feature3 = styled(MdOutlineFindInPage)`
  color: #fff;
  font-size: 32px;
  margin: 1rem;
`;

export const FeaturesAlignment = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
`;

export const FeaturesPar = styled.div`
  margin-top: 2.5rem;
`;

export const LandingSection = styled.div`
  background: #fdf2ed;
  padding-top: 3rem;
  padding-bottom: 2rem;
  padding-left: 16rem;
  padding-right: 16rem;
  @media screen and (max-width: 480px) {
    padding-left: 3rem;
    padding-right: 3rem;
    align-items: center;
  }
`;

export const PriceCardsFlex = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;

  @media screen and (max-width: 480px) {
    flex-direction: column;
  }
`;

export const PriceCards = styled.div`
  background-color: white;
  border-radius: 10px;
  padding: 2rem;
  margin: 2rem;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  width: 330px !important;

  @media screen and (max-width: 480px) {
    margin: 2rem 0rem 1rem 0rem;
  }
`;

export const PriceHeader = styled.div`
  color: #2a5965;
  font-weight: bold;
  font-size: 22px;
  margin-bottom: 1rem;
`;

export const PriceTag = styled.p`
  font-weight: bold;
  font-size: 16px;
  margin-bottom: 2rem;
`;

export const PriceFeatures = styled.p`
  font-size: 16px;
  margin-bottom: 0.5rem;
  @media screen and (max-width: 480px) {
    margin-right: 2rem;
    text-align: justify;
  }
`;

export const ContactStyle = styled.div`
  background: #fdf2ed;
  padding-left: 20rem;
  padding-right: 20rem;
  text-align: center;
  padding-bottom: 3rem;

  @media screen and (max-width: 480px) {
    padding-left: 3rem;
    padding-right: 4rem;
    align-items: center;
    text-align: justify;
  }
`;

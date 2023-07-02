import styled from "styled-components";
import { Card, Table, Space, Image } from "antd";

export const MainContainer = styled.div``;

export const AboutFlat = styled.div`
  padding-top: 80px;
  display: flex;
  justify-content: center;

  @media screen and (max-width: 480px) {
    padding-left: 1.5rem;
  }
`;
export const AboutFlatSub = styled.div`
  width: 1000px;
  display: flex;
  flex-direction: row-reverse;
  justify-content: space-between;

  @media screen and (max-width: 480px) {
    flex-direction: column;
    width: 95%;
  }
`;

export const ImgFlex = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  margin-top: 1rem;
`;
export const Img = styled(Image)`
  border-radius: 15px;
  background-size: cover;
`;

export const CustomPreviewGroup = styled(Img.PreviewGroup)``;

export const PreviewGroup = styled.div`
  max-width: 500px;
`;
export const ImgLast = styled.div`
  display: none;
`;
export const ImgMob = styled.div`
  @media screen and (max-width: 480px) {
    display: none;
  }
`;

export const ImgElements = styled.div`
  justify-content: center;
  align-items: center;
  margin: 0.25rem;
  padding-right: 0.25rem;
`;

export const TextGroup = styled.div`
  padding-top: 1.5rem;
  max-width: 400px;
  @media screen and (max-width: 480px) {
    max-width: 82vw;
  }
`;

export const Desc = styled.p`
  text-align: justify;
`;
export const Features = styled.div`
  margin-top: 2rem;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;

export const FeaturesPar = styled.p`
  margin: 1 rem;
  font-size: 30px;
  text-align: center;
`;
export const FeaturesCol = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
`;

export const FeaturesName = styled.p`
  text-align: center;
`;

export const Price = styled.h3`
  margin-bottom: 1rem;
  font-size: 30px;
  color: #2a5965;
`;

export const Contact = styled.h3`
  margin-bottom: 15px;
`;

export const Button = styled.a`
  margin-right: 15px;
  border-radius: 50px;
  background: #2a5965;
  white-space: nowrap;
  padding: 10px 25px 8px;
  color: #fff;
  font-size: 16px;
  outline: none;
  border: none;
  cursor: pointer;
  transition: all 0.2s ease-in-out;
  text-decoration: none;

  &:hover {
    transition: all 0.2s ease-in-out;
    background: #1f424a;
    color: #fff;
  }
`;

export const MapGroup = styled.div`
  display: flex;
  justify-content: center;
  margin: 2rem;
  @media screen and (max-width: 480px) {
    max-width: 82vw;
  }
`;

import styled from "styled-components";
import { Link } from "react-router-dom";

export const ServicesContainer = styled.div`
  height: 860px;
  display: flex;
  flex-direction: column;
  justify-content: top;
  align-items: center;
  background: #2a5965;

  @media screen and (max-width: 1000px) {
    height: 1300px;
  }

  @media screen and (max-width: 768px) {
    height: 1350px;
  }

  @media screen and (max-width: 480px) {
    height: 1600px;
  }
`;

export const ServicesH2 = styled.h2`
  font-size: 2.5rem;
  color: #fdf2ed;
  margin: 80px 40px 40px 40px;

  @media screen and (max-width: 480px) {
    font-size: 2rem;
  }
`;

export const ServicesWrapper = styled.div`
  max-width: 1000px;
  margin: 30px auto;
  display: grid;
  grid-template-columns: 1fr 1fr;
  align-items: center;
  grid-gap: 30px;
  padding: 0 50px;

  @media screen and (max-width: 1000px) {
    grid-template-columns: 1fr;
  }

  @media screen and (max-width: 768px) {
    grid-template-columns: 1fr;
    padding: 0 20px;
  }
`;

export const ServicesCard = styled.div`
  background: #fdf2ed;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  border-radius: 10px;
  min-height: 500px;
  padding: 30px;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.2);
  transition: all 0.2s ease-in-out;

  &:hover {
    transform: scale(1.02);
    transition: all 0.2s ease-in-out;
  }

  @media screen and (max-width: 480px) {
    height: 600px !important;
  }

  @media screen and (max-width: 1000px) {
    min-height: 450px;
  }
`;

export const ServicesIcon = styled.img`
  height: 120px;
  width: 160px;
  margin-bottom: 10px;

  @media screen and (max-width: 1000px) {
    height: 160px;
  }
`;

export const ServicesH3 = styled.h3`
  font-size: 1.2rem;
  margin: 10px;
  color: #2a5965;
  text-align: center;
`;

export const ServicesP = styled.p`
  font-size: 1rem;
  text-align: center;
  color: #2a5965;
  margin: 1rem;
  text-align: justify;
`;

export const HeroBtnWrapper = styled.div`
  margin-top: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const Button = styled(Link)`
  background: #2a5965;
  color: #fff;
  padding: 8px 30px;
  margin: 10px;
  font-size: 14px;
  border-radius: 50px;
  white-space: nowrap;
  outline: none;
  border: none;
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
  transition: all 0.2s ease-in-out;

  &:hover {
    transition: all 0.2s ease-in-out;
    background: #1f424a;
    color: #fff;
  }
`;

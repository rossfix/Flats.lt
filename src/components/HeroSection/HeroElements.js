import styled from "styled-components";
import { MdOutlineKeyboardArrowRight, MdArrowRight } from "react-icons/md";
import { Link } from "react-router-dom";

export const HeroContainer = styled.div`
  background: #fdf2ed;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0 30px;
  height: 100vh;
  position: relative;
  z-index: 1;
  padding-top: 60px;
`;

export const HeroBg = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 100%;
  overflow: hidden;
`;

export const ImageBg = styled.img`
  width: 100%;
  height: 100%;
  -o-object-fit: cover;
  object-fit: cover;
  background: #2a5965;
`;

export const HeroContent = styled.div`
  z-index: 3;
  max-width: 1200px;
  position: absolute;
  padding: 8px 24px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const HeroH1 = styled.h1`
  color: #fff;
  font-size: 48px;
  text-align: center;

  @media screen and (max-width: 768px) {
    font-size: 40px;
  }

  @media screen and (max-width: 768px) {
    font-size: 32px;
  }
`;
export const HeroH1Under = styled.p`
  color: #fff;
  font-size: 48px;
  text-align: center;
  margin-bottom: 0px;
  margin-top: -28px;

  @media screen and (max-width: 768px) {
    font-size: 40px;
  }

  @media screen and (max-width: 768px) {
    font-size: 32px;
  }
`;

export const HeroP = styled.p`
  margin: 24px;
  color: #fff;
  font-size: 24px;
  text-align: center;
  max-width: 600px;

  @media screen and (max-width: 768px) {
    font-size: 24px;
  }

  @media screen and (max-width: 768px) {
    font-size: 18px;
  }
`;

export const HeroBtnWrapper = styled.div`
  margin-top: 8px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const Button = styled(Link)`
  background: #2a5965;
  color: #fff;
  padding: 12px 30px;
  margin: 24px;
  font-size: 16px;
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

export const ArrowForward = styled(MdArrowRight)`
  margin-left: 8px;
  font-size: 20px;
`;

export const ArrowRight = styled(MdOutlineKeyboardArrowRight)`
  margin-left: 8px;
  font-size: 20px;
`;

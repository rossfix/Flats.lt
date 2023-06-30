import React from "react";
import ScrollToTop from "../components/ScrollToTop";
import StationarNav from "../components/Navbar/NoNav";
import Hero from "../images/nuomos_administravimas.png";
import {
  HeroBg,
  HeroContainer,
  ImageBg,
  HeroContent,
  HeroH1,
  HeroP,
} from "../components/HeroSection/HeroElements";
import { NavBtnLink } from "../components/Navbar/NavbarElements";
import Footer from "../components/Footer";
import { Helmet, HelmetProvider } from "react-helmet-async";

const ErrorPage = () => {
  return (
    <>
      <HelmetProvider>
        <Helmet>
          <title>Nepavyko!</title>
        </Helmet>
      </HelmetProvider>
      <ScrollToTop />
      <StationarNav />
      <HeroContainer>
        <HeroBg>
          <ImageBg src={Hero} />
        </HeroBg>
        <HeroContent>
          <HeroH1>404</HeroH1>
          <HeroP>Šis puslapis neegzistuoja</HeroP>
          <NavBtnLink to="/">Grįžti</NavBtnLink>
        </HeroContent>
      </HeroContainer>
      <Footer />
    </>
  );
};

export default ErrorPage;

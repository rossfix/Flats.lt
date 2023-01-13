import React, { useState } from "react";
import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";
import HeroSection from "../components/HeroSection";
import InfoSection from "../components/InfoSection";
import {
  homeObjOne,
  homeObjThree,
  homeObjTwo
} from "../components/InfoSection/Data";
import Services from "../components/Services";
import Footer from "../components/Footer";
import { Helmet } from "react-helmet";

const Home = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
    <Helmet>
        <title>Nekilnojamo turto nuomos administravimas - Flats.lt</title>
        <meta
          name="description"
          content="Visos nekilnojamo turto nuomos administravimo paslaugos vienoje vietoje. Administruojame visą nuomos paslaugų ciklą: nuo paieškos iki sutarties pabaigos."
          data-react-helmet="true"
       />
    
      </Helmet>
      <Sidebar isOpen={isOpen} toggle={toggle} />
      <Navbar toggle={toggle} />
      <HeroSection />
      <InfoSection {...homeObjOne} />
      <InfoSection {...homeObjTwo} />
      <Services />
      <InfoSection {...homeObjThree} />
      <Footer />
    </>
  );
};

export default Home;

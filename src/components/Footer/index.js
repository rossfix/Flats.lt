import React from "react";
import { animateScroll as scroll } from "react-scroll";
import { useNavigate } from "react-router-dom";
import {
  FooterColumnsContainer,
  FooterContainer,
  FooterLink,
  FooterLinkItems,
  FooterLinksContainer,
  FooterLinkTitle,
  SocialMedia,
  SocialMediaWrap,
  WebsiteRights,
  FooterPar,
  FooterParLeft,
  FooterBtnDinamic,
  LanguageWrap,
  LanguageSite,
  LanguageSeparator,
} from "./FooterElements";

const Footer = () => {
  let navigate = useNavigate();

  const routeChange = () => {
    let path = "/prisijungti";
    navigate(path);
  };

  const toggleHome = () => {
    scroll.scrollToTop();
  };

  return (
    <FooterContainer>
      <FooterColumnsContainer>
        <FooterLinksContainer>
          <FooterLinkItems>
            <FooterLinkTitle to="/" onClick={toggleHome}>
              Flats.lt
            </FooterLinkTitle>
            <FooterParLeft>
              Flats.lt sprendžia visus jums rūpimus nekilnojamo turto nuomos
              administravimo klausimus. Susisiekite su mumis del savo problemos
              ir mes ją išspręsime!
            </FooterParLeft>

            <FooterLink to="/straipsniai">Straipsniai</FooterLink>
          </FooterLinkItems>

          <FooterLinkItems>
            <FooterLinkTitle>Kontaktai</FooterLinkTitle>
            <FooterPar>El. paštas: flats.lithuania@gmail.com</FooterPar>
            <FooterLink to="/kontaktu-forma">Susisiekti</FooterLink>
            <FooterLinkTitle>Savitarna</FooterLinkTitle>
            <FooterBtnDinamic onClick={routeChange}>
              Prisijungti
            </FooterBtnDinamic>
          </FooterLinkItems>
        </FooterLinksContainer>
      </FooterColumnsContainer>
      <SocialMedia>
        <SocialMediaWrap>
          <LanguageWrap>
            <WebsiteRights>Kalba: </WebsiteRights>
            <LanguageSite href="https://flats.lt/">Lietuvių</LanguageSite>
            <LanguageSeparator> | </LanguageSeparator>
            <LanguageSite href="https://en.flats.lt/">Anglų</LanguageSite>
          </LanguageWrap>
          <WebsiteRights>© Flats.lt {new Date().getFullYear()}</WebsiteRights>
        </SocialMediaWrap>
      </SocialMedia>
    </FooterContainer>
  );
};

export default Footer;

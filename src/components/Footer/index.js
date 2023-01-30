import React from "react";
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
  FooterTitle,
} from "./FooterElements";

const Footer = () => {
  let navigate = useNavigate();

  const routeChange = () => {
    let path = "/prisijungti";
    navigate(path);
  };

  return (
    <FooterContainer>
      <FooterColumnsContainer>
        <FooterLinksContainer>
          <FooterLinkItems>
            <FooterLinkTitle href="/">Nuomos administravimas</FooterLinkTitle>
            <FooterParLeft>
              Flats.lt sprendžia visus jums rūpimus nuomos administravimo
              klausimus. Susisiekite su mumis del savo problemos ir mes ją
              išspręsime!
            </FooterParLeft>

            <FooterLink to="/straipsniai">Straipsniai</FooterLink>
          </FooterLinkItems>

          <FooterLinkItems>
            <FooterTitle>Kontaktai</FooterTitle>
            <FooterPar>El. paštas: </FooterPar>
            <FooterPar>flats.lithuania@gmail.com</FooterPar>
            <FooterLink to="/kontaktu-forma">Susisiekti</FooterLink>
            <FooterTitle>Savitarna</FooterTitle>
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

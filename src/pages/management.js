import React from "react";
import ScrollToTop from "../components/ScrollToTop";
import StationarNav from "../components/Navbar/NoNav";
import Footer from "../components/Footer";
import { Helmet, HelmetProvider } from "react-helmet-async";
import { NavBtnLink } from "../components/Navbar/NavbarElements";
import desktop from "../images/nekilnojamo-turto-valdymo-platforma.png";
import mobile from "../images/Valdymo-platforma.png";

import {
  ArticleHeader,
  ArticleParagraph,
  ButtonCont,
} from "../components/ArticleOne/ArticleOneElements";
import {
  HeroContainerLanding,
  HeroContentLanding,
  HeroContentSubLanding,
  HeroH1,
  HeroP,
  LandingSubContainer,
  LandingContainer,
  Features,
  Feature1,
  Feature2,
  Feature3,
  FeaturesAlignment,
  FeaturesPar,
  ImageMob,
  LandingSection,
  PriceCards,
  PriceCardsFlex,
  PriceHeader,
  PriceTag,
  PriceFeatures,
  ContactStyle,
  ImageDesk,
} from "../components/GlobalStyles";

const ManagementLanding = () => {
  return (
    <>
      <HelmetProvider>
        <Helmet>
          <title>Nuomos valdymo platforma</title>
          <meta
            name="description"
            content="Nuomos valdymo platforma naudojant efektyvu Flats.lt įrankį. Prisijunk jau šiandien!"
            data-react-helmet="true"
          />
        </Helmet>
      </HelmetProvider>
      <ScrollToTop />
      <StationarNav />
      <HeroContainerLanding>
        <HeroContentLanding>
          <HeroContentSubLanding>
            <HeroH1>
              Nuomos valdymo platforma - visas NT valdymas vienoje vietoje!
            </HeroH1>
            <HeroP>
              Moderni, efektyvi ir patikima Nuomos Valdymo platforma, kuri
              palengvina nekilnojamo turto valdymą. Nesvarbu, ar esate fizinis
              asmuo, ar didelė bendrovė, mūsų platforma suteiks Jums galimybę
              valdyti nekilnojamą turtą efektyviau nei bet kada anksčiau.
            </HeroP>
            <ButtonCont>
              <NavBtnLink to="/kontaktu-forma">Gauti pasiūlymą</NavBtnLink>
            </ButtonCont>
          </HeroContentSubLanding>
          <div>
            <ImageDesk src={desktop} width="550"></ImageDesk>
          </div>
        </HeroContentLanding>
      </HeroContainerLanding>

      <LandingContainer>
        <LandingSubContainer>
          <ImageMob src={mobile} alt="alt2"></ImageMob>
        </LandingSubContainer>
        <LandingSubContainer>
          <ArticleHeader>
            Nuomos valdymo platformos funkcionalumas
          </ArticleHeader>
          <FeaturesAlignment>
            <Features>
              <Feature1 />
            </Features>
            <FeaturesPar>
              <h4>Nuosavybės valdymas</h4>
              <PriceFeatures>
                Sekite nuomos turtą, tvarkykite sąskaitas, sudarykite nuomos
                sutartis ir stebėkite nuomininkų veiklą su Flats.lt
              </PriceFeatures>
            </FeaturesPar>
          </FeaturesAlignment>
          <FeaturesAlignment>
            <Features>
              <Feature2 />
            </Features>
            <FeaturesPar>
              <h4>Nuomininkų valdymas</h4>
              <PriceFeatures>
                Įvertinkite potencialius nuomininkus, rinkite nuomos prašymus ir
                valdykite kalendorių su nuomininkų užklausomis.
              </PriceFeatures>
            </FeaturesPar>
          </FeaturesAlignment>
          <FeaturesAlignment>
            <Features>
              <Feature3 />
            </Features>
            <FeaturesPar>
              <h4>Skelbimu generavimas</h4>
              <PriceFeatures>
                Nebemokėkite neadekvačių sumu skelbimų portalams,
                susigeneruokite skelbimą, kurį galėsite naudoti socialiniuose
                tinkluose.
              </PriceFeatures>
            </FeaturesPar>
          </FeaturesAlignment>
        </LandingSubContainer>
      </LandingContainer>

      <LandingSection>
        <ArticleHeader>NT nuomos valdymo platformos įkainiai</ArticleHeader>
        <PriceCardsFlex>
          <PriceCards>
            <PriceHeader>Pradedančiųjų planas</PriceHeader>
            <PriceTag>Nemokamai!</PriceTag>
            <PriceFeatures>✔ 1 Nekilnojamo turto objektas</PriceFeatures>
            <PriceFeatures>✔ Nuomininkų valdymas</PriceFeatures>
            <PriceFeatures>✔ Sutarčių generavimas</PriceFeatures>
            <PriceFeatures>✔ Skelbimų generavimas</PriceFeatures>
          </PriceCards>
          <PriceCards>
            <PriceHeader> Vidutinio lygio planas</PriceHeader>
            <PriceTag>20Eur/mėn</PriceTag>
            <PriceFeatures>✔ 5 Nekilnojamo turto objektai</PriceFeatures>
            <PriceFeatures>✔ Nuomininkų valdymas</PriceFeatures>
            <PriceFeatures>✔ Sutarčių generavimas</PriceFeatures>
            <PriceFeatures>✔ Skelbimų generavimas</PriceFeatures>
            <PriceFeatures>✔ Įmokų valdymas</PriceFeatures>
            <PriceFeatures>✔ Priminimai apie pradelstas įmokas</PriceFeatures>
          </PriceCards>

          <PriceCards>
            <PriceHeader>Planas profesionalams</PriceHeader>
            <PriceTag>Asmeniniai pasiūlymai</PriceTag>
            <PriceFeatures>✔ 5+ Nekilnojamo turto objektų</PriceFeatures>
            <PriceFeatures>✔ Nuomininkų valdymas</PriceFeatures>
            <PriceFeatures>✔ Sutarčių generavimas</PriceFeatures>
            <PriceFeatures>✔ Skelbimų generavimas</PriceFeatures>
            <PriceFeatures>✔ Įmokų valdymas</PriceFeatures>
            <PriceFeatures>✔ Priminimai apie pradelstas įmokas</PriceFeatures>
          </PriceCards>
        </PriceCardsFlex>
      </LandingSection>

      <ContactStyle>
        <ArticleParagraph>
          Padidinkite savo NT pelningumą ir optimizuokite nuomos procesus mūsų
          pažangių funkcijų ir intuityvios sistemos pagalba. Užsiregistruokite
          šiandien ir pradėkite valdyti savo nuomos verslą lengvai ir efektyviai
          su modernia Nuomos valdymo platforma.
        </ArticleParagraph>
        <ButtonCont>
          <NavBtnLink to="/kontaktu-forma">Susisiekti</NavBtnLink>
        </ButtonCont>
      </ContactStyle>

      <Footer />
    </>
  );
};

export default ManagementLanding;

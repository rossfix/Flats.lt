import React from "react";
import ScrollToTop from "../components/ScrollToTop";
import StationarNav from "../components/Navbar/NoNav";
import Footer from "../components/Footer";
import { Helmet, HelmetProvider } from "react-helmet-async";
import { NavBtnLink } from "../components/Navbar/NavbarElements";
import {
  HeroContainerArticle,
  HeroBgArticle,
  ImageBgArticle,
  ArticleContainer,
  ArticleSection,
  ArticleHeader,
  ArticleParagraph,
  ArticleImg,
  ArticleSubContainer,
  ButtonCont,
  HeroContent,
  HeroH1,
} from "../components/ArticleOne/ArticleOneElements";

const ArticlePageOne = ({
  seotitle,
  seocontent,
  hero,
  heroalt,
  headerone,
  header,
  firstpar,
  firstimg,
  firstalt,
  scndheader,
  scndpar,
  scndimg,
  scndalt,
  trdheader,
  trdpar,
  trdimg,
  trdalt,
  frthheader,
  frthpar,
}) => {
  return (
    <>
      <HelmetProvider>
        <Helmet>
          <title>{seotitle}</title>
          <meta
            name="description"
            content={seocontent}
            data-react-helmet="true"
          />
        </Helmet>
      </HelmetProvider>
      <ScrollToTop />
      <StationarNav />
      <HeroContainerArticle>
        <HeroBgArticle>
          <ImageBgArticle src={hero} alt={heroalt} />
        </HeroBgArticle>
        <HeroContent>
          <HeroH1>{headerone}</HeroH1>
        </HeroContent>
      </HeroContainerArticle>
      <ArticleContainer>
        <ArticleSubContainer>
          <ArticleSection>
            <ArticleHeader>{header}</ArticleHeader>
            <ArticleParagraph>{firstpar}</ArticleParagraph>
            <ArticleImg src={firstimg} alt={firstalt} />
          </ArticleSection>
          <ArticleSection>
            <ArticleHeader>{scndheader}</ArticleHeader>
            <ArticleParagraph>{scndpar}</ArticleParagraph>
            <ArticleImg src={scndimg} alt={scndalt} />
          </ArticleSection>
          <ArticleSection>
            <ArticleHeader>{trdheader}</ArticleHeader>
            <ArticleParagraph>{trdpar}</ArticleParagraph>
            <ArticleImg src={trdimg} alt={trdalt} />
          </ArticleSection>
          <ArticleSection>
            <ArticleHeader>{frthheader}</ArticleHeader>
            <ArticleParagraph>{frthpar}</ArticleParagraph>
            <ArticleParagraph>
              Tikimės, kad šie patarimai padės jums sėkmingai nuomoti savo namą
              ar butą ir patikimai pasirūpinti savo turtu. Jei turite daugiau
              klausimų ar norite sužinoti daugiau apie nuomos procesą,
              nedvejodami kreipkitės - mūsų komanda čia, kad padėtų jums!
            </ArticleParagraph>
            <ButtonCont>
              <NavBtnLink to="/kontaktu-forma">Susisiekti</NavBtnLink>
            </ButtonCont>
          </ArticleSection>
        </ArticleSubContainer>
      </ArticleContainer>
      <Footer />
    </>
  );
};

export default ArticlePageOne;

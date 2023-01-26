import React from "react";
import Hero from "../../images/nuomos_administravimas.png";
import {
  HeroBg,
  ImageBg,
  HeroContent,
  HeroH1,
} from "../../components/HeroSection/HeroElements";
import {
  HeroContainerArticles,
  ArticlesContainer,
  ArticlesSubContainer,
  PaginationGrid,
  ArticleCont,
  AntPagination,
} from "./ArticleHomeElements";
import ArticleCard from "./CardStyle";
import {
  articleOne,
  articleTwo,
  articleThree,
  articleFour,
  articleFive,
  articleSix,
  articleSeven,
  articleEight,
  articleNine,
  articleTen,
  articleEleven,
  articleTwelve,
} from "../ArticleOne/Data";

const ArticlesHomeComponent = () => {
  return (
    <>
      <HeroContainerArticles>
        <HeroBg>
          <ImageBg src={Hero} />
        </HeroBg>
        <HeroContent>
          <HeroH1>NT Nuomos Straipsniai</HeroH1>
        </HeroContent>
      </HeroContainerArticles>
      <ArticlesContainer>
        <ArticlesSubContainer>
          <ArticleCont>
            <ArticleCard {...articleOne} />
            <ArticleCard {...articleTwo} />
            <ArticleCard {...articleThree} />
            <ArticleCard {...articleFour} />
            <ArticleCard {...articleFive} />
            <ArticleCard {...articleSix} />
            <ArticleCard {...articleSeven} />
            <ArticleCard {...articleEight} />
            <ArticleCard {...articleNine} />
            <ArticleCard {...articleTen} />
            <ArticleCard {...articleEleven} />
            <ArticleCard {...articleTwelve} />
          </ArticleCont>
          <PaginationGrid>
            <AntPagination defaultCurrent={1} total={10} />
          </PaginationGrid>
        </ArticlesSubContainer>
      </ArticlesContainer>
    </>
  );
};

export default ArticlesHomeComponent;

import React from "react";
import ScrollToTop from "../components/ScrollToTop";
import StationarNav from "../components/Navbar/NoNav";
import ArticlesHomeComponent from "../components/ArticlesHome";
import Footer from "../components/Footer";
import { Helmet } from "react-helmet";

const AllArticlesPage = () => {
  return (
    <>
      <Helmet>
        <title>NT Nuomos Straipsniai</title>
        <meta
          name="description"
          content="NT nuomos straipsniai kurie padės efektyviau valdyti nekilnojamą turtą bei administruoti jo nuomą."
          data-react-helmet="true"
       />
      </Helmet>
      <ScrollToTop />
      <StationarNav />
      <ArticlesHomeComponent />
      <Footer />
    </>
  );
};

export default AllArticlesPage;

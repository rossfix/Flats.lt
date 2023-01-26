import { React, useContext } from "react";
import "./App.css";
import "antd/dist/antd.css";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import Home from "./pages";
import ContactPage from "./pages/contacts";
import ErrorPage from "./pages/error";
import LoginPage from "./pages/login";
import AllArticlesPage from "./pages/articles";
import ArticlePageOne from "./pages/articleone";
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
} from "./components/ArticleOne/Data";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} exact />
        <Route path="/kontaktu-forma" element={<ContactPage />} exact />
        <Route path="/prisijungti" element={<LoginPage />} exact />
        <Route path="/straipsniai" element={<AllArticlesPage />} exact />
        <Route path="/*" element={<ErrorPage />} exact />
        <Route
          path="/straipsniai/nt-nuomos-patarimai"
          element={<ArticlePageOne {...articleOne} />}
          exact
        />
        <Route
          path="/straipsniai/buto-nuomos-mokesciai-lietuvoje"
          element={<ArticlePageOne {...articleTwo} />}
          exact
        />
        <Route
          path="/straipsniai/buto-nuomos-sutartis"
          element={<ArticlePageOne {...articleThree} />}
          exact
        />
        <Route
          path="/straipsniai/ilgalaike-butu-nuoma"
          element={<ArticlePageOne {...articleFour} />}
          exact
        />
        <Route
          path="/straipsniai/legali-buto-nuoma"
          element={<ArticlePageOne {...articleFive} />}
          exact
        />
        <Route
          path="/straipsniai/nekilnojamo-turto-nuoma"
          element={<ArticlePageOne {...articleSix} />}
          exact
        />
        <Route
          path="/straipsniai/nekilnojamo-turto-nuomos-administravimas"
          element={<ArticlePageOne {...articleSeven} />}
          exact
        />
        <Route
          path="/straipsniai/kaip-greitai-isnuomoti-busta"
          element={<ArticlePageOne {...articleEight} />}
          exact
        />
        <Route
          path="/straipsniai/kaip-paruosti-buta-nuomai"
          element={<ArticlePageOne {...articleNine} />}
          exact
        />

        <Route
          path="/straipsniai/ilgalaikes-nuomos-administravimas"
          element={<ArticlePageOne {...articleTen} />}
          exact
        />
        <Route
          path="/straipsniai/pasyvios-pajamos-is-nekilnojamo-turto"
          element={<ArticlePageOne {...articleEleven} />}
          exact
        />
        <Route
          path="/straipsniai/nt-brokerio-paslaugu-altervatyva"
          element={<ArticlePageOne {...articleTwelve} />}
          exact
        />
      </Routes>
    </Router>
  );
}

export default App;

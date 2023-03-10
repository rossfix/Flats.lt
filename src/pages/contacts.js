import React from "react";
import ScrollToTop from "../components/ScrollToTop";
import StationarNav from "../components/Navbar/NoNav";
import ContactForm from "../components/ContactForm";
import Footer from "../components/Footer";
import { Helmet } from "react-helmet";

const ContactPage = () => {
  return (
    <>
      <Helmet>
        <title>Susisiekite su nekilnojamo turto valdymo profesionalais</title>
        <meta
          name="description"
          content="Susisiekite su nekilnojamo turto valdymo profesionalais. Palikite savo NT nuomos klausimus mums ir mes juos išspręsime!"
          data-react-helmet="true"
       />
      </Helmet>
      <ScrollToTop />
      <StationarNav />
      <ContactForm />
      <Footer />
    </>
  );
};

export default ContactPage;

import React from "react";
import ScrollToTop from "../components/ScrollToTop";
import StationarNav from "../components/Navbar/NoNav";
import ContactForm from "../components/ContactForm";
import Footer from "../components/Footer";
import { Helmet, HelmetProvider } from "react-helmet-async";

const ContactPage = () => {
  return (
    <>
      <HelmetProvider>
        <Helmet>
          <title>Susisiekite su nekilnojamo turto valdymo profesionalais</title>
          <meta
            name="description"
            content="Susisiekite su nekilnojamo turto valdymo profesionalais. Palikite savo NT nuomos klausimus mums ir mes juos išspręsime!"
            data-react-helmet="true"
          />
        </Helmet>
      </HelmetProvider>
      <ScrollToTop />
      <StationarNav />
      <ContactForm />
      <Footer />
    </>
  );
};

export default ContactPage;

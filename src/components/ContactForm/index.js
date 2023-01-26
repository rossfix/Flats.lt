import React from "react";
import Hero from "../../images/nuomos_administravimas.png";
import {
  HeroBg,
  HeroContainer,
  ImageBg,
  HeroContent,
} from "../../components/HeroSection/HeroElements";
import {
  FormLabel,
  FormInput,
  FormContent,
  FormText,
  FormBtn,
  FormItems,
  H1,
} from "./ContactFormElements";

const ContactForm = () => {
  return (
    <HeroContainer>
      <HeroBg>
        <ImageBg src={Hero} />
      </HeroBg>
      <HeroContent>
        <H1>Susisiekite su nekilnojamo turto valdymo profesionalais</H1>
        <FormContent
          method="POST"
          name="contactform"
          className="contactForm"
          action="/sekmingai-issiusta"
        >
          <FormInput type="hidden" name="form-name" value="contactForm" />
          <FormItems>
            <FormLabel>Vardas:</FormLabel>
            <FormInput type="text" name="name" required />
          </FormItems>
          <FormItems>
            <FormLabel>El. Paštas:</FormLabel>
            <FormInput type="email" name="email" required />
          </FormItems>
          <FormItems>
            <FormLabel>Tel. Nr.:</FormLabel>
            <FormInput type="tel" name="phone" required />
          </FormItems>
          <FormItems>
            <FormLabel>Žinutė:</FormLabel>
            <FormText name="message" rows="4" required></FormText>
          </FormItems>

          <FormBtn type="submit">Siųsti</FormBtn>
        </FormContent>
      </HeroContent>
    </HeroContainer>
  );
};

export default ContactForm;

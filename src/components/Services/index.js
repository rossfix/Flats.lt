import React from "react";
import {
  ServicesCard,
  ServicesContainer,
  ServicesH2,
  ServicesH3,
  ServicesIcon,
  ServicesP,
  ServicesWrapper,
  HeroBtnWrapper,
  Button,
} from "./ServicesElements";
import Icon1 from "../../images/nuomininku-paieska.svg";
import Icon2 from "../../images/nuomos_administravimo_platforma.svg";

const Services = () => {
  return (
    <ServicesContainer id="services">
      <ServicesH2>Teikiamos nuomos administravimo paslaugos</ServicesH2>
      <ServicesWrapper>
        <ServicesCard>
          <ServicesIcon
            src={Icon1}
            alt="Nuomos administravimo paslaugos - nuomininku paieska"
          />
          <ServicesH3>Visapusis nuomos administravimas</ServicesH3>
          <ServicesP>
            Bendrausime už Jus su potencialiais nuominikais nuo jų suradimo iki
            pat sutarties pabaigos. Spręsime visus nuomininkams kilusius
            klausimus Jums tereikės mėgautis NT gaunama grąža.
          </ServicesP>
          <HeroBtnWrapper>
            <Button to="/straipsniai/nekilnojamo-turto-nuomos-administravimas">
              Plačiau
            </Button>
          </HeroBtnWrapper>
        </ServicesCard>
        <ServicesCard>
          <ServicesIcon
            src={Icon2}
            alt="Nuomos administravimo paslaugos - platforma"
          />
          <ServicesH3>Platforma nuomos administravimui</ServicesH3>
          <ServicesP>
            Norite valdyti savo turtą patys? Turime Jums sprendimą - NT valdymo
            platformą. Radus nuomininkus, valdykite objektų būseną, automatiškai
            išssiuskite sutartis bei stebėkite įmokas.
          </ServicesP>
          {/*<HeroBtnWrapper>
            <Button to="/prisijungti">Plačiau</Button>
  </HeroBtnWrapper>*/}
        </ServicesCard>
      </ServicesWrapper>
    </ServicesContainer>
  );
};

export default Services;

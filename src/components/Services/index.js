import React from "react";
import {
  ServicesCard,
  ServicesContainer,
  ServicesH2,
  ServicesH3,
  ServicesIcon,
  ServicesP,
  ServicesWrapper,
} from "./ServicesElements";
import Icon1 from "../../images/nuomininku-paieska.svg";
import Icon2 from "../../images/sutarciu-sablonai.svg";
import Icon3 from "../../images/kainos-nustatymas.svg";

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
          <ServicesH3>Nuomininkų paieška</ServicesH3>
          <ServicesP>
            Bendrausime už Jus su potencialiais nuominikais iki pat sutarties
            pabaigos, tad Jums nebereikės gaišti laiko
          </ServicesP>
        </ServicesCard>
        <ServicesCard>
          <ServicesIcon
            src={Icon2}
            alt="Nuomos administravimo paslaugos - sutarciu sablonai"
          />
          <ServicesH3>Sutartys</ServicesH3>
          <ServicesP>
            Pagal Jūsų poreikį paruošime sutarčiu šablonus, kuriuos galėsite
            pasirašyti elekroniniu parašu
          </ServicesP>
        </ServicesCard>
        <ServicesCard>
          <ServicesIcon
            src={Icon3}
            alt="Rinkos analize nuomos administravimo paslaugoms"
          />
          <ServicesH3>Kainos nustatymas</ServicesH3>
          <ServicesP>
            Nuolat stebime rinkos kainos tendencijas, tad visuomet išlaikysime
            jums palankias nuomos kainas
          </ServicesP>
        </ServicesCard>
      </ServicesWrapper>
    </ServicesContainer>
  );
};

export default Services;

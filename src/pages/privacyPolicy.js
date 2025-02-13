import React from 'react';
import ScrollToTop from '../components/ScrollToTop';
import StationarNav from '../components/Navbar/NoNav';
import Footer from '../components/Footer';
import { Helmet, HelmetProvider } from 'react-helmet-async';

const PrivacyPolicyPage = () => {
  return (
    <>
      <HelmetProvider>
        <Helmet>
          <title>
            Privatumo politika - Nekilnojamo turto kainų analizatorius
          </title>
          <meta
            name="description"
            content="Mūsų Privatumo Politika paaiškina, kaip mes renkamės, naudojame ir apsaugome jūsų asmeninę informaciją. Sužinokite daugiau apie jūsų teises ir mūsų duomenų naudojimo praktiką."
            data-react-helmet="true"
          />
        </Helmet>
      </HelmetProvider>
      <ScrollToTop />
      <StationarNav />

      {/* Privatumo politikos turinys */}
      <div className="privacy-policy-container">
        <h1>Privatumo politika</h1>

        <section>
          <h2>Įsigaliojimo data: 2025-02-10</h2>
          <p>
            Mes gerbiame jūsų privatumą ir esame pasiryžę apsaugoti jūsų
            asmeninę informaciją. Ši Privatumo Politika paaiškina, kaip mes
            renkame, naudojame ir saugome jūsų duomenis, kai naudojatės mūsų
            paslaugomis. Naudodamiesi mūsų paslaugomis, jūs sutinkate su šios
            Privatumo Politikos sąlygomis.
          </p>
        </section>

        <section>
          <h2>1. Renkami duomenys</h2>
          <ul>
            <li>
              <strong>„Google“ autentifikacijos duomenys:</strong> Mes renkame
              jūsų „Google“ paskyros el. pašto adresą ir pagrindinę profilio
              informaciją, kai prisijungiate naudodami „Google“ paskyrą.
            </li>
            <li>
              <strong>„Stripe“ mokėjimo informacija:</strong> Naudotojams, kurie
              atlieka mokėjimus, mes renkame jūsų sąskaitos informaciją,
              pavyzdžiui, kredito kortelės duomenis, kad saugiai apdorotume
              mokėjimus per „Stripe“.
            </li>
            <li>
              <strong>Naudojimo duomenys:</strong> Galime rinkti anoniminius
              duomenis apie tai, kaip naudojatės mūsų plėtiniu, kad pagerintume
              paslaugas.
            </li>
          </ul>
        </section>

        <section>
          <h2>2. Kaip mes naudojame jūsų informaciją</h2>
          <p>Renkame informaciją šiems tikslams:</p>
          <ul>
            <li>
              <strong>Autentifikavimas:</strong> Kad galėtume identifikuoti jus
              ir užtikrinti saugų prieigą prie paslaugų.
            </li>
            <li>
              <strong>Prenumeratos valdymas:</strong> Kad galėtume apdoroti
              mokėjimus ir valdyti jūsų prenumeratą.
            </li>
            <li>
              <strong>Paslaugų tobulinimas:</strong> Kad galėtume analizuoti
              naudojimosi duomenis ir tobulinti vartotojo patirtį.
            </li>
            <li>
              <strong>Komunikacija:</strong> Kad galėtume siųsti pranešimus,
              atnaujinimus ir pagalbos informaciją apie jūsų paskyrą.
            </li>
          </ul>
        </section>

        <section>
          <h2>3. Jūsų informacijos dalijimasis</h2>
          <p>
            Mes nedalijame, neparduodame ir neperduodame jūsų asmeninės
            informacijos trečiosioms šalims, išskyrus šiuos atvejus:
          </p>
          <ul>
            <li>
              <strong>Paslaugų teikėjai:</strong> Galime dalytis duomenimis su
              patikimais paslaugų teikėjais, tokiais kaip „Google“ ir „Stripe“,
              kad užtikrintume autentifikavimą ir mokėjimų apdorojimą.
            </li>
            <li>
              <strong>Teisiniai reikalavimai:</strong> Galime atskleisti jūsų
              informaciją, jei to reikalauja įstatymai arba atsakyti į teisinį
              procesą.
            </li>
          </ul>
        </section>

        <section>
          <h2>4. Saugumas</h2>
          <p>
            Mes imamės tinkamų saugumo priemonių, kad apsaugotume jūsų duomenis
            nuo neautorizuoto prieigos, pakeitimų ar atskleidimo. Tačiau jokia
            internetinė duomenų perdavimo metodika nėra visiškai saugi, ir mes
            negalime garantuoti visiško saugumo.
          </p>
        </section>

        <section>
          <h2>5. Jūsų teisės</h2>
          <p>Jūs turite teisę į:</p>
          <ul>
            <li>Prieigą prie mūsų turimos jūsų asmeninės informacijos.</li>
            <li>
              Papildymą ar koregavimą, jei informacija yra neteisinga ar
              neišsami.
            </li>
            <li>
              Reikalauti ištrinti jūsų asmeninę informaciją tam tikromis
              sąlygomis.
            </li>
            <li>Nutraukti marketingo pranešimų gavimą bet kada.</li>
          </ul>
        </section>

        <section>
          <h2>6. Privatumo politikos pakeitimai</h2>
          <p>
            Mes galime atnaujinti šią Privatumo Politiką laikui bėgant. Bet
            kokie pakeitimai bus paskelbti šioje svetainėje su atnaujinta
            „Įsigaliojimo data“. Rekomenduojame periodiškai peržiūrėti šią
            politiką.
          </p>
        </section>

        <section>
          <h2>7. Kontaktai</h2>
          <p>
            Jei turite klausimų apie šią Privatumo Politiką arba mūsų praktiką,
            susisiekite su mumis šiais duomenimis:
          </p>
          <p>El. paštas: flats.lithuania@gmail.com</p>
        </section>
      </div>

      <Footer />
    </>
  );
};

export default PrivacyPolicyPage;

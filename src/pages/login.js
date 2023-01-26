import { React, useState, useContext } from "react";
import ScrollToTop from "../components/ScrollToTop";
import StationarNav from "../components/Navbar/NoNav";
import Hero from "../images/nuomos_administravimas.png";
import {
  HeroBg,
  HeroContainer,
  ImageBg,
  HeroContent,
  HeroH1,
  HeroP,
} from "../components/HeroSection/HeroElements";
import styled from "styled-components";
import { Button, Form, Input } from "antd";

import Footer from "../components/Footer";
import { Helmet } from "react-helmet";

const BetterButton = styled(Button)`
  color: #fff !important;
  margin-left: 5px;
  border-radius: 50px;
  background: #2a5965;
  font-size: 16px;
  outline: none;
  border: none;
  &:hover {
    transition: all 0.2s ease-in-out;
    background: #1f424a;
    color: #fff;
  }
  &:focus {
    background: #2a5965;
  }
`;

const Label1 = styled.p`
  color: #fff;
  font-size: 16px;
  margin-top: 3px;
`;
const Label2 = styled.p`
  color: #fff;
  font-size: 16px;
  padding-top: 13px;
`;

const FormContainer = styled.div`
  display: flex;
`;

const ColumnContainer = styled.div`
  flex: 50%;
`;

const LoginPage = () => {
  return (
    <>
      <Helmet>
        <title>NT administravimo platforma - prisijungti</title>
        <meta
          name="description"
          content="NT administravimo platforma, prisijungti nieko nekainuoja, palikite mums savo kontaktus ir mes su jumis susisieksime!"
          data-react-helmet="true"
        />
      </Helmet>
      <ScrollToTop />
      <StationarNav />
      <HeroContainer>
        <HeroBg>
          <ImageBg src={Hero} />
        </HeroBg>
        <HeroContent>
          <HeroH1>NT administravimo platforma - prisijungti</HeroH1>

          <Form
            name="basic"
            wrapperCol={{
              span: 25,
            }}
            autoComplete="off"
          >
            <FormContainer>
              <ColumnContainer>
                <Label1>Prisijungimo vardas:</Label1>
                <Label2>Slaptažodis:</Label2>
              </ColumnContainer>
              <ColumnContainer>
                <Form.Item
                  name="username"
                  rules={[
                    {
                      required: true,
                      message: "Įrašykite vardą!",
                    },
                  ]}
                >
                  <Input type="email" onChange={console.log("pavyko!")} />
                </Form.Item>

                <Form.Item
                  name="password"
                  rules={[
                    {
                      required: true,
                      message: "Įrašykite slaptažodį!",
                    },
                  ]}
                >
                  <Input.Password
                    type="password"
                    onChange={console.log("pavyko!")}
                  />
                </Form.Item>
              </ColumnContainer>
            </FormContainer>
            <Form.Item
              wrapperCol={{
                offset: 8,
              }}
            >
              <BetterButton
                onClick={() => {
                  alert("Neteisingas vartotojo vardas!");
                }}
              >
                Prisijungti
              </BetterButton>
            </Form.Item>
          </Form>

          <HeroP>
            Neturi paskyros? <a href="/kontaktu-forma">Parašyk mums</a> ir mes
            sukursime tau paskyrą!
          </HeroP>
        </HeroContent>
      </HeroContainer>
      <Footer />
    </>
  );
};

export default LoginPage;

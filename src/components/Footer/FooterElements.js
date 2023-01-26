import styled from "styled-components";
import { Link } from "react-router-dom";

export const FooterContainer = styled.footer`
  background-color: #2a5965;
`;

export const FooterColumnsContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const FooterLinksContainer = styled.div`
  max-width: 1000px;
  margin: 0rem 1.5rem;
  display: grid;
  grid-template-columns: 4fr 1fr;
  align-items: center;
  grid-gap: 16px;

  @media screen and (max-width: 768px) {
    grid-template-columns: 1fr;
    padding: 0 20px;
  }
`;

export const FooterLinkItems = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  margin: 16px;
  text-align: left;
  width: 260px;
  text-align: justify;
  box-sizing: border-box;
  color: #fff;

  @media screen and (max-width: 420px) {
    margin: 0;
    padding: 10px;
    width: 100%;
  }
`;

export const FooterLinkTitle = styled.a`
  color: #fff;
  text-align: justify;
  text-decoration: none;
  font-weight: bold;
  font-size: 14px;
  margin: 16px 0px;
  width: 160px;
  &:hover {
    text-decoration: none;
    color: #fff;
  }
`;
export const FooterTitle = styled.p`
  color: #fff;
  text-align: justify;
  text-decoration: none;
  font-weight: bold;
  font-size: 14px;
  margin: 16px 0px;
  width: 160px;
`;

export const FooterLink = styled(Link)`
  color: #2a5965;
  text-decoration: none;
  margin-bottom: 0.5rem;
  font-size: 14px;
  border-style: solid;
  border-width: 1px;
  padding: 0px 8px;
  border-radius: 10px;
  background-color: #fdf2ed;
  &:hover {
    color: #1f424a;
    transition: 0.3s ease-out;
    transform: scale(1.02);
  
  }
  }
`;

export const FooterBtnDinamic = styled.button`
color: #2a5965;
text-decoration: none;
margin-bottom: 0.5rem;
font-size: 14px;
border-style: solid;
border-width: 0px;
padding: 0px 8px;
border-radius: 10px;
background-color: #fdf2ed;
&:hover {
  color: #1f424a;
  transition: 0.3s ease-out;
  transform: scale(1.02);

}
}`;

export const FooterParLeft = styled.p`
  color: #fff;
  text-decoration: none;
  margin-bottom: 1rem;
  font-size: 14px;
`;

export const FooterPar = styled.p`
  color: #fff;
  text-decoration: none;
  margin-bottom: 0.2rem;
  font-size: 14px;
`;

export const SocialMedia = styled.section`
  width: 100%;
`;

export const SocialMediaWrap = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  max-width: 1100px;
  margin: 40px auto 0 auto;
  flex-direction: column;
  }
`;

export const WebsiteRights = styled.small`
  color: #fff;
  margin-bottom: 16px;
`;

export const LanguageWrap = styled.div`
  display: flex;
  align-items: baseline;
  margin-bottom: -16px;
`;

export const LanguageSite = styled.a`
  margin: 2px;
  color: #fff;
`;

export const LanguageSeparator = styled.div`
  color: #fff;
`;

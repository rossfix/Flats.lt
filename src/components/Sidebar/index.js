import React from "react";
import {
  SidebarContainer,
  Icon,
  CloseIcon,
  SidebarWrapper,
  SidebarMenu,
  SidebarLink,
  SideBtnWrap,
  SidebarRoute,
} from "./SidebarElements";

const Sidebar = ({ isOpen, toggle }) => {
  return (
    <SidebarContainer isOpen={isOpen} onClick={toggle}>
      <Icon onClick={toggle}>
        <CloseIcon> </CloseIcon>
      </Icon>
      <SidebarWrapper>
        <SidebarMenu>
          <SidebarLink
            to="about"
            onClick={toggle}
            smooth={true}
            duration={500}
            spy={true}
            exact="true"
          >
            Apie
          </SidebarLink>
          <SidebarLink
            to="discover"
            onClick={toggle}
            smooth={true}
            duration={500}
            spy={true}
            exact="true"
          >
            Nauda
          </SidebarLink>
          <SidebarLink
            to="services"
            onClick={toggle}
            smooth={true}
            duration={500}
            spy={true}
            exact="true"
          >
            Paslaugos
          </SidebarLink>
          <SidebarLink
            to="signup"
            onClick={toggle}
            smooth={true}
            duration={500}
            spy={true}
            exact="true"
          >
            Partneriai
          </SidebarLink>
        </SidebarMenu>
        <SideBtnWrap>
          <SidebarRoute to="/kontaktu-forma">Susisiekti</SidebarRoute>
        </SideBtnWrap>
        <SideBtnWrap>
          <SidebarRoute to="/prisijungti">Prisijungti</SidebarRoute>
        </SideBtnWrap>
      </SidebarWrapper>
    </SidebarContainer>
  );
};

export default Sidebar;

import {
  HeaderWrap,
  HeaderContainer,
  HeaderNav,
  HeaderNavList,
  HeaderNavItem,
  HeaderContactsList,
  HeaderContact,
  HeaderLogoLink,
  HeaderLogoImg,
  HeaderNavLink,
  HeaderContactLink,
  HeaderBurgerMenuIsHidden,
  HeaderBurgerMenuIsOpen,
  HeaderMobNav,
  HeaderMobContacts,
  HeaderBurgerMenuBtnToogle,
  HeaderMobContact,
  HeaderMobContactsList,
} from './Header.styled';
import Logo from '../../img/logo.png';
import { CiMobile3, CiInstagram, CiBurger, CiMail } from 'react-icons/ci';

const Header = () => {

  return (
    <HeaderWrap>
      <HeaderContainer>
        {/*--------------------- Burger MENU */}
        <HeaderBurgerMenuBtnToogle type="button" >
          <CiBurger />
        </HeaderBurgerMenuBtnToogle>
        <HeaderBurgerMenuIsHidden>
          <HeaderBurgerMenuIsOpen>
            <HeaderMobNav>
              <HeaderNavList>
                <HeaderNavItem>
                  <HeaderNavLink href="#"> Home </HeaderNavLink>
                </HeaderNavItem>
                <HeaderNavItem>
                  <HeaderNavLink href="#"> About us </HeaderNavLink>
                </HeaderNavItem>
                <HeaderNavItem>
                  <HeaderNavLink href="#"> Gallery </HeaderNavLink>
                </HeaderNavItem>
                <HeaderNavItem>
                  <HeaderNavLink href="#"> Shop </HeaderNavLink>
                </HeaderNavItem>
              </HeaderNavList>
            </HeaderMobNav>
            <HeaderMobContacts>
              <HeaderMobContactsList>
                <HeaderMobContact>
                  <HeaderContactLink href="tel:+34567890123">
                    <CiMobile3></CiMobile3>
                  </HeaderContactLink>
                </HeaderMobContact>
                <HeaderMobContact>
                  <HeaderContactLink href="mailto:clayshop@workshop.io">
                    <CiMail></CiMail>
                  </HeaderContactLink>
                </HeaderMobContact>
                <HeaderMobContact>
                  <HeaderContactLink href="https://instagram.com/zola_ceramic_atelier?igshid=MzRlODBiNWFlZA==">
                    <CiInstagram></CiInstagram>
                  </HeaderContactLink>
                </HeaderMobContact>
              </HeaderMobContactsList>
            </HeaderMobContacts>
          </HeaderBurgerMenuIsOpen>
        </HeaderBurgerMenuIsHidden>
        {/* --------------------- */}
        {/*---------------------- Navigation and Contacts---------- */}
        <HeaderNav>
          <HeaderNavList>
            <HeaderNavItem>
              <HeaderNavLink href="#"> Home </HeaderNavLink>
            </HeaderNavItem>
            <HeaderNavItem>
              <HeaderNavLink href="#"> About us </HeaderNavLink>
            </HeaderNavItem>
            <HeaderNavItem>
              <HeaderNavLink href="#"> Gallery </HeaderNavLink>
            </HeaderNavItem>
            <HeaderNavItem>
              <HeaderNavLink href="#"> Shop </HeaderNavLink>
            </HeaderNavItem>
          </HeaderNavList>
        </HeaderNav>
        <HeaderLogoLink href="/">
          <HeaderLogoImg src={Logo} alt="logo" />
        </HeaderLogoLink>
        <HeaderContactsList>
          <HeaderContact>
            <HeaderContactLink href="tel:+34567890123">
              <CiMobile3></CiMobile3>
            </HeaderContactLink>
          </HeaderContact>
          <HeaderContact>
            <HeaderContactLink href="mailto:clayshop@workshop.io">
              <CiMail></CiMail>
            </HeaderContactLink>
          </HeaderContact>
          <HeaderContact>
            <HeaderContactLink href="https://instagram.com/zola_ceramic_atelier?igshid=MzRlODBiNWFlZA==">
              <CiInstagram></CiInstagram>
            </HeaderContactLink>
          </HeaderContact>
        </HeaderContactsList>
        {/*  */}
      </HeaderContainer>
    </HeaderWrap>
  );
};

export default Header;

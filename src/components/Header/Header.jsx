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
} from './Header.styled';
import Logo from '../../img/logo.png';
import { CiMobile3 , CiInstagram , CiBurger} from 'react-icons/ci';
const Header = () => {
  
  return (
    <HeaderWrap>
      <HeaderContainer>
      <HeaderBurgerMenuBtnToogle type="button" data-menu-open-close>
          <CiBurger/>
        </HeaderBurgerMenuBtnToogle>
        <HeaderBurgerMenuIsHidden data-menu>
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
              <HeaderContactsList>
          <HeaderMobContacts><HeaderContactLink href='tel:+34567890123'><CiMobile3></CiMobile3></HeaderContactLink></HeaderMobContacts>
          <HeaderMobContacts><HeaderContactLink href='mailto:clayshop@workshop.io'><CiInstagram></CiInstagram></HeaderContactLink></HeaderMobContacts>
          <HeaderMobContacts><HeaderContactLink href='https://instagram.com/zola_ceramic_atelier?igshid=MzRlODBiNWFlZA=='><CiInstagram></CiInstagram></HeaderContactLink></HeaderMobContacts>
        </HeaderContactsList>
            </HeaderMobContacts>
          </HeaderBurgerMenuIsOpen>
        </HeaderBurgerMenuIsHidden>
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
          <HeaderContact><HeaderContactLink href='tel:+34567890123'><CiMobile3></CiMobile3></HeaderContactLink></HeaderContact>
          <HeaderContact><HeaderContactLink href='mailto:clayshop@workshop.io'><CiInstagram></CiInstagram></HeaderContactLink></HeaderContact>
          <HeaderContact><HeaderContactLink href='https://instagram.com/zola_ceramic_atelier?igshid=MzRlODBiNWFlZA=='><CiInstagram></CiInstagram></HeaderContactLink></HeaderContact>
        </HeaderContactsList>
      </HeaderContainer>
    </HeaderWrap>
  );
};

export default Header;

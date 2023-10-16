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
} from './Header.styled';
import Logo from '../../img/logo.png';

const Header = () => {
  return (
    <HeaderWrap>
      <HeaderContainer>
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
          <HeaderContact>Telephone</HeaderContact>
          <HeaderContact>Email</HeaderContact>
          <HeaderContact>Instagram</HeaderContact>
        </HeaderContactsList>
      </HeaderContainer>
    </HeaderWrap>
  );
};

export default Header;

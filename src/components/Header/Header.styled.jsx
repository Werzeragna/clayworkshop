import { styled } from 'styled-components';

export const HeaderWrap = styled.header`
  display: flex;
  background-color: var(--secondaryBackground);
  /* background-image: linear-gradient(to bottom, #662e1c, #662e1c00); */
  position: absolute;
  top: 0px;
  left: 0px;
  height: 80px;
  @media screen and (min-width: 768px) {
    height: 80px;
  }
  @media screen and (min-width: 1200px) {
    height: 140px;
  }
  z-index: 100;
`;

export const HeaderContainer = styled.div`
  /* border: 1px solid red; */
  width: 100vw;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  position: relative;
  padding: 5px 12px;
  @media screen and (min-width: 768px) {
    padding: 8px 20px;
  }
  @media screen and (min-width: 1200px) {
    padding: 10px 40px;
  }
`;

export const HeaderLogoLink = styled.a`
  position: absolute;
  top: 20px;
  left: 48%;
`;

export const HeaderLogoImg = styled.img`
  
  opacity: 0.9;
  display: none;

  @media screen and (min-width: 768px) {
    height: 50px;
    display: block;
  }
  @media screen and (min-width: 1200px) {
    height: 90px;
  }
`;

export const HeaderNav = styled.nav`
  display: none;

  @media screen and (min-width: 768px){
    display: flex;
    align-items: center;
  }
`;
export const HeaderNavList = styled.ul`
  display: flex;
  flex-direction: row;
  gap: 8px;
  @media screen and (min-width: 768px) {
    gap: 16px;
  }
  @media screen and (min-width: 1200px) {
    gap: 30px;
  }
`;

export const HeaderNavItem = styled.li`
  font-family: 'Roboto Condensed';
  font-weight: 700;
  font-size: 10px;
  transition: all 100ms ease-in-out;
  &:hover {
    transform: scale(1.1);
  }

  @media screen and (min-width: 768px) {
    font-size: 20px;
  }
  @media screen and (min-width: 1200px) {
    font-size: 28px;
  }
`;
export const HeaderNavLink = styled.a`
  color: var(--mainWhite);
`;
export const HeaderContactsList = styled.ul`
  display: none;
  @media screen and (min-width: 768px) {
  display: flex;
  flex-direction: row;
  align-items: center;
    gap: 16px;
  }
  @media screen and (min-width: 1200px) {
    gap: 30px;
  }
`;

export const HeaderContact = styled.li`
  font-family: 'Roboto Condensed';
  font-weight: 400;
  font-size: 10px;

  transition: all 200ms ease-in-out;
  &:hover {
    transform: scale(1.1);
  }

  @media screen and (min-width: 768px) {
    font-size: 20px;
    font-weight: 700;
  }
  @media screen and (min-width: 1200px) {
    font-size: 28px;
    /* font-weight: 700; */
  }
`;

export const HeaderContactLink = styled.a`
  color: var(--mainWhite);
`;

export const HeaderBurgerMenuBtnToogle = styled.button`
display: block;
position: absolute;
top: 18px;
right: 12px;

height: 36px;
width: 36px;
background-color: transparent;
outline: none;
border: none;
color: var(--mainWhite);

@media screen and (min-width: 768px){
  display: none;
}
`;

export const HeaderBurgerMenuIsHidden = styled.div`
display: flex;
justify-content: center;
align-items: center;
flex-direction: column;

@media screen and (min-width: 768px){
  display: none;
}
`;

export const HeaderBurgerMenuIsOpen = styled.div`
display: flex;
flex-direction: column;
`;

// export const HeaderBurgerMenuBtnClose = styled.button``;

export const HeaderMobNav = styled.div`
display: flex;
flex-direction: column;

@media screen and (min-width: 768px){
  display: none;
  
}
`;

export const HeaderMobContacts = styled.div`


@media screen and (min-width: 768px){
  display: none;
  
}
`

export const HeaderMobContactsList =styled.ul`
display: flex;
justify-content: center;
align-items: center;
flex-direction: row;
@media screen and (min-width: 768px) {
  display: none;
}
`
export const HeaderMobContact = styled.li`


@media screen and (min-width: 768px){
  display: none;
  
}
`

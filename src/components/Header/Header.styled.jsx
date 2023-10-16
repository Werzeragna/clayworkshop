import { styled } from "styled-components";

export const HeaderWrap = styled.header`
display: flex;
/* background-color: var(--secondaryBackground); */
background-image: linear-gradient(to bottom, #662e1c90, #662e1c00);
/* opacity: 0.1; */
height: 140px;
padding: 10px;
`

export const HeaderContainer = styled.div`
/* border: 1px solid red; */
width: 100vw;
display: flex;
flex-direction: row;
justify-content: space-between;
position: relative;
padding: 10px 40px;
`

export const HeaderLogoLink = styled.a`
position: absolute;
top: 20px;
left: 48%;
`

export const HeaderLogoImg = styled.img`
height: 90px;
opacity: 0.9;
`


export const HeaderNav = styled.nav`
display: flex;
align-items: center;
`
export const HeaderNavList = styled.ul`
display: flex;
flex-direction: row;
gap: 30px;
`

export const HeaderNavItem = styled.li`
font-family: 'Roboto Condensed';
font-weight: 700;
font-size: 30px;
transition: all 100ms ease-in-out;
&:hover {
    transform: scale(1.1);
}

`
export const HeaderNavLink = styled.a`
color: var(--mainWhite);
`
export const HeaderContactsList = styled.ul`
display: flex;
flex-direction: row;
align-items: center;
gap: 30px;
font-family: 'Roboto Condensed';
font-weight: 700;
font-size: 30px;
`

export const HeaderContact = styled.li`

`

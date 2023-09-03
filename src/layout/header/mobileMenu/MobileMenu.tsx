import React from 'react';
import styled, {css} from "styled-components";
import {theme} from "../../../styles/Theme";
import {Logo} from "../../../components/logo/Logo";



export const MobileMenu = (props: {menuItems: Array<string>}) => {
    return (
        <StyledMobileMenu>
            <BurgerButton isOpen={false}>
                <span></span>

            </BurgerButton>

            <MobileMenuPopup isOpen={false}>
                <StyledLogo>
                    <Logo/>
                </StyledLogo>
                <ul>
                    {props.menuItems.map((item, index)=>{
                        return <ListItem key={index}>
                            <Link href="">{item}</Link>
                        </ListItem>
                    })}
                    <ChooseLang>
                        <option value="">EN</option>
                        <option value="">RU</option>
                        <option value="">UA</option>
                    </ChooseLang>
                </ul>
            </MobileMenuPopup>


        </StyledMobileMenu>
    );
};

const StyledMobileMenu = styled.nav`
  display: none;
  
      @media ${theme.media.tablet} {
        display: block;
        font-size: 32px;
    }
`

const MobileMenuPopup = styled.div<{isOpen: boolean}>`
  position: fixed;
  background-color: rgba(40, 44, 51, 0.95);
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: 9999;
  display: none;

  ${props => props.isOpen && css<{ isOpen: boolean }>`
    display: flex;
    justify-content: flex-start;
    align-items: start;

  `}
  ul {
    display: flex;
    gap: 30px;
    flex-direction: column;
    align-items: start;
    justify-content: start;
    margin-left: -85px;
    margin-top: 100px;
    
  }
`

const BurgerButton = styled.button<{isOpen: boolean}>`
  position: relative;
  top: -10px;
  right: -10px;
  width: 50px;
  height: 50px;
  z-index: 999999;
  
  span {
    display: block;
    width: 24px;
    height: 2px;
    background-color: ${theme.colors.font};
    position: absolute;
    left: 10px;
    bottom: 20px;
    
    ${props => props.isOpen && css<{isOpen: boolean}>`
      background-color: rgba(255, 255, 255, 0);
    `}

    &::before {
      content: "";
      display: block;
      width: 24px;
      height: 2px;
      background-color: ${theme.colors.font};
      position: absolute;
      transform: translateY(-10px);
      right: 0;

      ${props => props.isOpen && css<{ isOpen: boolean }>`
        transform: rotate(-45deg) translateY(0);
        bottom: 60px;
        left: 50px;
      `}
    }
    
    &::after {
      content: "";
      display: block;
      width: 15px;
      height: 2px;
      background-color: ${theme.colors.font};
      position: absolute;
      transform: translateY(10px);


      ${props => props.isOpen && css<{ isOpen: boolean }>`
        transform: rotate(45deg) translateY(0);
        width: 24px;
        bottom: 60px;
        left: 50px;
      `}
    }
    }
`

const ChooseLang = styled.select`
  font-size: 32px;
  border-style: none;
  background-color: ${theme.colors.primaryBg};
  color: ${theme.colors.secondaryFont};

  &:hover {
    color: ${theme.colors.accent};
  }
  
  cursor: pointer;
`

const ListItem = styled.li`

`

const Link = styled.a`
  color: ${theme.colors.secondaryFont};
  
  
  &:hover {
    color: ${theme.colors.accent};
  }
`

const StyledLogo = styled.div`
margin: 16px;
`
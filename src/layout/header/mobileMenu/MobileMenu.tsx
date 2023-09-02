import React from 'react';
import styled, {css} from "styled-components";
import {theme} from "../../../styles/Theme";



export const MobileMenu = (props: {menuItems: Array<string>}) => {
    return (
        <StyledMobileMenu>
            <BurgerButton isOpen={true}>
                <span></span>

            </BurgerButton>

            <MobileMenuPopup isOpen={true}>
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
    }
`

const MobileMenuPopup = styled.div<{isOpen: boolean}>`
  position: fixed;
  background-color: ${theme.colors.primaryBg};
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: 9999;
  display: none;
  
  ${props => props.isOpen && css<{isOpen: boolean}>`
  display: flex;
    justify-content: start;
    align-items: start;
  `}
  

  ul {
    display: flex;
    gap: 30px;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }
`

const BurgerButton = styled.button<{isOpen: boolean}>`
    position: fixed;
  top: -100px;
  right: -100px;
  width: 200px;
  height: 200px;
  z-index: 999999;
  
  span {
    display: block;
    width: 24px;
    height: 2px;
    background-color: ${theme.colors.font};
    position: absolute;
    left: 40px;
    bottom: 50px;
    
    ${props => props.isOpen && css<{isOpen: boolean}>`
      background-color: rgba(255, 255, 255, 0);
      
    `}
    
    &::after {
      content: "";
      width: 15px;
      height: 2px;
      background-color: ${theme.colors.font};
      position: absolute;
      transform: translateY(-10px);

      ${props => props.isOpen && css<{isOpen: boolean}>`
      transform: rotate(-45deg) translateY(0);
      
    `}
    }
`

const ChooseLang = styled.select`
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
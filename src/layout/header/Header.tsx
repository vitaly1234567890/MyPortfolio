import React from 'react';
import styled from "styled-components";
import {Logo} from "../../components/logo/Logo";
import {Container} from "../../components/Container";
import {FlexWrapper} from "../../components/FlexWrapper";
import {HeaderMenu} from "./headerMenu/HeaderMenu";
import {MobileMenu} from "./mobileMenu/MobileMenu";
import {theme} from "../../styles/Theme";


const items = ['#home', '#works', '#about-me', '#contacts']
export const Header = () => {
    return (
        <StyledHeader>
            <Container>
                <FlexWrapper justify={'space-between'} align={'center'}>
                    <Logo/>
                    <HeaderMenu menuItems={items}/>
                    <MobileMenu menuItems={items}/>
                </FlexWrapper>

            </Container>
        </StyledHeader>
    );
};

const StyledHeader = styled.header `
  background-color: ${theme.colors.primaryBg};
  top: 0;
  left: 0;
  right: 0;

`


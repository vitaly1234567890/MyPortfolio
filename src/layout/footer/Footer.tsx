import React from 'react';
import {Logo} from "../../components/logo/Logo";
import styled from "styled-components";
import {Icon} from "../../components/icon/Icon";

export const Footer = () => {
    return (
        <StyledFooter>
            <Div>
                <StyledLogo>
                    <Logo />
                    <Email href={'#'}>elias@elias-dev.ml</Email>
                    <MyProf>Web designer and front-end developer</MyProf>
                </StyledLogo>

                <MediaList>
                    <p>Media</p>
                    <MediaItem>

                        <MediaIcon>
                            <Icon iconId={'github'}/>
                            <Icon iconId={'figma'}/>
                            <Icon iconId={'discord'}/>
                        </MediaIcon>
                    </MediaItem>
                </MediaList>
            </Div>

            <Copyright>© Copyright 2022. Made by Elias</Copyright>
        </StyledFooter>
    );
};

const StyledFooter = styled.footer`
    background-color: aqua;
  min-height: 20vh;

`

const Email = styled.a`

`
const MyProf = styled.p`

`

const MediaList = styled.ul`

`

const MediaItem = styled.li`

`

const MediaIcon = styled.a`

`

const Copyright = styled.small`
  display: flex;
    justify-content: center;

`
const StyledLogo = styled.div`

    
`

const Div = styled.div`
    display: flex;
  justify-content: space-around;
`
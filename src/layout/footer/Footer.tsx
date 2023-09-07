import React from 'react';
import {Logo} from "../../components/logo/Logo";
import styled from "styled-components";
import {Icon} from "../../components/icon/Icon";
import {theme} from "../../styles/Theme";
import {Container} from "../../components/Container";
import {FlexWrapper} from "../../components/FlexWrapper";

export const Footer = () => {
    return (
        <StyledFooter>
            <Container>
                    <Div>
                        <StyledLogo>
                            <Logo/>
                            <Email href={'#'}>elias@elias-dev.ml</Email>
                            <MyProf>Web designer and front-end developer</MyProf>
                        </StyledLogo>

                        <MediaList>
                            <MediaText>Media</MediaText>
                            <MediaItem>
                                <MediaIcon>
                                    <Icon iconId={'github'}/>
                                </MediaIcon>
                                <MediaIcon>
                                    <Icon iconId={'figma'}/>
                                </MediaIcon>
                                <MediaIcon>
                                    <Icon iconId={'discord'}/>
                                </MediaIcon>
                            </MediaItem>
                        </MediaList>
                    </Div>
                <Copyright>© Copyright 2022. Made by Elias</Copyright>
            </Container>

        </StyledFooter>
    );
};

const StyledFooter = styled.footer`
  padding: 32px 0;
  background-color: ${theme.colors.primaryBg};
  min-height: 20vh;
  border-top: 1px solid ${theme.colors.secondaryFont};
`

const Email = styled.a`
  color: ${theme.colors.secondaryFont};
  font-size: 16px;
  font-weight: 400;
  padding-left: 24px;
`
const MyProf = styled.p`
  padding-top: 16px;
  color: ${theme.colors.font};
  font-size: 16px;
  font-weight: 400;

  @media ${theme.media.tablet} {
    padding-bottom: 30px;
  }
`

const MediaList = styled.ul`

`

const MediaItem = styled.li`
  display: flex;
  justify-content: center;
  align-items: center;
`

const MediaIcon = styled.a`
  
 &:hover {
   color: ${theme.colors.accent}
 }
`

const Copyright = styled.small`
  display: flex;
  justify-content: center;
  font-size: 16px;
  font-weight: 400;
  padding-top: 48px;
`
const StyledLogo = styled.div`
 flex-wrap: wrap;
`

const Div = styled.div`
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  
`

const MediaText = styled.p`
  padding-bottom: 12px;
  font-size: 24px;
  font-weight: 500;
  color: ${theme.colors.font};
 
`
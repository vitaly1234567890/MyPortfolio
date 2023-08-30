import React from 'react';
import styled from "styled-components";
import {SectionTitle} from "../../../components/SectionTitle";
import {FlexWrapper} from "../../../components/FlexWrapper";
import Photo2 from '../../../assets/images/photo2.png'
import {Container} from "../../../components/Container";
import {theme} from "../../../styles/Theme";
import {Icon} from "../../../components/icon/Icon";

export const AboutMe = () => {
    return (
        <StyledAboutMe>
            <Container>
                <SectionTitle text={'#about-me'} width={'326px'}/>
                <FlexWrapper justify={'space-between'}>
                    <StyledText>
                        <LogoArray1>
                            <Icon iconId={'Dots'} width={'84'} height={'84'} viewBox={'0 0 84 84'}/>
                        </LogoArray1>
                        <LogoArray2>
                            <Icon iconId={'Square'} width={'155'} height={'155'} viewBox={'0 0 86 86'}/>
                        </LogoArray2>
                        <LogoArray3>
                            <Icon iconId={'Dots'} width={'104'} height={'56'} viewBox={'0 0 104 56'}/>
                        </LogoArray3>
                        <LogoArray4>
                            <Icon iconId={'Dots'} width={'103'} height={'103'} viewBox={'0 0 103 103'}/>
                        </LogoArray4>
                        <p>Hello, i’m Elias!</p>
                        <StyledText1>I’m a self-taught front-end developer based in Kyiv, Ukraine. I can develop responsive websites from scratch and raise them into modern user-friendly web experiences.</StyledText1>
                        <StyledText2>Transforming my creativity and knowledge into a websites has been my passion for over a year. I have been helping various clients to establish their presence online. I always strive to learn about the newest technologies and frameworks.</StyledText2>
                        <StyledLink href={"#"}>{'Read more ->'}</StyledLink>
                    </StyledText>
                    <StyledPhotoElem>
                        <StyledPhoto src={Photo2} alt=""/>
                    </StyledPhotoElem>
                </FlexWrapper>
            </Container>
        </StyledAboutMe>
    );
};

const StyledAboutMe = styled.section`
    
`

const StyledText = styled.div`
    max-width: 515px;
  position: relative;
`
const StyledLink = styled.a`
  border: 1px solid ${theme.colors.accent};
  padding: 5px;
  color: ${theme.colors.font};
`

const StyledPhotoElem = styled.div`
  position: relative;

  &::after {
    content: '';
    display: inline-block;
    width: 271px;
    height: 1px;
    background-color: ${theme.colors.accent};
    

    position: absolute;
    bottom: 5px;
    right: 25px;
  }
`

const StyledPhoto = styled.img`
    width: 339px;
  height: 507px;

  
  
`
  const StyledText1 = styled.p `
 margin: 40px 0;
`
const StyledText2 = styled.p `
 margin: 40px 0;
`

const LogoArray1 = styled.div`
  position: absolute;
  left: 680px;
  top: 60px;
`

const LogoArray2 = styled.div`
  position: absolute;
  right: 900px;
`

const LogoArray3 = styled.div`
  position: absolute;
  left: 920px;
  top: 300px;
`

const LogoArray4 = styled.div`
  position: absolute;
  left: 1470px;
  top: 300px;
`
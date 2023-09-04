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
                <FlexWrapper justify={'space-between'} wrap={"wrap"}>
                    <StyledText>
                        <p>Hello, i’m Elias!</p>
                        <StyledText1>I’m a self-taught front-end developer based in Kyiv, Ukraine. I can develop responsive websites from scratch and raise them into modern user-friendly web experiences.</StyledText1>
                        <StyledText2>Transforming my creativity and knowledge into a websites has been my passion for over a year. I have been helping various clients to establish their presence online. I always strive to learn about the newest technologies and frameworks.</StyledText2>
                        <StyledLink href={"#"}>{'Read more ->'}</StyledLink>
                    </StyledText>
                    <StyledPhotoElem>
                        <StyledPhoto src={Photo2} alt=""/>
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
                    </StyledPhotoElem>
                </FlexWrapper>
            </Container>
        </StyledAboutMe>
    );
};



const StyledAboutMe = styled.section`
  overflow-x: hidden;
`

const StyledText = styled.div`
  line-height: 1.5;
  margin-top: -24px;
    max-width: 515px;
  position: relative;
`
const StyledLink = styled.a`
  width: 148px;
  height: 37px;
  border: 1px solid ${theme.colors.accent};
  padding: 8px 16px;
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

    @media ${theme.media.mobile} {
      right: 10px;
    }
  }
`

const StyledPhoto = styled.img`
  max-width: 339px;
  width: 100%;
  height: 507px;
  object-fit: cover;
  object-position: top;

  @media ${theme.media.mobile} {
    max-width: 308px;
    width: 100%;
    height: 260px;
  }
`
  const StyledText1 = styled.p `
 margin: 30px 0;
`
const StyledText2 = styled.p `
 margin: 30px 0;
`

const LogoArray1 = styled.div`
  position: absolute;
  bottom: 370px;
 
`

const LogoArray2 = styled.div`
  position: absolute;
  bottom: 225px;
  right: 1110px;
`

const LogoArray3 = styled.div`
  position: absolute;
  bottom: 170px;
  left: 216px;
  z-index: 99999;
`

const LogoArray4 = styled.div`
  position: absolute;
  left: 440px;
  bottom: 90px;
`
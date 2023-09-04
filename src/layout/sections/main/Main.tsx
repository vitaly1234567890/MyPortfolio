import React from 'react';
import photo from '../../../assets/images/photo1.png'
import styled from "styled-components";
import {FlexWrapper} from "../../../components/FlexWrapper";
import {Container} from "../../../components/Container";
import {theme} from "../../../styles/Theme";
import {Icon} from "../../../components/icon/Icon";

export const Main = () => {
    return (
        <MainContainer>
            <Container>
                <FlexWrapper align={'center'} justify={'space-around'} wrap={"wrap"}>
                    <StyledMainText>
                        <MainText>Elias is a <SecondColorMainText>web
                            designer</SecondColorMainText> and <SecondColorMainText>front-end
                            developer</SecondColorMainText></MainText>
                        <SmallText>He crafts responsive websites where technologies meet creativity</SmallText>
                        <Button href='#'>Contact me!!</Button>
                    </StyledMainText>

                    <StyledSecondText>
                        <LogoArray1>
                            <Icon iconId={'bigLogo'} width={'155'} height={'155'} viewBox={'0 0 155 155'}/>
                        </LogoArray1>
                        <LogoArray2>
                            <Icon iconId={'Dots'} width={'84'} height={'84'} viewBox={'0 0 84 84'}/>
                        </LogoArray2>
                        <Photo src={photo} alt="My Photo 1"/>
                        <SecondText>Currently working
                            on <SecondColorSecondText>Portfolio</SecondColorSecondText></SecondText>
                    </StyledSecondText>
                </FlexWrapper>
            </Container>
        </MainContainer>
    );
};


const MainContainer = styled.section`
  display: flex;
  color: white;
`

const Photo = styled.img`
  width: 457px;
  height: 386px;
  object-fit: cover;
  object-position: top;
  
  @media ${theme.media.mobile} {
    width: 308px;
    height: 260px;
  }
`



const StyledMainText = styled.div`
    width: 40%;

  @media ${theme.media.tablet} {
    width: 100%;
  }
 
`

const MainText = styled.h1`
  color: var(--white, #FFF);
  font-size: 32px;
  font-weight: 600;
`

const SecondColorMainText = styled.span`
  color: #C778DD;
  font-size: 32px;
  font-weight: 600;
`

const SmallText = styled.p`
  color: #ABB2BF;
  font-size: 16px;
  font-weight: 400;
  margin: 30px 0;
`

const Button = styled.a`
  color: ${theme.colors.font};
  border: 1px solid var(--primary, #C778DD);
  display: inline-flex;
  padding: 8px 16px;
  align-items: flex-start;
  gap: 10px;

  @media ${theme.media.mobile} {
    visibility: hidden;
  }
`

const SecondText = styled.p`
  color: var(--gray, #ABB2BF);
  font-size: 16px;
  font-weight: 500;
  border: 1px solid var(--gray, #ABB2BF);
  padding: 8px 8px 8px 30px;
  background: ${theme.colors.primaryBg};
  margin-left: 50px;
  margin-bottom: 20px;
  width: 370px;
  
  position: relative;
  
  &::before {
    content: '';
    width: 16px;
    height: 16px;
    flex-shrink: 0;
    border: 1px solid ${theme.colors.accent};
    background-color: ${theme.colors.accent};
    
    position: absolute;
    left: 8px;
  }

  @media ${theme.media.mobile} {
    width: 230px;
  }
  `

const StyledSecondText = styled.div`
  position: relative;
  z-index: 99;

  @media ${theme.media.tablet} {
    width: 100%;
    overflow-x: hidden;
  }
  `

const SecondColorSecondText = styled.span`
  color: var(--white, #FFF);
  font-size: 16px;
  font-weight: 600;
 
  `
const LogoArray1 = styled.div`
  
  position: absolute;
  bottom: 180px;
  left: 80px;
  z-index: -1;

 
`

const LogoArray2 = styled.div`
  
  position: absolute;
  left: 300px;
  top: 200px;
  
`
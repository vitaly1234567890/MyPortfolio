import React from 'react';
import photo from '../../../assets/images/photo1.png'
import styled from "styled-components";
import {FlexWrapper} from "../../../components/FlexWrapper";
import {Container} from "../../../components/Container";
import {theme} from "../../../styles/Theme";

export const Main = () => {
    return (
        <MainContainer>
            <Container>
                <FlexWrapper align={'center'} justify={'space-between'}>
                    <StyledMainText>
                        <MainText>Elias is a <SecondColorMainText>web designer</SecondColorMainText> and <SecondColorMainText>front-end developer</SecondColorMainText></MainText>
                        <SmallText>He crafts responsive websites where technologies meet creativity</SmallText>
                        <Button>Contact me!!</Button>
                    </StyledMainText>

                    <StyledSecondText>
                        <Photo src={photo} alt="My Photo 1"/>
                        <SecondText>Currently working on <SecondColorSecondText>Portfolio</SecondColorSecondText></SecondText>
                    </StyledSecondText>
                </FlexWrapper>
            </Container>
        </MainContainer>
    );
};


const Photo = styled.img`
  width: 457px;
  height: 386px;
  object-fit: cover;
`

const MainContainer = styled.section`
  display: flex;
  color: white;
  min-height: 100vh;
  
`

const StyledMainText = styled.div`
  
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

const Button = styled.button`
  color: ${theme.colors.font};
  border: 1px solid var(--primary, #C778DD);
  display: inline-flex;
  padding: 8px 16px;
  align-items: flex-start;
  gap: 10px;
`

const SecondText = styled.p`
  color: var(--gray, #ABB2BF);
  font-size: 16px;
  font-weight: 500;
  border: 1px solid var(--gray, #ABB2BF);
  padding: 8px 8px 8px 30px;
  background: var(--background, #282C33);
  margin-left: 15px;
  width: 402px;
  
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
  `

const StyledSecondText = styled.div`
  position: relative;
  z-index: 2;

  &::before {
    content: "";
    width: 155px;
    height: 155px;
    border: 1px solid;
    color: ${theme.colors.accent};
    
    
    position: absolute;
    top: 115px;
    z-index: -1;
  `

const SecondColorSecondText = styled.span`
  color: var(--white, #FFF);
  font-size: 16px;
  font-weight: 600;
 
  `
import React from 'react';
import styled from "styled-components";
import {SectionTitle} from "../../../components/SectionTitle";
import {FlexWrapper} from "../../../components/FlexWrapper";
import Photo2 from '../../../assets/images/photo2.png'

export const AboutMe = () => {
    return (
        <StyledAboutMe>
            <SectionTitle>#about-me</SectionTitle>
            <FlexWrapper justify={'space-around'}>
                <StyledText>
                    <p>Hello, i’m Elias!</p>
                    <p>I’m a self-taught front-end developer based in Kyiv, Ukraine. I can develop responsive websites from scratch and raise them into modern user-friendly web experiences.</p>
                    <p>Transforming my creativity and knowledge into a websites has been my passion for over a year. I have been helping various clients to establish their presence online. I always strive to learn about the newest technologies and frameworks.</p>
                    <StyledLink href={"#"}>Read more</StyledLink>
                </StyledText>
                <StyledPhoto src={Photo2} alt=""/>
            </FlexWrapper>
            
        </StyledAboutMe>
    );
};

const StyledAboutMe = styled.section`
  background-color: gray;

`

const StyledText = styled.p`
    max-width: 515px;
  max-height: 312px;

`
const StyledLink = styled.a`

`

const StyledPhoto = styled.img`
    width: 339px;
  height: 507px;

`
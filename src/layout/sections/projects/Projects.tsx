import React from 'react';
import styled from "styled-components";
import {Project} from "./Project";
import {SectionTitle} from "../../../components/SectionTitle";
import {FlexWrapper} from "../../../components/FlexWrapper";
import ChertNodes from '../../../assets/images/pic1.png'
import ProtectX from '../../../assets/images/pic2.jpg'
import Kahoot from '../../../assets/images/pic3.jpg'
import {Container} from "../../../components/Container";
import {theme} from "../../../styles/Theme";

export const Projects = () => {
    return (
        <StyledProjects>
            <Container>
                <StyledSectionTitle>
                    <SectionTitle text={'#projects'} width={'511px'}></SectionTitle>
                    <LinkAllProjects href={'#'}>{'View all ~~>'}</LinkAllProjects>
                </StyledSectionTitle>

                <FlexWrapper justify={'space-around'} wrap={"wrap"}>
                    <Project title={'ChertNodes'}
                             text={'HTML SCSS Python Flask'}
                             text2={'Minecraft servers hosting'}
                             src={ChertNodes}
                             link1={'Live <~>'}
                             link2={'Cached >='}
                    />

                    <Project title={'ProtectX'}
                             text={'React Express Discord.js Node.js HTML SCSS Python Flask'}
                             text2={'Discord anti-crash bot'}
                             src={ProtectX}
                             link1={'Live <~>'}/>

                    <Project title={'Kahoot Answers Viewer'}
                             text={'CSS Express Node.js'}
                             text2={'Get answers to your kahoot quiz'}
                             src={Kahoot}
                             link1={'Live <~>'}/>
                </FlexWrapper>
            </Container>
        </StyledProjects>
    );
};

const StyledProjects = styled.section`
    
`
const LinkAllProjects = styled.a`
  font-size: 16px;
  font-weight: 500;
  margin: 50px 0;
  color: ${theme.colors.font};
`
const StyledSectionTitle = styled.div`
    display: flex;
  justify-content: space-between;
  height: 100%;
  
`


import React from 'react';
import styled from "styled-components";
import {Project} from "./Project";
import {SectionTitle} from "../../../components/SectionTitle";
import {FlexWrapper} from "../../../components/FlexWrapper";
import ChertNodes from '../../../assets/images/pic1.png'
import ProtectX from '../../../assets/images/pic2.jpg'
import Kahoot from '../../../assets/images/pic3.jpg'

export const Projects = () => {
    return (
        <StyledProjects>
            <StyledSectionTitle>
                <SectionTitle>
                    #projects
                </SectionTitle>
                <AllProjects href={'#'}>View all ~~</AllProjects>
            </StyledSectionTitle>

            <FlexWrapper justify={'space-around'}>
                <Project title={'ChertNodes'}
                         text={'HTML SCSS Python Flask'}
                         text2={'Minecraft servers hosting '}
                         src={ChertNodes}
                         link={'Live <~>'}
                         link2={'Cached >'}/>

                <Project title={'ProtectX'}
                         text={'React Express Discord.js Node.js HTML SCSS Python Flask'}
                         text2={'Discord anti-crash bot'}
                         src={ProtectX}
                         link={'Live <~>'}/>
                <Project title={'Kahoot Answers Viewer'}
                         text={'CSS Express Node.js'}
                         text2={'Get answers to your kahoot quiz'}
                         src={Kahoot}
                         link={'Live <~>'}/>
            </FlexWrapper>

        </StyledProjects>
    );
};

const StyledProjects = styled.section`
  background-color: red;
  min-height: 60vh;

`
const AllProjects = styled.a`

`
const StyledSectionTitle = styled.div`
    display: flex;
  justify-content: space-between;
`
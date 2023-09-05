import React from 'react';
import styled from "styled-components";
import {theme} from "../../../styles/Theme";


type ProjectPropsType = {
    title: string
    text: string
    text2: string
    src: string
    link1?: string
    link2?: string
}

export const Project = (props: ProjectPropsType) => {
    return (
            <StyledProject>
                <ProjectImg src={props.src} alt=""/>
                <Text>{props.text}</Text>
                <Title>{props.title}</Title>
                <Text2>{props.text2}</Text2>
                <Link1 href={'#'}>{props.link1}</Link1>
                <Link2 href={'#'}>{props.link2}</Link2>
            </StyledProject>
    );
};

const StyledProject = styled.section`
  border: 1px solid ${theme.colors.secondaryFont};
  max-width: 331px;
  min-height: 440px;
  
  
  @media screen and (max-width: 1024px) {
    margin: 10px;
  }
`

const ProjectImg = styled.img`
  width: 100%;
  height: 201px;
  border-bottom:  1px solid ${theme.colors.secondaryFont};
`

const Link1 = styled.a`
  border: 1px solid ${theme.colors.accent};
  margin: 16px;
  padding: 8px 16px;
  color: ${theme.colors.font};

`

const Link2 = styled.a`
  border: 1px solid ${theme.colors.secondaryFont};
  padding: 8px 16px;
  color: ${theme.colors.secondaryFont};
  
`

const Title = styled.h3`
  font-size: 24px;
  color: ${theme.colors.font};
  margin: 16px 16px 0 16px;
  padding: 5px;
`

const Text = styled.p`
  width: 100%;
  border-bottom: 1px solid ${theme.colors.secondaryFont};
  padding: 8px;
  line-height: 1.5;
`

const Text2 = styled.p`
  margin: 0 16px 16px 16px;
  padding: 5px;
`
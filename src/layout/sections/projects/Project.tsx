import React from 'react';
import styled from "styled-components";
import pic1 from '../../../assets/images/pic1.png'
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
                <Link2 href={'#'}>{props.link2} </Link2>
            </StyledProject>
    );
};

const StyledProject = styled.section`
  border: 1px solid ${theme.colors.secondaryFont};
  max-width: 331px;
  min-height: 390px;
`

const ProjectImg = styled.img`
  width: 100%;
  height: 201px;
`

const Link1 = styled.a`
  border: 1px solid ${theme.colors.accent};
  margin: 10px;
  padding: 5px;
  color: ${theme.colors.font};
`

const Link2 = styled.a`
  border: 1px solid ${theme.colors.secondaryFont};
  margin: 10px;
  padding: 5px;
  color: ${theme.colors.secondaryFont};
`

const Title = styled.h3`
  color: ${theme.colors.font};
  margin: 10px 0 0 10px;
  padding: 5px;
`

const Text = styled.p`
  width: 100%;
  border: 1px solid ${theme.colors.secondaryFont};
  padding: 5px;
`

const Text2 = styled.p`
  margin: 10px 0 10px 10px;
  padding: 5px;
`
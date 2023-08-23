import React from 'react';
import styled from "styled-components";
import pic1 from '../../../assets/images/pic1.png'


type ProjectPropsType = {
    title: string
    text: string
    text2: string
    src: string
    link: string
    link2?: string
}

export const Project = (props: ProjectPropsType) => {
    return (
        <StyledProject>
            <ProjectImg src={props.src} alt=""/>
            <Text>{props.text}</Text>
            <Title>{props.title}</Title>
            <Text2>{props.text2}</Text2>
            <Link href={'#'}>{props.link}</Link>
            <Link href={'#'}>{props.link2}</Link>
        </StyledProject>
    );
};

const StyledProject = styled.section`
max-width: 331px;
  width: 100%;

`

const ProjectImg = styled.img`
  width: 100%;
  height: 201px;
`

const Link = styled.a`
  
`

const Title = styled.h3`
  
`

const Text = styled.p`
  
`

const Text2 = styled.p`
  
`
import styled from "styled-components";
import {theme} from "../styles/Theme";
import React from 'react';

type SectionTitlePropsType = {
    text?: string;
    width?: string;
}

export const SectionTitle = (props: SectionTitlePropsType) => {
    return (
        <StyledSectionTitle>
            <StyledSectionTitleText>{props.text}</StyledSectionTitleText>
            <StyledSectionTitleLine width={props.width}></StyledSectionTitleLine>
        </StyledSectionTitle>
    );
};


const StyledSectionTitle = styled.div`
  
`

const StyledSectionTitleText = styled.h2`
  
  color: ${theme.colors.font};
  font-size: 32px;
  font-weight: 500;
  margin: 50px 0;
`

const StyledSectionTitleLine = styled.div`
  position: relative;
  
  &::after {
    content: '';
    display: inline-block;
    width: ${(props: SectionTitlePropsType) => props.width || '511px'};
    height: 1px;
    background-color: ${theme.colors.accent};
   margin-left: 180px;

    position: absolute;
    bottom: 70px;
  }
`
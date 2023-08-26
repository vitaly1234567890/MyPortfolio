import React from 'react';
import styled from "styled-components";
import {theme} from "../../styles/Theme";


type SkillsTextPropsType = {
    title: string
    description: string

}
export const SkillsText = (props:SkillsTextPropsType) => {
    return (
                <StyledText>
                    <StyledTextTitle>{props.title}</StyledTextTitle>
                    <StyledTextDescription>{props.description}</StyledTextDescription>
                </StyledText>
)
    ;
};


const StyledText = styled.div`
  margin: 10px;
  line-height: 1.7;
  
`
const StyledTextTitle = styled.div`
  border: solid ${theme.colors.secondaryFont};
  border-bottom: none;
  min-height: 27px;
  display: flex;
  color: ${theme.colors.font};
  font-size: 16px;
  font-weight: 600;
  padding: 8px;
  
`
const StyledTextDescription = styled.div`
  border: solid;
  max-width: 180px;
  padding: 0 8px;
  gap: 8px;
  font-size: 16px;
  font-weight: 400;
`
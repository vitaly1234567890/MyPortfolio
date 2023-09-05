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
  border: 1px solid ${theme.colors.secondaryFont};
  
`
const StyledTextTitle = styled.div`
  border-bottom: 1px solid ${theme.colors.secondaryFont};
  min-height: 27px;
  display: flex;
  color: ${theme.colors.font};
  font-size: 16px;
  font-weight: 600;
  padding: 8px;
  
`
const StyledTextDescription = styled.div`
  max-width: 180px;
  padding: 0 8px;
  gap: 8px;
  font-size: 16px;
  font-weight: 400;
`
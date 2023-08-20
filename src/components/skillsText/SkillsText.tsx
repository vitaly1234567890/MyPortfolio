import React from 'react';
import styled from "styled-components";


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
  
`
const StyledTextTitle = styled.div`
  border: solid;
  max-width: 178px;
  min-height: 27px;
  display: flex;
`
const StyledTextDescription = styled.div`
  border: solid;
  max-width: 178px;
  display: flex;
`
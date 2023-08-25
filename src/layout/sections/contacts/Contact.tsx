import React from 'react';
import styled from "styled-components";
import {Icon} from "../../../components/icon/Icon";
import {theme} from "../../../styles/Theme";


type ContactPropsType = {
    iconId: string
    email: string
}

export const Contact = (props: ContactPropsType) => {
    return (
        <StyledMessage>
            <Icon iconId = {props.iconId}/>
            <MyContacts href={'#'}>{props.email}</MyContacts>
        </StyledMessage>
    );
};


const StyledMessage = styled.a`
  display: flex;
  align-items: center;
  padding-top: 10px;
  
  &:hover {
    color: ${theme.colors.accent};
  }
`

const MyContacts = styled.a`
  color: ${theme.colors.secondaryFont};
  font-size: 16px;
  font-weight: 400;
  gap: 8px;
  
`

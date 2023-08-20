import React from 'react';
import styled from "styled-components";
import {Icon} from "../../../components/icon/Icon";


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


const StyledMessage = styled.div`

`

const MyContacts = styled.a`

`

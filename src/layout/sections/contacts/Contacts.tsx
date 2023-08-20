import React from 'react';
import styled from "styled-components";
import {SectionTitle} from "../../../components/SectionTitle";
import {FlexWrapper} from "../../../components/FlexWrapper";
import {Contact} from "./Contact";

export const Contacts = () => {
    return (
        <StyledContacts>
            <SectionTitle>#contacts</SectionTitle>
            <FlexWrapper justify={'space-around'}>
                <Text>
                    I’m interested in freelance opportunities. However, if you have other request or question, don’t hesitate to contact me
                </Text>
                <div>
                    <h3>Message me here</h3>
                    <Contact iconId={"discord"} email={'!Elias#3519'}/>
                    <Contact iconId={"email"} email={'elias@elias.me'}/>
                </div>

            </FlexWrapper>
        </StyledContacts>
    );
};

const StyledContacts = styled.section`
 background-color: azure;
`
const Text = styled.p`
    max-width: 505px;
`

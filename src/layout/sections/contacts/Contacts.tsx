import React from 'react';
import styled from "styled-components";
import {SectionTitle} from "../../../components/SectionTitle";
import {FlexWrapper} from "../../../components/FlexWrapper";
import {Contact} from "./Contact";
import {Container} from "../../../components/Container";
import {theme} from "../../../styles/Theme";

export const Contacts = () => {
    return (
        <StyledContacts>
            <Container>
                <SectionTitle>#contacts</SectionTitle>
                <FlexWrapper justify={'space-between'}>
                    <Text>
                        I’m interested in freelance opportunities. However, if you have other request or question, don’t hesitate to contact me
                    </Text>
                    <StyledTitleContacts>
                        <TitleContacts>Message me here</TitleContacts>
                        <Contact iconId={"discord"} email={'!Elias#3519'}/>
                        <Contact iconId={"email"} email={'elias@elias.me'}/>
                    </StyledTitleContacts>
                </FlexWrapper>
            </Container>
        </StyledContacts>
    );
};

const StyledContacts = styled.section`
  min-height: 50vh;
`
const Text = styled.p`
    max-width: 505px;
`
 const TitleContacts = styled.h3`
  color: ${theme.colors.font};
   font-size: 16px;
   font-weight: 600;
 `

const StyledTitleContacts = styled.div`
  font-size: 16px;
  font-weight: 400;
  border: 1px solid ${theme.colors.secondaryFont};
  padding: 16px;
`
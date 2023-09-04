import React from 'react';
import styled from "styled-components";
import {SectionTitle} from "../../../components/SectionTitle";
import {FlexWrapper} from "../../../components/FlexWrapper";
import {Contact} from "./Contact";
import {Container} from "../../../components/Container";
import {theme} from "../../../styles/Theme";
import {Icon} from "../../../components/icon/Icon";

export const Contacts = () => {
    return (
        <StyledContacts>
            <Container>
                <SectionTitle text={'#contacts'} width={'128px'}/>
                <FlexWrapper justify={'space-between'} wrap={"wrap"}>
                    <Text>
                        I’m interested in freelance opportunities. However, if you have other request or question, don’t hesitate to contact me
                    </Text>
                    <StyledTitleContacts>
                        <TitleContacts>Message me here</TitleContacts>
                        <Contact iconId={"discord"} email={'!Elias#3519'}/>
                        <Contact iconId={"email"} email={'elias@elias.me'}/>
                        <LogoArray5>
                            <Icon iconId={'Dots'} width={'103'} height={'103'} viewBox={'0 0 103 103'}/>
                        </LogoArray5>
                    </StyledTitleContacts>
                </FlexWrapper>
            </Container>
        </StyledContacts>
    );
};

const StyledContacts = styled.section`
  min-height: 35vh;
  width: 100%;
`
const Text = styled.p`
    max-width: 505px;
  width: 100%;

  @media screen and (max-width: 1126px) {
    margin-bottom: 40px;
  }
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
  position: relative;
  width: 100%;
  max-width: 204px;
  height: 140px;
  
`

const LogoArray5 = styled.div`
  position: absolute;
 right: 1370px;
  bottom: 10px;
  
`
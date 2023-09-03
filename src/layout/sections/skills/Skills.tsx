import React from 'react';
import styled from "styled-components";
import {SkillsText} from '../../../components/skillsText/SkillsText'
import {FlexWrapper} from "../../../components/FlexWrapper";
import {SectionTitle} from "../../../components/SectionTitle";
import {Icon} from "../../../components/icon/Icon";
import {Container} from "../../../components/Container";
import {theme} from "../../../styles/Theme";

export const Skills = () => {
    return (
        <StyledSkills>
            <Container>
                <SectionTitle text={'#skills'} width={"240px"}/>
                <FlexWrapper  justify={'space-between'} wrap={"wrap"}>
                    <LogoArray>
                        <LogoArray1>
                            <Icon iconId={'Dots'} width={'63'} height={'63'} viewBox={'0 0 63 63'}/>
                        </LogoArray1>
                        <LogoArray2>
                            <Icon iconId={'bigLogo'} width={'115'} height={'115'} viewBox={'0 0 115 115'}/>
                        </LogoArray2>
                        <LogoArray3>
                            <Icon iconId={'Square'} width={'86'} height={'86'} viewBox={'0 0 86 86'}/>
                        </LogoArray3>
                        <LogoArray4>
                            <Icon iconId={'Dots'} width={'63'} height={'63'} viewBox={'0 0 63 63'}/>
                        </LogoArray4>
                        <LogoArray5>
                            <Icon iconId={'Square'} width={'52'} height={'52'} viewBox={'0 0 86 86'}/>
                        </LogoArray5>

                    </LogoArray>



                    <StyledSkillsText>
                        <SkillsText
                            title={'Language'}
                            description={'TypeScript Lua Python JavaScript'}
                        />
                        <SkillsText
                            title={'DataBases'}
                            description={'SQLite PostgreSQL Mongo'}
                           />
                        <SkillsText
                            title={'Tools'}
                            description={'VSCode Neovim Linux Figma XFCE Arch Git Font Awesome'}
                            />
                        <SkillsText
                            title={'Other'}
                            description={'HTML CSS EJS SCSS REST Jinja'}
                            />
                        <SkillsText
                            title={'Frameworks'}
                            description={'React Vue Disnake Discord.js Flask Express.js'}
                          />
                    </StyledSkillsText>
                </FlexWrapper>
            </Container>

        </StyledSkills>
    );
};

const StyledSkills = styled.section`
 min-height: 50vh;
`



const StyledSkillsText = styled.div`
  display: flex;
  justify-content: end;
  flex-wrap: wrap;
  width: 60%;

  @media ${theme.media.tablet} {
    width: 100%;
    justify-content: center;
  }
  
`

const LogoArray = styled.div`
  position: relative;
  margin-left: 30px;

  @media ${theme.media.tablet} {
    display: none;
  }
  
`
const LogoArray1 = styled.div`

  position: absolute;
  
`

const LogoArray2 = styled.div`
  position: absolute;
  bottom: 80px;
  left: 0;
`

const LogoArray3 = styled.div`
  position: absolute;
 left: 230px;
  top: -30px;
`
const LogoArray4 = styled.div`
  position: absolute;
  left: 200px;
  top: 150px;
`

const LogoArray5 = styled.div`
  position: absolute;
  left: 300px;
  top: 200px;
  
`
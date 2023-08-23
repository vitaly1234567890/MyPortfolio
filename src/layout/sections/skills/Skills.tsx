import React from 'react';
import styled from "styled-components";
import {SkillsText} from '../../../components/skillsText/SkillsText'
import {FlexWrapper} from "../../../components/FlexWrapper";
import {SectionTitle} from "../../../components/SectionTitle";
import {Icon} from "../../../components/icon/Icon";

export const Skills = () => {
    return (
        <StyledSkills>
            <SectionTitle>#skills</SectionTitle>
            <FlexWrapper  justify={'space-between'}>
                <LogoArray>
                    <Icon iconId={'bigLogo'} width={'115'} height={'115'} viewBox={'0 0 115 115'}/>
                </LogoArray>
                <StyledSkillsText>
                    <SkillsText
                        title={'Language'}
                        description={'TypeScript Lua Python JavaScript'}/>
                    <SkillsText
                        title={'DataBases'}
                        description={'SQLite PostgreSQL Mongo'}/>
                    <SkillsText
                        title={'Tools'}
                        description={'VSCode Neovim Linux Figma XFCE Arch Git Font Awesome'}/>
                    <SkillsText
                        title={'Other'}
                        description={'HTML CSS EJS SCSS REST Jinja'}/>
                    <SkillsText
                        title={'Frameworks'}
                        description={'React Vue Disnake Discord.js Flask Express.js'}/>
                </StyledSkillsText>

            </FlexWrapper>
        </StyledSkills>
    );
};

const StyledSkills = styled.section`
  
 min-height: 50vh;
`

const LogoArray = styled.section`
  width: 60%;
`

const StyledSkillsText = styled.section`
  display: flex;
  justify-content: end;
  flex-wrap: wrap;
`

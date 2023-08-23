import React from 'react';
import styled from "styled-components";
import {theme} from "../../../styles/Theme";



export const HeaderMenu = (props: {menuItems: Array<string>}) => {
    return (
        <StyledHeaderMenu>
            <ul>
                {props.menuItems.map((item, index)=>{
                    return <ListItem key={index}>
                        <Link href="">{item}</Link>
                    </ListItem>
                })}
                <ChooseLang>
                    <option value="">EN</option>
                    <option value="">RU</option>
                    <option value="">UA</option>
                </ChooseLang>
            </ul>
        </StyledHeaderMenu>
    );
};

const StyledHeaderMenu = styled.nav`
    ul {
      display: flex;
      gap: 30px;
    }
`
const ChooseLang = styled.select`
  border-style: none;
  background-color: ${theme.colors.primaryBg};
  color: ${theme.colors.secondaryFont};
`

const ListItem = styled.li`

`

const Link = styled.a`
  color: ${theme.colors.secondaryFont};
`
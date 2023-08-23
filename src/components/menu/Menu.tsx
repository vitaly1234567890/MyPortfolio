import React from 'react';
import styled from "styled-components";



export const Menu = (props: {menuItems: Array<string>}) => {
    return (
        <StyledMenu>
            <ul>

                {props.menuItems.map((item, index)=>{
                   return <li key={index}>
                        <a href="">{item}</a>
                    </li>
                })}
                <ChooseLang>
                    <option value="">EN</option>
                    <option value="">RU</option>
                    <option value="">UA</option>
                </ChooseLang>
            </ul>
        </StyledMenu>
    );
};

const StyledMenu = styled.nav`
    ul {
      display: flex;
      gap: 30px;
    }
`
const ChooseLang = styled.select`

`

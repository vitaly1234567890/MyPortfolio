import React from 'react';
import {Icon} from "../icon/Icon";
import styled from "styled-components";
import {theme} from "../../styles/Theme";

export const Logo = () => {
    return (
        <Link href="">
            <Icon iconId={'logo'} width={'20'} height={'20'}/>Elias
        </Link>
    );
};

const Link = styled.a`
  color: ${theme.colors.font};
`
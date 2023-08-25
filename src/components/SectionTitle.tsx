import styled from "styled-components";
import {theme} from "../styles/Theme";



export const SectionTitle = styled.h2`
 color: ${theme.colors.font};
  font-size: 32px;
  font-weight: 500;
  margin: 50px 0;
  
  position: relative;

  &::after {
    content: '';
    display: inline-block;
    width: 511px;
    height: 1px;
    background-color: ${theme.colors.accent};

    position: absolute;
    top: 20px;
`
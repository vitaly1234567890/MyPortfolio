import React from 'react';
import photo from '../../../assets/images/photo1.png'
import styled from "styled-components";
import {FlexWrapper} from "../../../components/FlexWrapper";

export const Main = () => {
    return (
        <MainContainer>
            <FlexWrapper align={'center'} justify={'space-around'}>
                <div>
                    <h1>Elias is a web designer and front-end developer</h1>
                    <p>He crafts responsive websites where technologies meet creativity</p>
                    <button>Contact me!!</button>
                </div>

                <div>
                    <Photo src={photo} alt=""/>
                    <p>Currently working on Portfolio</p>
                </div>

            </FlexWrapper>


        </MainContainer>
    );
};


const Photo = styled.img`
  width: 457px;
  height: 386px;
  object-fit: cover;
`

const MainContainer = styled.div`
background-color: #282C33;
  color: white;
  
`


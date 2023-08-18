import React from 'react';
import styled from "styled-components";

export const Slider = () => {
    return (
        <StyledSlider>
            <Slide>
                <Text>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua Ut enim. Lorem ipsum dolor sit amet, consectetur adipisicing elit.</Text>
                <Name>@Ivan Ivanow</Name>
            </Slide>
        </StyledSlider>
    );
};

const StyledSlider = styled.div`
border: 1px solid darkslategray;
  border-radius: 5px;
  max-width: 500px;
`

const Slide = styled.div`
width: 100%;
  text-align: center;
`
const Text = styled.p`
`

const Name = styled.span`
`

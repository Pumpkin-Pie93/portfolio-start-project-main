import React from 'react';
import AliceCarousel from 'react-alice-carousel';
import 'react-alice-carousel/lib/alice-carousel.css';
import {S} from "./Slider_Styles";
import './../../styles/slider.css'

type SlidePropsType = {
    text: string
    userName: string
}

const Slide = (props: SlidePropsType) => {
    return (
        <S.Slide>
        <S.Text>{props.text}</S.Text>
        <S.Name>@{props.userName}</S.Name>
    </S.Slide>
    )
}

const items = [
    <Slide userName={"Ivan Ivanow"}
           text={"Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua Ut enim.Lorem ipsum dolor sit amet, consectetur adipisicing elit."} />,
    <Slide userName={"Peter Petrow"}
           text={"Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua Ut enim.Lorem ipsum dolor sit amet, consectetur adipisicing elit."} />,
    <Slide userName={"Ilya Sidorov"}
           text={"Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua Ut enim.Lorem ipsum dolor sit amet, consectetur adipisicing elit."} />

];

export const Slider = () => (
    <S.Slider>
        <AliceCarousel
            mouseTracking
            items={items}
        />
    </S.Slider>
);


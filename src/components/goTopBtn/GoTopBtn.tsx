import React, {useEffect, useState} from 'react';
import styled from "styled-components";
import {Icon} from "../icon/Icon";
import {theme} from "../../styles/Theme";
import {animateScroll as scroll} from 'react-scroll'

export const GoTopBtn = () => {

    const [showBtn, setShowBtn] = useState(false)

    useEffect(() => {
        window.addEventListener('scroll', () => {
            if (window.scrollY > 200) {
                setShowBtn(true)
            } else {
                setShowBtn(false)
            }
        })
    }, []);
    return (
        <>
            {showBtn && (<StyledGoTopBtn onClick={() => {
                    scroll.scrollToTop()
                }}>
                    <Icon width={'16'} height={'15'} viewBox={'0 0 16 15'} iconId={'top'}/>
                </StyledGoTopBtn>
            )}
        </>
    );
};

const StyledGoTopBtn = styled.button`
  background-color: transparent;
  border: 1px solid;
  border-radius: 5px;
  border-color: ${theme.colors.accent};
  padding: 8px;
  position: fixed;
  right: 30px;
  bottom: 30px;

`
import styled from "styled-components";
import {theme} from "../styles/Theme";
import {font} from "../styles/Common";


export const SectionTitle = styled.h2`
  ${font({family: "'Josefin Sans', sans-serif", weight: 600, Fmax: 36, Fmin: 30})} 
          // In fixin мы пишем общие свойства и чезер его записываем стили в строку
          //font-family: 'Josefin Sans', sans-serif;
          //font-weight: 600px;
          // font-size: 36px;
  text-align: center;
  letter-spacing: 5px;
  margin-bottom: 90px;

  position: relative;

  &::before {
    content: "";
    display: inline-block;
    width: 55px;
    height: 1px;
    background-color: ${theme.colors.accent};

    position: absolute;
    left: 50%;
    transform: translateX(-50%);
    bottom: -30px;
    
    @media ${theme.media.mobile} {
      //в медиа пишем, какие стили меняются при экране mobile
      bottom: -24px;
    }
  }
  @media ${theme.media.mobile} {
    margin-bottom: 84px;
    letter-spacing: 3px;
  }
`
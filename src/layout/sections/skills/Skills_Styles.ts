import styled from "styled-components";
import {theme} from "../../../styles/Theme";

const Skills = styled.section`
position: relative;  
`


const Skill = styled.div`
  width: 330px; // заменили ширину. Было 380
  flex-grow: 1; // Сколько свободного пространства занимает в родителе Флекс, это дочерний эл-т!!
  padding: 42px 20px 52px;

  @media ${theme.media.mobile} {
    padding: 5px 0 96px;
  }
`

const IconWrapper = styled.div`
  position: relative;

  &::before {
    content: "";
    display: inline-block;
    width: 80px;
    height: 80px;
    transform: rotate(45deg) translate(-50%, -50%);
    background-color: #FFFFFF1A;

    position: absolute;
    left: 50%;
    top: 50%;
    transform-origin: top left;
  }

`

const SkillTitle = styled.h3`
  margin: 70px 0 15px;
  text-transform: uppercase;
`

const SkillText = styled.p`
  text-align: center;
`


export const S = {
    Skills,
    Skill,
    SkillText,
    SkillTitle,
    IconWrapper
}
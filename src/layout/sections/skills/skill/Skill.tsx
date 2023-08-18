import React from 'react';
import {Icon} from "../../../../components/icon/Icon";
import styled from "styled-components";

type SkillPropsType = {
    iconId: string
    title: string
    description: string
}
export const Skill = (props: SkillPropsType) => {
    return (
        <StyledSkill>
            <Icon iconId={props.iconId}/>
            <SkillTitle>{props.title}</SkillTitle>
            <SkillText>{props.description}</SkillText>

        </StyledSkill>
    );
};

const StyledSkill = styled.div`
  width: 30%;
  background-color: #f0e4f1;
  margin:5px;
  display: block;
  justify-content: center;
  align-items: center;
`
const SkillTitle = styled.h3`
    text-align: center;
    
`

const SkillText = styled.p`
    text-align: center;
    
`


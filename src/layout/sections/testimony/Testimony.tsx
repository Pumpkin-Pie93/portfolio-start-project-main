import React from 'react';
import styled from "styled-components";
import {SectionTitle} from "../../../components/SectionTitle";
import {Icon} from "../../../components/icon/Icon";
import {Slider} from "../../../components/slider/Slider";
import {FlexWrapper} from "../../../components/FlexWrapper";
import {S} from "../skills/Skills_Styles";
import {Container} from "../../../components/Container";
import {theme} from "../../../styles/Theme";

export const Testimony: React.FC = () => {
    return (
        <StyledTestimony id={'testimony'}>
            <Container>
                <SectionTitle>Testimony</SectionTitle>
                <FlexWrapper direction={'column'} align={'center'}>
                    <S.IconWrapper>
                        <Icon iconId={'quote'}/>
                    </S.IconWrapper>
                    <Slider/>
                </FlexWrapper>
            </Container>
        </StyledTestimony>
    );
};

const StyledTestimony = styled.section`
  position: relative;
  min-height: 50vh;
  background-color: lightgray;
  
  ${S.IconWrapper} {
    margin: 25px 0 72px;
    
    @media ${theme.media.mobile} {
      margin: 12px 0 76px;
    }
  }
`

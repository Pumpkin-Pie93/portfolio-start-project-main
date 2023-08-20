import React from 'react';
import styled from "styled-components";
import {Icon} from "../../components/icon/Icon";

export const Footer = () => {
    return (
        <StyledFooter>
<Name>Svetlana</Name>
            <SocialIconsList>
                <SocialIconLink>
                    <Icon iconId={'instagram'}/>
                </SocialIconLink>
            </SocialIconsList>
            <Copyright>© 2023 Svetlana Dyablo, All Rights Reserved.</Copyright>
        </StyledFooter>
    );
};



const StyledFooter = styled.footer`

`
const Name = styled.span`

`

const SocialIconsList = styled.ul`

`
const SocialIconLink = styled.a`

`
const Copyright = styled.small`

`

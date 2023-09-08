import styled from "styled-components";
import {theme} from "../../styles/Theme";
import {font} from "../../styles/Common";


const Footer = styled.footer`
  position: relative;
  background-color: ${theme.colors.primaryBcg};
  padding: 40px;
`
const Name = styled.span`
  ${font({family:"'Josefin Sans',sans-serif", weight: 700, Fmax: 22, Fmin: 16})}
    letter-spacing: 3px;
`

const SocialList = styled.ul`
display: flex;
  gap: 20px;
  margin: 30px 0 ;
  
  @media ${theme.media.mobile} {  
    
    margin: 26px 0 34px;
  }
`
const SocialItem = styled.li`

`

const SocialLink = styled.a`
  border-radius: 50%;
  background-color: rgba(255, 255, 255, 0.10);
  width: 35px;
  height: 35px;
  display: flex;
  justify-content: center;
  align-items: center;
  transition: ${theme.animations.transition};
  color: ${theme.colors.accent};
  
  &:hover {
    color: ${theme.colors.secondaryBcg};
    transform: translateY(-5px); 
    background-color: ${theme.colors.accent};
  }
 
`
const Copyright = styled.small`
  opacity: 0.5;
  text-align: center;
  font-size: 12px;
  font-weight: 400;
`

export const S = {
    Footer,
    Name,
    SocialList,
    SocialItem,
    SocialLink,
    Copyright
}
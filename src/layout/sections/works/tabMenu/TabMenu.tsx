import React from 'react';
import styled from "styled-components";
import {Link} from "../../../../components/Link";



export const TabMenu = (props: { menuItems: Array<string> }) => {
    return (
        <StyledTabMenu>
            <ul>
                {props.menuItems.map((item: string, index: number) => {
                    return <ListItem key={index}>
                        <Link href='#'>{item}</Link>
                    </ListItem>
                })}
            </ul>
        </StyledTabMenu>
    );
};

const StyledTabMenu = styled.nav`
  ul {
   
    display: flex;
    //gap: 20px; delete gap, because now there is spase-between property
    justify-content: space-between;
    //justify-content: center; иеняем на спейс битвин
    max-width: 352px; //Задаем макс ширину
    width: 100%; // Тянется на всю ширину родительского эл-та, если стал еньше макс ширины
    border: 1px solid greenyellow;
    margin: 0 auto 40px;
  }
`
const ListItem = styled.li`
position: relative;
  z-index: 0;
  
`
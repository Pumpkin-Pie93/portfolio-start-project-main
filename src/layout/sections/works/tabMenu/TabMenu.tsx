import React from 'react';
import styled from "styled-components";
import {Link} from "../../../../components/Link";

export type TabsStatusType = "all" | "landing" | "react" |"spa"

type TabsMenuPropsType = {
    tabsItems: Array<{status: TabsStatusType, title: string}>
    changeFilterStatus: (value: TabsStatusType) => void
    currentFilterStatus: string
}

export const TabMenu = (props: TabsMenuPropsType) => {
    return (
        <StyledTabMenu>
            <ul>
                {props.tabsItems.map(
                    (item: {status: TabsStatusType, title: string}, index: number) => {
                    return <ListItem key={index}>
                        <Link active={props.currentFilterStatus === item.status} as={"button"} onClick={() => {props.changeFilterStatus(item.status)}}>{item.title}</Link>
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
    //border: 1px solid greenyellow;
    margin: 0 auto 40px;
  }
`
const ListItem = styled.li`
position: relative;
  z-index: 0;
  
`
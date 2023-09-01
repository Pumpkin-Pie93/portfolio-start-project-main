import React from 'react';
import {S} from "./Works_Styles";
import {SectionTitle} from "../../../components/SectionTitle";
import {TabMenu} from "./tabMenu/TabMenu";
import {FlexWrapper} from "../../../components/FlexWrapper";
import {Work} from "./work/Work";
import socialeImg from './../../../assets/images/proj-1.webp';
import timerImg from './../../../assets/images/proj-2.webp'
import {Container} from "../../../components/Container";

const worksItems = ['All', 'landing page', 'React', 'Spa']

const workData = [
    {
        src: socialeImg, // Это импортированная переменная, поэтому без кавычек
        title: 'Social Network',
        text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua Ut enim. Lorem ipsum dolor sit amet, consectetur adipisicing elit.'
    },
    {
        src: timerImg,
        title: 'Timer',
        text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua Ut enim. Lorem ipsum dolor sit amet, consectetur adipisicing elit  ut labore et dolore magna aliqua Ut enim'
    }
]

export const Works: React.FC = () => {
    return (
        <S.Works>
            <Container>
                <SectionTitle>My Works</SectionTitle>
                <TabMenu menuItems={worksItems}/>
                <FlexWrapper justify={'space-between'} align={'flex-start'} wrap={'wrap'}>

                    {workData.map((w => {
                        return <Work src={w.src}
                                     title={w.title}
                                     text={w.text}/>
                    }))}
                </FlexWrapper>
            </Container>

        </S.Works>
    );
};


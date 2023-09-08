import React, {useState} from 'react';
import {S} from "./Works_Styles";
import {SectionTitle} from "../../../components/SectionTitle";
import {TabMenu, TabsStatusType} from "./tabMenu/TabMenu";
import {FlexWrapper} from "../../../components/FlexWrapper";
import {Work} from "./work/Work";
import socialeImg from './../../../assets/images/proj-1.webp';
import timerImg from './../../../assets/images/proj-2.webp'
import {Container} from "../../../components/Container";
import {AnimatePresence, motion} from "framer-motion"

const tabsItems: Array<{ title: string, status: TabsStatusType }> = [
    {
        title: "All",
        status: 'all'
    },
    {
        title: "landing page",
        status: 'landing'
    },
    {
        title: "React",
        status: 'react'
    },
    {
        title: "Spa",
        status: 'spa'
    },

]

const worksData = [
    {
        src: socialeImg, // Это импортированная переменная, поэтому без кавычек
        title: 'Social Network',
        text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua Ut enim. Lorem ipsum dolor sit amet, consectetur adipisicing elit.',
        type: 'spa',
        id: 1
    },
    {
        src: timerImg,
        title: 'Timer',
        text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua Ut enim. Lorem ipsum dolor sit amet, consectetur adipisicing elit  ut labore et dolore magna aliqua Ut enim',
        type: 'react',
        id: 2
    },
    {
        src: socialeImg,
        title: 'socialeImg',
        text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua Ut enim. Lorem ipsum dolor sit amet, consectetur adipisicing elit  ut labore et dolore magna aliqua Ut enim',
        type: 'spa',
        id: 3
    },
    {
        src: timerImg,
        title: 'Timer',
        text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua Ut enim. Lorem ipsum dolor sit amet, consectetur adipisicing elit  ut labore et dolore magna aliqua Ut enim',
        type: 'react',
        id: 4
    },
    {
        src: socialeImg,
        title: 'socialeImg',
        text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua Ut enim. Lorem ipsum dolor sit amet, consectetur adipisicing elit  ut labore et dolore magna aliqua Ut enim',
        type: 'spa',
        id: 5
    },
    {
        src: timerImg,
        title: 'Timer',
        text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua Ut enim. Lorem ipsum dolor sit amet, consectetur adipisicing elit  ut labore et dolore magna aliqua Ut enim',
        type: 'react',
        id: 6
    }
]

export const Works: React.FC = () => {

    const [currentFilterStatus, setCurrentFilterStatus] = useState('all')
    let filteredWorks = worksData

    if (currentFilterStatus === "landing") {
        filteredWorks = worksData.filter(work => work.type === "landing")
    }
    if (currentFilterStatus === "react") {
        filteredWorks = worksData.filter(work => work.type === "react")
    }
    if (currentFilterStatus === "spa") {
        filteredWorks = worksData.filter(work => work.type === "spa")
    }

    function changeFilterStatus(value: TabsStatusType) {
        setCurrentFilterStatus(value)
    }

    return (
        <S.Works id={'works'}>
            <Container>
                <SectionTitle>My Works</SectionTitle>
                <TabMenu tabsItems={tabsItems}
                         changeFilterStatus={changeFilterStatus}
                         currentFilterStatus={currentFilterStatus}/>
                <FlexWrapper justify={'space-between'} align={'flex-start'} wrap={'wrap'}>
                    <AnimatePresence>
                        {filteredWorks.map((w => {
                            return (
                                <motion.div
                                    style={{width: '400px', flexGrow: 1, maxWidth: '540px'
                                }}
                                    layout={true}
                                    initial={{ opacity: 0 }}
                                    animate={{ opacity: 1 }}
                                    exit={{ opacity: 0 }}
                                    key={w.id}
                                >
                                    <Work src={w.src}
                                          title={w.title}
                                          text={w.text}
                                          key={w.id}
                                    />
                                </motion.div>
                                )
                        }))}

                    </AnimatePresence>

                </FlexWrapper>
            </Container>

        </S.Works>
    );
};


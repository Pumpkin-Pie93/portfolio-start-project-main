import React from 'react';
import {Icon} from "../../components/icon/Icon";
import {FlexWrapper} from "../../components/FlexWrapper";
import {S} from './Footer_Styles'

const sotialData = [
    {
        iconId: 'instagram',
        height:'21px',
        width:'21px',
        viewBox:'0 0 21px 21px'
    },
    {
        iconId: 'telegram',
        height:'21px',
        width:'21px',
        viewBox:'0 0 21px 21px'
    },
    {
        iconId: 'vk',
        height:'21px',
        width:'21px',
        viewBox:'0 0 21px 21px'
    },
    {
        iconId: 'linkedin',
        height:'21px',
        width:'21px',
        viewBox:'0 0 21px 21px'
    }
]

export const Footer: React.FC = () => {
    return (
        <S.Footer>
            <FlexWrapper direction={'column'} align={'center'}>
                <S.Name>Polina</S.Name>
                <S.SocialList>

                    {sotialData.map((s, index) => {
                        return <S.SocialItem key={index}>
                            <S.SocialLink>
                                <Icon  iconId={s.iconId}
                                       height={s.height}
                                       width={s.width}
                                       viewBox={s.viewBox}
                                    />
                            </S.SocialLink>
                        </S.SocialItem>
                    })}
                </S.SocialList>
                <S.Copyright>© 2023 Polina Khmialnitskaya, All Rights Reserved.</S.Copyright>
            </FlexWrapper>
        </S.Footer>
    );
};



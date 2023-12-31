import React, {useState} from 'react';
import {Menu} from "../menu/Menu";
import {S} from '../HeaderMenu_Styles';


export const MobileMenu: React.FC = () => {
   const [menuIsOpen, setmenuIsOpen] = useState(false)
    const onBurgerBtnClick = () => { setmenuIsOpen( !menuIsOpen )}

    return (
        <S.MobileMenu>
            <S.BurgerBtn isOpen={menuIsOpen} onClick={onBurgerBtnClick}>
                <span></span>
            </S.BurgerBtn>
            <S.MobileMenuPopup isOpen={menuIsOpen} onClick={() => {setmenuIsOpen(false)}}>
                <Menu />
            </S.MobileMenuPopup>

        </S.MobileMenu>
    );
};






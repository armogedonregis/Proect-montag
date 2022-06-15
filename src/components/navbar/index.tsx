import React, { useState } from "react";
import styled from "styled-components";
import tw from "twin.macro";
import { Button } from "../button";
import { Wrapper } from "../wrapper";
import Calc from "../../assets/icons/calc.svg";

const Nav = styled.nav`
${tw`
    w-full
    h-[50px]
    bg-accent
    sticky
    top-0
    z-50
`};
`;

const List = styled.ul`
${tw`
    w-full
    h-full
    flex
    items-center
    justify-between
`};
`;

const BurgerList = styled.ul`
width: 310px;
    box-shadow: 0px 5px 16px -8px #c5c5c5;
    background: #ffffff;
    z-index: 9;
    font-size: 14px;
    padding: 10px 0 17px;
    border-radius: 0 0 7px 7px;
${tw`
    absolute
    top-[38px]
    left-[-16px]
`}
`;

const BurgeItem = styled.li`
padding: 5px 0 3px 17px;
${tw`

`}
`;

const Item = styled.li<{ pos?: boolean }>`
${tw`
    max-h-full
`};
${({ pos }) => 
pos && tw`relative`
}
`;

export const Navbar: React.FC = () => {
    const [active, setActive] = useState(false);
    return (
        <Nav>
            <Wrapper>
                <List>
                    <Item onMouseEnter={() => setActive(true)} onMouseLeave={() => setActive(false)} pos><Button to={'/vidy-remonta'} theme="navLink">
                        Виды ремонта
                        </Button>
                        {active &&
                        <BurgerList>
                            <BurgeItem><Button to={'/vidy-remonta/kosmeticheskiy-remont'} theme="burger">Косметический ремонт</Button></BurgeItem>
                            <BurgeItem><Button to={'/kapitalniy-remont'} theme="burger">Капитальный ремонт</Button></BurgeItem>
                            <BurgeItem><Button to={'/dizayn-interera'} theme="burger">Дизайн интерьера</Button></BurgeItem>
                            <BurgeItem><Button to={'/dizayn-interera'} theme="burger">Дизайн интерьера</Button></BurgeItem>
                            <BurgeItem><Button to={'/dizayn-interera'} theme="burger">Дизайн интерьера</Button></BurgeItem>
                            <BurgeItem><Button to={'/dizayn-interera'} theme="burger">Дизайн интерьера</Button></BurgeItem>
                            <BurgeItem><Button to={'/dizayn-interera'} theme="burger">Дизайн интерьера</Button></BurgeItem>
                            <BurgeItem><Button to={'/dizayn-interera'} theme="burger">Дизайн интерьера</Button></BurgeItem>
                            <BurgeItem><Button to={'/dizayn-interera'} theme="burger">Дизайн интерьера</Button></BurgeItem>
                            <BurgeItem><Button to={'/dizayn-interera'} theme="burger">Дизайн интерьера</Button></BurgeItem>
                        </BurgerList>
                        }
                    </Item>
                    <Item><Button to={'/dizayn-interera'} theme="navLink">Дизайн интерьера</Button></Item>
                    <Item><Button to={'/protsess-remonta'} theme="navLink">Процесс ремонта</Button></Item>
                    <Item><Button to={'/nashi-raboty'} theme="navLink">Наши работы</Button></Item>
                    <Item><Button to={'/tseny'} theme="navLink">Цены</Button></Item>
                    <Item><Button to={'/kontakty'} theme="navLink">Контакты</Button></Item>
                    <Item><Button to={'/stati-o-remonte'} theme="navLink">Статьи о ремонте</Button></Item>
                    <Item><Button className="flex items-center py-2 -mr-5" to={'/vidirimonti'} theme="navLink"><Calc className="mr-4" />Калькулятор ремонта</Button></Item>
                </List>
            </Wrapper>
        </Nav>
    );
};
import React from "react";
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

const Item = styled.li`
${tw`
    max-h-full
`};
`;

export const Navbar: React.FC = () => {
    return (
        <Nav>
            <Wrapper>
                <List>
                    <Item><Button to={'/vidy-remonta'} theme="navLink">Виды ремонта</Button></Item>
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
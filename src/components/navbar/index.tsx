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
    display[none]
    lg:flex lg:items-center
`};
`;

const List = styled.ul`
${tw`
    flex
    justify-between
`};
`;

const BurgerList = styled.ul`
width: 320px;
    box-shadow: 0px 5px 16px -8px #c5c5c5;
    background: #ffffff;
    font-size: 14px;
    padding: 10px 0 17px;
    border-radius: 0 0 7px 7px;
${tw`
    absolute
    top-[49px]
    left-[0px]
    z-50
`}
`;

const BurgeItem = styled.li`
padding: 5px 0 3px 17px;
${tw`

`}
`;

const Item = styled.li<{ pos?: boolean }>`
${tw`
    hover:bg-btn
  -ml-4
  lg:flex 
  lg:items-center
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
                            <BurgeItem><Button to={'/vidy-remonta/kapitalniy-remont'} theme="burger">Капитальный ремонт</Button></BurgeItem>
                            <BurgeItem><Button to={'/vidy-remonta/elitnyy-remont/'} theme="burger">Элитный ремонт</Button></BurgeItem>
                            <BurgeItem><Button to={'/vidy-remonta/evroremont/'} theme="burger">Евроремонт</Button></BurgeItem>
                            <BurgeItem><Button to={'/vidy-remonta/remont-v-odnokomnatnoy-kvartire/'} theme="burger">Ремонт в однокомнатной квартире</Button></BurgeItem>
                            <BurgeItem><Button to={'/vidy-remonta/remont-v-dvukhkomnatnoy-kvartire/'} theme="burger">Ремонт в двухкомнатной квартире</Button></BurgeItem>
                            <BurgeItem><Button to={'/vidy-remonta/remont-v-trekhkomnatnoy-kvartire/'} theme="burger">Ремонт в трехкомнатной квартире</Button></BurgeItem>
                            <BurgeItem><Button to={'/vidy-remonta/remont-v-novostroykakh/'} theme="burger">Ремонт в новостройках</Button></BurgeItem>
                            <BurgeItem><Button to={'/vidy-remonta/remont-taunkhausov/'} theme="burger">Ремонт таунхаусов</Button></BurgeItem>
                            <BurgeItem><Button to={'/vidy-remonta/remont-zagorodnykh-domov/'} theme="burger">Ремонт загородных домов</Button></BurgeItem>
                        </BurgerList>
                        }
                    </Item>
                    <Item><Button to={'/dizayn-interera'} theme="navLink">Дизайн интерьера</Button></Item>
                    <Item><Button to={'/protsess-remonta'} theme="navLink">Процесс ремонта</Button></Item>
                    {/*<Item><Button to={'/nashi-raboty'} theme="navLink">Наши работы</Button></Item>*/}
                    <Item><Button to={'/tseny'} theme="navLink">Цены</Button></Item>
                    <Item><Button to={'/kontakty'} theme="navLink">Контакты</Button></Item>
                    {/*<Item><Button to={'/stati-o-remonte'} theme="navLink">Статьи о ремонте</Button></Item>*/}
                    <Item className="-mr-5"><Button className="flex items-center" to={'/vidirimonti'} theme="navLink"><Calc className="md:mr-1 lg:mr-4" />Калькулятор ремонта</Button></Item>
                </List>
            </Wrapper>
        </Nav>
    );
};
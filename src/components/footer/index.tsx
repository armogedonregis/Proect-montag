import React from "react";
import styled from "styled-components";
import tw from "twin.macro";
import { Button } from "../button";
import { Wrapper } from "../wrapper";

const Container = styled.footer`
  ${tw`
  w-full
  py-[20px]
  lg:py-[40px]
  bg-footer
  `};
`;

const FlexContainer = styled.div`
  ${tw`
  md:flex 
  md:justify-between
  md:items-baseline
  `};
`;

const List = styled.ul`
  ${tw`
  `};
`;

const Item = styled.li`
  ${tw`
  my-2
  `};
`;

const StlBtn = styled(Button)<{ btn?: any; }>`
${({btn}) =>
btn ? 
tw`
    text-white 
    text-base 
    lg:text-lg 
    hover:text-btn-gray 
    hover:border-btn-gray 
    border-b 
    border-dashed 
    border-white
`
:
tw`
text-white 
text-sm 
lg:text-base 
hover:text-btn-gray 
hover:border-btn-gray 
lg:tracking-wider 
border-white 
mb-4
`
}
`;

export const Footer: React.FC = () => {
    return (
        <Container>
            <Wrapper>
                <FlexContainer>
                    <List>
                        <Item><Button to={'/vidy-remonta/remont-v-odnokomnatnoy-kvartire/'} theme="footLink">Ремонт в однокомнатной квартире</Button></Item>
                        <Item><Button to={'/vidy-remonta/remont-v-dvukhkomnatnoy-kvartire/'} theme="footLink">Ремонт в двукомнатной квартире</Button></Item>
                        <Item><Button to={'/vidy-remonta/remont-v-trekhkomnatnoy-kvartire/'} theme="footLink">Ремонт в трехкомнатной квартире</Button></Item>
                        <Item><Button to={'/vidy-remonta/remont-v-novostroykakh/'} theme="footLink">Ремонт в новостройке</Button></Item>
                        <Item><Button to={'/vidy-remonta/remont-taunkhausov/'} theme="footLink">Ремонт в таунхаусов</Button></Item>
                        <Item><Button to={'/vidy-remonta/remont-zagorodnykh-domov/'} theme="footLink">Ремонт загородных домов</Button></Item>
                    </List>
                    <List>
                        <Item><Button to={'/vidy-remonta'} theme="footLink">Виды ремонта</Button></Item>
                        <ul className="ml-4">
                            <li className="before:content-['•'] before:mr-1.5 before:text-white"><Button className="text-xs lg:text-sm font-light" to={'/vidy-remonta/kosmeticheskiy-remont'} theme="footLink">Косметический ремонт</Button></li>
                            <li className="before:content-['•'] before:mr-1.5 before:text-white"><Button className="text-xs lg:text-sm font-light" to={'/vidy-remonta/kapitalniy-remont'} theme="footLink">Капитальный ремонт</Button></li>
                            <li className="before:content-['•'] before:mr-1.5 before:text-white"><Button className="text-xs lg:text-sm font-light" to={'/vidy-remonta/elitnyy-remont/'} theme="footLink">Элитный ремонт</Button></li>
                            <li className="before:content-['•'] before:mr-1.5 before:text-white"><Button className="text-xs lg:text-sm font-light" to={'/vidy-remonta/evroremont/'} theme="footLink">Евроремонт</Button></li>
                        </ul>
                        <Item><Button to={'/dizayn-interera'} theme="footLink">Дизайн интерьера</Button></Item>
                    </List>
                    <List>
                        <Item><Button to={'/protsess-remonta'} theme="footLink">Процесс ремонта</Button></Item>
                        {/*<Item><Button to={'/nashi-raboty'} theme="footLink">Наши работы</Button></Item>*/}
                        <Item><Button to={'/tseny'} theme="footLink">Цены</Button></Item>
                        <Item><Button to={'/kontakty'} theme="footLink">Контакты</Button></Item>
                        <Item><Button to={'/vidirimonti'} theme="footLink">Калькулятор ремонта</Button></Item>
                        {/*<Item><Button to={'/stati-o-remonte'} theme="footLink">Статьи о ремонте</Button></Item>*/}
                    </List>
                    <div>
                        <StlBtn btn theme="phone" href="tel:+79255775456"><b>+7 (925) 577-54-56</b></StlBtn>
                        <br />
                        <StlBtn theme="call">Заказать звонок</StlBtn>
                        <br />
                        <span className="text-white text-sm lg:text-base">Ежедневно с <b>8:00</b></span>
                        <br />
                        <span className="text-white text-sm lg:text-base">до <b>23:00</b> МСК</span>
                    </div>
                </FlexContainer>
            </Wrapper>
        </Container>
    );
};
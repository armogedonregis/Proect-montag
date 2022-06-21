import React from "react";
import styled from "styled-components";
import tw from "twin.macro";
import { Button } from "../button";
import { Wrapper } from "../wrapper";

const Container = styled.footer`
  ${tw`
  w-full
  py-[40px]
  bg-footer
  `};
`;

const FlexContainer = styled.div`
  ${tw`
  flex 
  justify-between
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


export const Footer: React.FC = () => {
    return (
        <Container>
            <Wrapper>
                <FlexContainer>
                    <List>
                        <Item><Button to={'/vidirimonti'} theme="footLink">Ремонт в однокомнатной квартире</Button></Item>
                        <Item><Button to={'/vidirimonti'} theme="footLink">Ремонт в двукомнатной квартире</Button></Item>
                        <Item><Button to={'/vidirimonti'} theme="footLink">Ремонт в трехкомнатной квартире</Button></Item>
                        <Item><Button to={'/vidirimonti'} theme="footLink">Ремонт в новостройке</Button></Item>
                        <Item><Button to={'/vidirimonti'} theme="footLink">Ремонт в таунхаусов</Button></Item>
                        <Item><Button to={'/vidirimonti'} theme="footLink">Ремонт загородных домов</Button></Item>
                    </List>
                    <List>
                        <Item><Button to={'/vidirimonti'} theme="footLink">Виды ремонта</Button></Item>
                        <ul className="ml-4">
                            <li className="before:content-['•'] before:mr-1.5 before:text-white"><Button className="text-sm font-light" to={'/vidirimonti'} theme="footLink">Косметический ремонт</Button></li>
                            <li className="before:content-['•'] before:mr-1.5 before:text-white"><Button className="text-sm font-light" to={'/vidirimonti'} theme="footLink">Капитальный ремонт</Button></li>
                            <li className="before:content-['•'] before:mr-1.5 before:text-white"><Button className="text-sm font-light" to={'/vidirimonti'} theme="footLink">Элитный ремонт</Button></li>
                            <li className="before:content-['•'] before:mr-1.5 before:text-white"><Button className="text-sm font-light" to={'/vidirimonti'} theme="footLink">Евроремонт</Button></li>
                        </ul>
                        <Item><Button to={'/dizayn-interera'} theme="footLink">Дизайн интерьера</Button></Item>
                    </List>
                    <List>
                        <Item><Button to={'/protsess-remonta'} theme="footLink">Процесс ремонта</Button></Item>
                        <Item><Button to={'/nashi-raboty'} theme="footLink">Наши работы</Button></Item>
                        <Item><Button to={'/tseny'} theme="footLink">Цены</Button></Item>
                        <Item><Button to={'/kontakty'} theme="footLink">Контакты</Button></Item>
                        <Item><Button to={'/vidirimonti'} theme="footLink">Калькулятор ремонта</Button></Item>
                        <Item><Button to={'/stati-o-remonte'} theme="footLink">Статьи о ремонте</Button></Item>
                    </List>
                    <div>
                        <b><Button className="text-white text-lg hover:text-btn-gray hover:border-btn-gray border-b border-dashed border-white" theme="phone" href="tel:+79255775456">+7 (925) 577-54-56</Button></b>
                        <br />
                        <Button className="text-white text-base hover:text-btn-gray hover:border-btn-gray tracking-wider border-white mb-4" theme="call">Заказать звонок</Button>
                        <br />
                        <span className="text-white text-base">Ежедневно с <b>8:00</b></span>
                        <br />
                        <span className="text-white text-base">до <b>23:00</b> МСК</span>
                    </div>
                </FlexContainer>
            </Wrapper>
        </Container>
    );
};
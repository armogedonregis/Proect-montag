import React from "react";
import styled from "styled-components";
import tw from "twin.macro";
import { Wrapper } from "../wrapper";
import { Button } from "../button";
import { StaticImage } from "gatsby-plugin-image";

const Container = styled.section`
  ${tw`
  w-screen
  bg-bgWhite
  p-[50px 0 30px]
  `};
`;

const Title = styled.h2`
  ${tw`
  text-center font-extrabold text-4xl mb-10
  `};
`;

const CardContainer = styled.div`
  ${tw`
    flex
    flex-wrap
    justify-between
  `};
`;

const Card = styled.div`
border-radius: 5px;
  ${tw`
  flex
  flex-col
  justify-between
  w-[22.5rem]
  bg-white
  pb-[15rem]
  `};
`;

const CardTitle = styled.h3`
  ${tw`
    text-accent
    text-xl
    font-extrabold
    pl-[17px]
    mb-[15px]
  `};
`;

const List = styled.ul`
${tw`
    pl-[37px]
`}
`;

const Item = styled.li`
${tw`
    mb-[2px]
`}
`;

const Price = styled.span`
${tw`
    block
`}
`;

const Btn = styled(Button)`
${tw`
    flex
    justify-center
`}
`;

export const CardProect: React.FC = () => {
    return (
        <Container>
            <Wrapper>
                <Title>Цены</Title>
                <CardContainer>
                    <Card>
                        <StaticImage 
                            placeholder={"blurred"}
                            src={"../../assets/images/card_price_1.jpg"} 
                            alt={""}
                            style={{
                                marginBottom: '23px',
                            }}
                            quality={100}
                            formats={["auto", "webp", "avif"]}
                        />
                        <CardTitle>Рабочие чертежи</CardTitle>
                        <List>
                            <Item>Обмерный план</Item>
                            <Item>Монтажные планы</Item>
                            <Item>Рабочие чертежи перегородок и дверных проемов</Item>
                            <Item>Рабочие чертежи по электрике</Item>
                            <Item>Рабочие чертежи по сантехнике</Item>
                        </List>
                        <Price>от <b>500</b> руб/м2</Price>
                        <Btn theme="button" to="/">заказать</Btn>
                    </Card>
                    <Card>
                        <StaticImage 
                            placeholder={"blurred"}
                            src={"../../assets/images/card_price_2.jpg"} 
                            alt={""}
                            style={{
                                marginBottom: '23px',
                            }}
                            quality={100}
                            formats={["auto", "webp", "avif"]}
                        />
                        <CardTitle>Стандартный проект</CardTitle>
                        <List>
                            <Item>Обмерный план</Item>
                            <Item>Монтажные планы</Item>
                            <Item>Рабочие чертежи перегородок и дверных проемов</Item>
                            <Item>Рабочие чертежи по электрике</Item>
                            <Item>Рабочие чертежи по сантехнике</Item>
                            <Item>Трёхмерная визуализация</Item>
                            <Item>Подбор отделочных материалов и мебели</Item>
                        </List>
                        <Price>от <b>1000</b> руб/м2</Price>
                        <Btn theme="button" to="/">заказать</Btn>
                    </Card>
                    <Card>
                        <StaticImage 
                            placeholder={"blurred"}
                            src={"../../assets/images/card_price_3.jpg"} 
                            alt={""}
                            style={{
                                marginBottom: '23px',
                            }}
                            quality={100}
                            formats={["auto", "webp", "avif"]}
                        />
                        <CardTitle>Полный проект</CardTitle>
                        <List>
                            <Item>Обмерный план</Item>
                            <Item>Монтажные планы</Item>
                            <Item>Рабочие чертежи перегородок и дверных проемов</Item>
                            <Item>Рабочие чертежи по электрике</Item>
                            <Item>Рабочие чертежи по сантехнике</Item>
                            <Item>Трёхмерная визуализация</Item>
                            <Item>Подбор отделочных материалов и мебели</Item>
                            <Item>Контроль за соблюдением дизайн-проекта</Item>
                            <Item>Посещение объекта дизайнером</Item>
                        </List>
                        <Price>от <b>1500</b> руб/м2</Price>
                        <Btn theme="button" to="/">заказать</Btn>
                    </Card>
                </CardContainer>
            </Wrapper>
        </Container>
    );
};
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
  text-center font-extrabold lg:text-4xl lg:mb-10
    text-xl mb-5
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
  w-[22.5rem]
  mb-10
  bg-white
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
    mb-2
    list-disc
    marker:text-accent
`}
`;

const FlexContainer = styled.div`
${tw`
    flex flex-col justify-between
`}
`;

const PriceContainer = styled.div<{ 
    margin?: boolean; 
    margin1?: boolean;
    }>`
${tw` 
    flex
    flex-col
    lg:mt-5
    mt-2
    md:mt-[218px]
`}
${({ margin }) => 
margin && tw`lg:mt-[196px]`
}
${({ margin1 }) => 
margin1 && tw`lg:mt-[108px]`
}
`;

const Price = styled.span`
${tw`
    text-xl
    block
    ml-5
    mb-4
`}
`;

const Btn = styled(Button)`
${tw`
    flex
    justify-center
`}
`;

export const CardProect: React.FC<{title?: any;}> = ({title}) => {
    return (
        <Container>
            <Wrapper>
                <Title>{title}</Title>
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
                        <FlexContainer>
                            <CardTitle>Рабочие чертежи</CardTitle>
                            <List>
                                <Item>Обмерный план</Item>
                                <Item>Монтажные планы</Item>
                                <Item>Рабочие чертежи перегородок и дверных проемов</Item>
                                <Item>Рабочие чертежи по электрике</Item>
                                <Item>Рабочие чертежи по сантехнике</Item>
                            </List>
                            <PriceContainer margin>
                                <Price>от <b>500</b> руб/м2</Price>
                                <Btn theme="button" to="/">заказать</Btn>
                            </PriceContainer>
                        </FlexContainer>
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
                        <FlexContainer>
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
                            <PriceContainer margin1>
                                <Price>от <b>1000</b> руб/м2</Price>
                                <Btn theme="button" to="/">заказать</Btn>
                            </PriceContainer>
                        </FlexContainer>
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
                        <FlexContainer>
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
                            <PriceContainer>
                                <Price>от <b>1500</b> руб/м2</Price>
                                <Btn theme="button" to="/">заказать</Btn>
                            </PriceContainer>
                        </FlexContainer>
                    </Card>
                </CardContainer>
            </Wrapper>
        </Container>
    );
};

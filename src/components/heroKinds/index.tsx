import { StaticImage } from "gatsby-plugin-image";
import React from "react";
import styled from "styled-components";
import tw from "twin.macro";
import { Button } from "../button";
import { Wrapper } from "../wrapper";
import Check from "../../assets/icons/check_white.svg";

const Container = styled.div`
${tw`
    w-screen
    mb-20
    text-left
    bg-bgWhite-gray
    pt-4
    pb-20
`};
`;

const Title = styled.h1`
${tw`
    text-5xl
    leading-[66px]
    text-primary
    tracking-wider
    font-extrabold
    mb-12
`};
`;

const NavBtn = styled.div`
${tw`
    bg-white
    flex
    items-center
    justify-around
    p-[20px 190px]
    shadow-cardKinds
    rounded
    mb-12
`}
`;

const PriceTitle = styled.span`
${tw`
    text-accent
    text-3xl
    font-semibold
`}
`;

const Price = styled.b`
${tw`
    text-4xl
    font-extrabold
`}
`;

const CardContainer = styled.div`
${tw`
    flex
    justify-between
`}
`;

const Card = styled.div`
${tw`
    bg-accent
    shadow-cardKinds
    rounded
    w-[360px]
    min-h-[640px]
    text-white
`}
`;

const CardTitle = styled.h4`
${tw`
    text-xl font-extrabold mb-7 px-4
`}
`;

const List = styled.ul`
${tw`
    px-4
`}
`;

const Item = styled.li`
${tw`
    flex
    items-baseline
`}
`;

const Descr = styled.span`
${tw`
    text-base
    px-2.5
    mb-2.5
    ml-2.5
`}
`;


export const HeroKinds: React.FC = () => {
    return (
        <Container>
            <Wrapper>
                <Title>Косметический ремонт квартир</Title>
                <NavBtn>
                    <PriceTitle>от <Price>3000</Price> руб/м2</PriceTitle>
                    <Button theme="button" to="/">рассчитать стоимость</Button>
                </NavBtn>
                <CardContainer>
                    <Card>
                        <StaticImage 
                            placeholder={"blurred"}
                            src={"../../assets/images/card_kinds_repair_1.jpg"} 
                            alt={""}
                            style={{
                                marginBottom: '30px',
                            }}
                            quality={100}
                            formats={["auto", "webp", "avif"]}
                        />
                        <CardTitle>В день замера помещения</CardTitle>
                        <List>
                            <Item><Check width={18} height={15} /><Descr>Смета на работы и материалы</Descr></Item>
                            <Item><Check width={18} height={15} /><Descr>Выбор отделочных материалов</Descr></Item>
                            <Item><Check width={18} height={15} /><Descr>Сроки проведения ремонта</Descr></Item>
                        </List>
                    </Card>
                    <Card>
                        <StaticImage 
                            placeholder={"blurred"}
                            src={"../../assets/images/card_kinds_repair_2.jpg"} 
                            alt={""}
                            style={{
                                marginBottom: '30px',
                            }}
                            quality={100}
                            formats={["auto", "webp", "avif"]}
                        />
                        <CardTitle>Все отделочные работы в одном месте</CardTitle>
                        <List>
                            <Item><Check width={18} height={15} /><Descr>Персональный прораб</Descr></Item>
                            <Item><Check width={18} height={15} /><Descr>Допуски ко всем видам работ</Descr></Item>
                        </List>
                    </Card>
                    <Card>
                        <StaticImage 
                            placeholder={"blurred"}
                            src={"../../assets/images/card_kinds_repair_3.jpg"} 
                            alt={""}
                            style={{
                                marginBottom: '30px',
                            }}
                            quality={100}
                            formats={["auto", "webp", "avif"]}
                        />
                        <CardTitle>Весь процесс ремонта
						контролирует руководитель
						проекта</CardTitle>
                        <List>
                            <Item><Check width={18} height={15} /><Descr>Все заботы берём на себя</Descr></Item>
                            <Item><Check width={18} height={15} /><Descr>Еженедельный фото/видео отчёт</Descr></Item>
                        </List>
                    </Card>
                </CardContainer>
            </Wrapper>
        </Container>
    );
};
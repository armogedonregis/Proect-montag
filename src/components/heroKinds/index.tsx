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
    lg:mb-20
    mb-5
    text-left
    bg-bgWhite-gray
    pt-4
    lg:pb-20
    pb-4
`};
`;

const Title = styled.h1`
${tw`
    lg:text-[50px]
    text-xl
    md:text-[30px]
    leading-[25px]
    md:leading-[45px]
    lg:leading-[66px]
    text-primary
    tracking-wider
    font-extrabold
    lg:mb-12
    mb-5
`};
`;

const NavBtn = styled.div`
${tw`
    bg-white
    md:flex
    md:items-start
    lg:items-center
    md:justify-around
    md:p-[20px 190px]
    p-[21px]
    text-center
    shadow-cardKinds
    rounded
    mb-12
`}
`;

const PriceTitle = styled.span`
${tw`
    block
    text-accent
    lg:text-3xl
    text-base
    font-semibold
    mb-3 lg:mb-0
`}
`;

const Price = styled.b`
${tw`
    lg:text-4xl
    text-xl
    font-extrabold
`}
`;

const CardContainer = styled.div`
${tw`
    lg:flex
    lg:justify-between
    display[none]
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


export const HeroKinds: React.FC<{
    title: any;
    price: any;
}> = ({title, price }) => {
    return (
        <Container>
            <Wrapper>
                <Title>{title}</Title>
                <NavBtn>
                    <PriceTitle>от <Price>{price}</Price> руб/м2</PriceTitle>
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
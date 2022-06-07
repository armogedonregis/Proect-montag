import React from "react";
import styled from "styled-components";
import tw from "twin.macro";
import { Wrapper } from "../wrapper";
import Measure  from "../../assets/icons/measurements.svg";
import  Plan  from "../../assets/icons/planning.svg";
import  Sketch  from "../../assets/icons/sketches.svg";
import  Bucket  from "../../assets/icons/bucket.svg";
import  Installation  from "../../assets/icons/installation.svg";
import  Jack  from "../../assets/icons/jack.svg";
import  Roller  from "../../assets/icons/roller.svg";
import  Furniture  from "../../assets/icons/furniture.svg";


const Container = styled.section`
${tw`
    text-center
    mb-10
    w-screen
`};
`;

const Title = styled.h2`
${tw`
    text-[40px]
    font-extrabold
    mb-10
`}
`;

const ListContainer = styled.div`
${tw`
    flex
    mb-8
`}
`;

const TextList = styled.b`
${tw`
    text-number
    mr-[2rem]
    text-[260px]
    font-extrabold
    leading-[180px]
`}
`;

const List = styled.ul`
${tw`
    flex
    items-center
`}
`;

const Item = styled.li`
${tw`
    w-[200px]
    flex
    flex-col
    items-center
    m-[15px]
`}
`;

const Descr = styled.span`
${tw`
    pt-4
    text-xl
    text-black
    font-light
`}
`;

export const FeaturesDesign: React.FC = () => {
    return (
        <Container>
            <Wrapper>
                <Title>Дизайн-проект в два этапа</Title>
                <ListContainer>
                    <TextList>1</TextList>
                    <List>
                        <Item><Measure /><Descr>Замеры<br /> помещения</Descr></Item>
                        <Item><Plan /><Descr>Планировочное решение</Descr></Item>
                        <Item><Sketch /><Descr>Эскизы объекта<br /> в 3д</Descr></Item>
                        <Item><Bucket /><Descr>Выбор черновых отделочных материалов</Descr></Item>
                    </List>
                </ListContainer>
                <ListContainer>
                    <TextList>2</TextList>
                    <List>
                        <Item><Installation /><Descr>Планы монтажа перегородок, дверных проемов</Descr></Item>
                        <Item><Jack /><Descr>План сантехники, розеток и выключателей, освещение</Descr></Item>
                        <Item><Roller /><Descr>Схема пола и потолка, отделка стен</Descr></Item>
                        <Item><Furniture /><Descr>Выбор финишных отделочных материалов, дверей, мебели, оборудования</Descr></Item>
                    </List>
                </ListContainer>
            </Wrapper>
        </Container>
    );
};
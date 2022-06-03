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

const List = styled.ul`
${tw`
    flex
    flex-wrap
    justify-center
`}
`;

const Item = styled.li`
${tw`
    w-1/12
    text-xl
    font-light
    mr-[150px]
`}
`;

export const FeaturesDesign: React.FC = () => {
    return (
        <Container>
            <Wrapper>
                <Title>Дизайн-проект в два этапа</Title>
                <List>
                    <Item><Measure />Замеры помещения</Item>
                    <Item><Plan />Планировочное решение</Item>
                    <Item><Sketch />Эскизы объекта в 3д</Item>
                    <Item><Bucket />Выбор черновых отделочных материалов</Item>
                    <Item><Installation />Планы монтажа перегородок, дверных проемов</Item>
                    <Item><Jack />План сантехники, розеток и выключателей, освещение</Item>
                    <Item><Roller />Схема пола и потолка, отделка стен</Item>
                    <Item><Furniture />Выбор финишных отделочных материалов, дверей, мебели, оборудования</Item>
                </List>
            </Wrapper>
        </Container>
    );
};
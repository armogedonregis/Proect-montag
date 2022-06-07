import React from "react";
import styled from "styled-components";
import tw from "twin.macro";
import { Wrapper } from "../wrapper";

const Container = styled.section`
  ${tw`
  mb-20
  bg-bgWhite-gray
  p-[10px 0 30px]
  `};
`;

const Title = styled.h2`
  ${tw`
  text-center font-extrabold text-4xl mb-10
  `};
`;

const List = styled.ul`
${tw`
    flex
    justify-evenly
`}
`;

const Item = styled.li`
${tw`
    flex
    flex-col
    text-xl
    text-center
`}
`;

const Metr = styled.b`
${tw`
    text-accent
    text-3xl
    font-extrabold
    mb-3
`}
`;

export const TimeRepair: React.FC = () => {
    return (
        <Container>
            <Wrapper>
                    <Title>Сроки проведения косметического ремонта</Title>
                    <List>
                        <Item><Metr>до 48 м2</Metr>15-20 дней</Item>
                        <Item><Metr>до 70 м2</Metr>20-35 дней</Item>
                        <Item><Metr>до 100 м2</Metr>35-45 дней</Item>
                        <Item><Metr>до 140 м2</Metr>45-60 дней</Item>
                    </List>
            </Wrapper>
        </Container>
    );
};
import React from "react";
import styled from "styled-components";
import tw from "twin.macro";
import { Wrapper } from "../wrapper";
import Check from "../../assets/icons/check.svg";


const Container = styled.section`
${tw`
    text-center
    mb-10
    bg-bgWhite-blue
    w-screen
    py-[6rem]
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
    mb-10
    block
    text-center
    justify-center
`}
`;

const Item = styled.li`
${tw`
    text-xl
    font-light
    mb-3
    block
    text-center
    justify-center
`}
`;

const Descr = styled.span`
${tw`
    ml-6
    flex
    text-center
`}
`;

export const Privilege: React.FC = () => {
    return (
        <Container>
            <Wrapper>
                <Title>Преимущества работы с нами</Title>
                <List>
                    <Item><Descr><Check width={30} height={30} />Работаем оперативно, выполняем дизайн-проект в минимальные сроки</Descr></Item>
                    <Item><Descr><Check width={30} height={30} />Заказчикам предоставляются фотоотчеты по каждому выполненному этапу работ</Descr></Item>
                    <Item><Descr><Check width={30} height={30} />Фиксированная стоимость работ, прописанная в договоре, без доплат</Descr></Item>
                    <Item><Descr><Check width={30} height={30} />Дизайнеры и мастера работают вместе</Descr></Item>
                    <Item><Descr><Check width={30} height={30} />Подбор отделочных материалов</Descr></Item>
                </List>
            </Wrapper>
        </Container>
    );
};
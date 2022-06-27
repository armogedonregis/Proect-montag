import React from "react";
import styled from "styled-components";
import tw from "twin.macro";
import { Wrapper } from "../wrapper";
import Check from "../../assets/icons/check.svg";


const Container = styled.section`
${tw`
    text-left
    lg:text-center
    lg:mb-10
    mb-5
    bg-bgWhite-blue
    w-screen
    py-[25px]
    lg:py-[6rem]
`};
`;

const Title = styled.h2`
${tw`
    lg:text-[40px]
    text-xl
    font-extrabold
    mb-10
`}
`;

const ListContainer = styled.div`
${tw`
    flex
    justify-center
`}
`;

const List = styled.ul`
${tw`
    lg:mb-10
    mb-5
`}
`;

const Item = styled.li`
${tw`
    flex
    lg:text-xl
    text-sm
    font-light
    lg:mb-3
    mb-2
    py-2
`}
`;

const Descr = styled.span`
${tw`
    block
    lg:ml-6
    ml-3
`}
`;

export const Privilege: React.FC = () => {
    return (
        <Container>
            <Wrapper>
                <Title>Преимущества работы с нами</Title>
                <ListContainer>
                    <List>
                        <Item><Check width={30} height={30} /><Descr>Работаем оперативно, выполняем дизайн-проект в минимальные сроки</Descr></Item>
                        <Item><Check width={30} height={30} /><Descr>Заказчикам предоставляются фотоотчеты по каждому выполненному этапу работ</Descr></Item>
                        <Item><Check width={30} height={30} /><Descr>Фиксированная стоимость работ, прописанная в договоре, без доплат</Descr></Item>
                        <Item><Check width={30} height={30} /><Descr>Дизайнеры и мастера работают вместе</Descr></Item>
                        <Item><Check width={30} height={30} /><Descr>Подбор отделочных материалов</Descr></Item>
                    </List>
                </ListContainer>
            </Wrapper>
        </Container>
    );
};
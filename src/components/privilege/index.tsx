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

const ListContainer = styled.div`
${tw`
    flex
    justify-center
`}
`;

const List = styled.ul`
${tw`
    mb-10
`}
`;

const Item = styled.li`
${tw`
    flex
    text-xl
    font-light
    mb-3
`}
`;

const Descr = styled.span`
${tw`
    ml-6
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
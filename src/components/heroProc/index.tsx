import React from "react";
import styled from "styled-components";
import tw from "twin.macro";
import { Button } from "../button";
import { ProcList } from "../procList";
import { Wrapper } from "../wrapper";

const Container = styled.div`
${tw`
    w-screen
    bg-bgWhite-gray
    mb-5
    lg:mb-32
`};
`;

const Text = styled.div`
${tw`
    lg:mb-[70px]
    lg:text-left
`}
`;

const Title = styled.h1`
${tw`
    lg:text-[50px]
    lg:leading-[66px]
    lg:tracking-wider
    lg:mb-[30px]
    font-extrabold
`};
`;

const Descr = styled.p`
${tw`
    lg:text-xl
    lg:leading-[31px]
    lg:font-normal
    lg:mb-[20px]
`}
`;

const Bold = styled.b`
${tw`
    lg:font-bold
    uppercase
`}
`;

export const HeroProc: React.FC = () => {
    return (
        <Container>
            <Wrapper>
                <div className="mb-2 mt-2 lg:mb-3 lg:mt-5">
                    <Button theme="navigate" to={'/'}>Главная</Button>
                    <span className="text-xs lg:text-sm text-primary"> / </span>
                    <span className="text-xs lg:text-sm text-primary">Процесс ремонта</span>
                </div>
                <Text>
                    <Title>Процесс ремонта от Проект Монтаж</Title>
                    <Descr>Показываем то, что остаётся за кадром, но играет большую роль в отделке квартиры или загородного дома под ключ. Многие заказчики считают, что все ремонтные компании делают ремонт одинаково, разница только в цене.</Descr>
                    <Descr><Bold>Это не так.</Bold><br /> Реальные примеры наших работ с реальных объектов</Descr>
                </Text>
                <ProcList />
            </Wrapper>
        </Container>
    );
};
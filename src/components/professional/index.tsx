import React from "react";
import styled from "styled-components";
import tw from "twin.macro";
import { Wrapper } from "../wrapper";
import Check from "../../assets/icons/check.svg";
import { StaticImage } from "gatsby-plugin-image";


const Container = styled.section`
${tw`
    lg:text-center
    text-left
    lg:mb-10
    mb-5
    bg-bgWhite-blue
    w-screen
    pt-[25px]
    lg:p-[140px 0 0]
`};
`;

const Title = styled.h2`
${tw`
    lg:leading-[53px]
    lg:w-[38rem]
    lg:text-[40px]
    text-xl
    text-left
    font-extrabold
    lg:mb-10
    mb-5
`}
`;

const Descript = styled.p`
${tw`
    lg:w-[40rem]
    text-left
    lg:text-xl
    text-sm
    lg:font-normal
    font-light
    lg:mb-10
    mb-3
`}
`;

const ListContainer = styled.div`
${tw`
    flex
    lg:flex-row
    flex-col
    lg:justify-between
    lg:items-start
    items-center
    lg:mb-10
    mb-5
`}
`;

const ListLeft = styled.div`
${tw`
    
`}
`;

const ListRight = styled.div`
${tw`
    lg:-mt-10
    mb-[-15px]
    lg:mb-[initial]
    w-[210px] h-[265px]
    lg:w-[initial] lg:h-[initial]
`}
`;

const List = styled.ul`
${tw`
`}
`;

const Item = styled.li`
${tw`
    flex
    items-center
    text-left
    lg:text-xl
    text-sm
    lg:font-light
    mb-3
`}
`;

const Descr = styled.span`
${tw`
    ml-6
`}
`;



export const Professional: React.FC = () => {
    return (
        <Container>
            <Wrapper>
                <ListContainer>
                    <ListLeft>
                    <Title>Профессиональный подход к ремонту в деталях</Title>
                    <Descript>У нас нет мастеров «на все руки», у нас узкопрофильные мастера, каждый из которых выполняет конкретно свою работу</Descript>
                        <List>
                            <Item><Check width={30} height={30} /><Descr>Все сантехнические работы выполняет штатный сантехник</Descr></Item>
                            <Item><Check width={30} height={30} /><Descr>Все электромонтажные работы выполняет электрик с допуском</Descr></Item>
                            <Item><Check width={30} height={30} /><Descr>Отелочные работы выполняют отделочники</Descr></Item>
                            <Item><Check width={30} height={30} /><Descr>Укладку плитки выполняет плиточник с профессиональным инструментом</Descr></Item>
                        </List>
                    </ListLeft>
                    <ListRight>
                        <StaticImage 
                            placeholder={"blurred"}
                            src={"../../assets/images/happy_man.jpg"}
                            alt={""}
                            quality={100}
                            formats={["auto", "webp", "avif"]}
                        />
                    </ListRight>
                </ListContainer>
            </Wrapper>
        </Container>
    );
};
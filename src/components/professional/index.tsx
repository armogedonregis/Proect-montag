import React from "react";
import styled from "styled-components";
import tw from "twin.macro";
import { Wrapper } from "../wrapper";
import Check from "../../assets/icons/check.svg";
import { StaticImage } from "gatsby-plugin-image";


const Container = styled.section`
${tw`
    text-center
    mb-10
    bg-bgWhite-blue
    w-screen
    p-[140px 0 0]
`};
`;

const Title = styled.h2`
${tw`
    w-[38rem]
    text-[40px]
    text-left
    font-extrabold
    mb-10
`}
`;

const Descript = styled.p`
${tw`
    w-[40rem]
    text-left
    text-xl
    font-normal
    mb-10
`}
`;

const ListContainer = styled.div`
${tw`
    flex
    justify-between
    items-start
    mb-10
`}
`;

const ListLeft = styled.div`
${tw`
    
`}
`;

const ListRight = styled.div`
${tw`
    -mt-10
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
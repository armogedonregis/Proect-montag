import React from "react";
import styled from "styled-components";
import tw from "twin.macro";
import { Button } from "../button";
import { Wrapper } from "../wrapper";
import Check from "../../assets/icons/check.svg";
import { StaticImage } from "gatsby-plugin-image";


const Container = styled.section`
${tw`
    text-center
    mb-10
    bg-bgWhite
    w-full
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
    justify-between
    items-center
    mb-10
`}
`;

const ListLeft = styled.div`
${tw`
    
`}
`;

const ListRight = styled.div`
${tw`
    
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

const QuestContainer = styled.div`
${tw`
    flex flex-col items-start
    mt-12
`}
`;

const Quest = styled.i`
${tw`
    text-2xl
    text-left
    mb-6
`}
`;


export const Questions: React.FC = () => {
    return (
        <Container>
            <Wrapper>
                <Title>Ремонт без забот</Title>
                <ListContainer>
                    <ListLeft>
                        <List>
                            <Item><Check width={30} height={30} /><Descr>Дизайн-проект</Descr></Item>
                            <Item><Check width={30} height={30} /><Descr>Согласование и решение всех проблем</Descr></Item>
                            <Item><Check width={30} height={30} /><Descr>Комплектация объекта отделочными материалами</Descr></Item>
                            <Item><Check width={30} height={30} /><Descr>Черновые работы</Descr></Item>
                            <Item><Check width={30} height={30} /><Descr>Инженерные работы</Descr></Item>
                            <Item><Check width={30} height={30} /><Descr>Чистовые работы</Descr></Item>
                            <Item><Check width={30} height={30} /><Descr>Вывоз мусора и финальная уборка объекта</Descr></Item>
                        </List>
                        <QuestContainer>
                            <Quest>Есть вопрос? Задайте его<br /> руководителю проектов</Quest>
                            <Button className="w-[360px]" to={'/'} theme="button">задать вопрос</Button>
                        </QuestContainer>
                    </ListLeft>
                    <ListRight>
                        <StaticImage 
                            placeholder={"blurred"}
                            src={"../../assets/images/happy_engineer.png"}
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
import React from "react";
import styled from "styled-components";
import tw from "twin.macro";
import { Button } from "../button";
import { Wrapper } from "../wrapper";
import Check from "../../assets/icons/check.svg";
import { StaticImage } from "gatsby-plugin-image";


const Container = styled.section<{
    pages?: boolean;
}>`
${tw`
    bg-bgWhite
    lg:w-screen
    py-[2rem]
    lg:py-[6rem]
`};
${({ pages }) =>
pages ? tw`-mt-5 lg:-mt-20` : tw`mb-2 lg:mb-10`
}
`;

const Title = styled.h2<{ centre?: boolean; }>`
${tw`
    text-center
    text-xl
    lg:text-[40px]
    font-extrabold
    lg:mb-10
    mb-4
`}
${({ centre }) => 
centre ? tw`text-left` : tw`text-center`
}
`;

const PostTitle = styled.p`
${tw`
    lg:leading-[31px]
    leading-[22px]
    lg:font-normal
    font-light
    lg:text-xl
    text-sm
    lg:w-7/12
    mb-4
    lg:mb-10
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
    display[none]
    lg:block
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
    text-sm
    lg:text-xl
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
    flex flex-col items-center lg:items-start
    mt-12
`}
`;

const Quest = styled.i`
${tw`
    text-sm
    lg:text-2xl
    text-left
    mb-6
`}
`;


export const Questions: React.FC<{
    centr?: boolean;
    TitleQ?: any;
    TitleP?: any;
    pag?: boolean;
}> = ({centr, TitleQ, TitleP, pag}) => {
    return (
        <Container pages={pag}>
            <Wrapper>
                <Title centre={centr}>{TitleQ}</Title>
                <PostTitle>{TitleP}</PostTitle>
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
                            <Button className="lg:w-[360px]" to={'/'} theme="button">задать вопрос</Button>
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
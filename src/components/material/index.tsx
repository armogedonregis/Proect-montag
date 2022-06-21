import React from "react";
import styled from "styled-components";
import tw from "twin.macro";
import { Wrapper } from "../wrapper";
import { StaticImage } from "gatsby-plugin-image";


const Container = styled.section`
${tw`
    text-center
    mb-10
    w-screen
`};
`;

const Title = styled.h2`
${tw`
    w-10/12
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
    leading-[31px]
    font-light
    mb-5
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

`}
`;

export const Material: React.FC = () => {
    return (
        <Container>
            <Wrapper>
                <ListContainer>
                    <ListLeft>
                        <Title>Обеспечиваем отделочными материалами</Title>
                        <Descript>Мы не рассказываем сказки про закупку материалов по оптовым ценам, собственные склады. Мы закупаем по обычным розничным ценам магазинов типа Леруа Мерлен, Петрович, Сатурн. Доверяя закупку материалов нам, Вы получаете честную работу с материалами от нашей компании.</Descript>
                        <Descript>Также Вы можете приобретать материалы самостоятельно.</Descript>
                    </ListLeft>
                    <ListRight>
                        <StaticImage 
                            placeholder={"blurred"}
                            src={"../../assets/images/stroymaterials.jpg"}
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
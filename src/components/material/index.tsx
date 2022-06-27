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
    lg:w-10/12
    lg:text-[40px]
    text-xl
    lg:leading-[53px]
    leading-[30px]
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
    lg:leading-[31px]
    leading-[22px]
    lg:font-light
    font-normal
    mb-5
`}
`;

const ListContainer = styled.div`
${tw`
    lg:flex
    lg:justify-between
    lg:items-start
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
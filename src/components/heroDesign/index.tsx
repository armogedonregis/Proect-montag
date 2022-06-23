import React from "react";
import styled from "styled-components";
import tw from "twin.macro";
import { Button } from "../button";
import { Wrapper } from "../wrapper";
import { StaticImage } from "gatsby-plugin-image";

const Container = styled.div`
${tw`
    relative
    lg:mb-32
    mb-5
`};
`;

const ImageContainer = styled.div`
${tw`
    w-[150vw]
    lg:w-full
`}
`;

const Text = styled.div`
${tw`
    block
    absolute
    top-[1rem]
    md:top-[3rem]
    lg:top-[2rem]
    xl:top-[6rem]
    text-white
    tracking-wider
`}
`;

const Title = styled.h1`
${tw`
    lg:w-[35rem]
    lg:leading-[66px]
    md:leading-[20px]
    text-primary
    font-extrabold
    mb-2
    md:text-2xl
    lg:text-4xl
    xl:text-5xl
    w-[250px]
    md:w-full
`};
`;

const Descr = styled.p`
${tw`
    lg:w-[42rem]
    md:w-[25rem]
    w-[15rem]
    italic
    text-primary
    text-xs
    mb-5
    md:mt-6
    md:mb-10
    xl:text-2xl
    lg:text-xl
    lg:mt-14
    lg:mb-14
`}
`;


export const HeroDesign: React.FC = () => {
    return (
        <Container>
            <ImageContainer>
                <StaticImage 
                    placeholder={"blurred"}
                    src={"../../assets/images/bg/banner_design.jpg"} 
                    alt={""}
                    layout="fullWidth"
                    quality={100}
                    formats={["auto", "webp", "avif"]}
                />
            </ImageContainer>
            <Wrapper>
                <Text>
                    <Title>Дизайн интерьера от Проект Монтаж</Title>
                    <Descr>У вас есть идеи, но вы не знаете как их реализовать? 
                        Наши дизайнеры разработают для вас уникальный проект с учетом всех ваших пожеланий.
                    </Descr>
                    <Button to={'/'} theme="button">получить консультацию дизайнера</Button>
                </Text>
            </Wrapper>
        </Container>
    );
};
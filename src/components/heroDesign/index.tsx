import React from "react";
import styled from "styled-components";
import tw from "twin.macro";
import { Button } from "../button";
import { Wrapper } from "../wrapper";
import { StaticImage } from "gatsby-plugin-image";

const Container = styled.div`
${tw`
    relative
    w-screen
    lg:mb-32
    mb-5
`};
`;

const ImageContainer = styled.div`
${tw`
    max-w-screen-md
    md:max-w-screen-lg
    md:h-screen
    h-[270px]
    lg:max-w-full
`}
`;

const Text = styled.div`
${tw`
    block
    absolute
    top-[3rem]
    xl:top-[6rem]
    text-white
    tracking-wider
`}
`;

const Title = styled.h1`
${tw`
    lg:w-[35rem]
    lg:leading-[66px]
    leading-[20px]
    text-primary
    font-extrabold
    text-xl
    mb-5
    md:mb-12
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
                    style={{
                        width: '100%',
                        height: '100%',
                    }}
                    quality={100}
                    formats={["auto", "webp", "avif"]}
                />
            </ImageContainer>
            <Wrapper>
                <div className="absolute top-[5px] lg:top-[20px]">
                    <Button theme="navigate" to={'/'}>Главная</Button>
                    <span className="text-xs lg:text-sm text-primary"> / </span>
                    <span className="text-xs lg:text-sm text-primary">Дизайн интерьера</span>
                </div>
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
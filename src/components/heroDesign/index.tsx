import React from "react";
import styled from "styled-components";
import tw from "twin.macro";
import { Button } from "../button";
import { Wrapper } from "../wrapper";
import { StaticImage } from "gatsby-plugin-image";

const Container = styled.div`
${tw`
    relative
    mb-32
`};
`;

const Text = styled.div`
${tw`
    block
    absolute
    top-[6rem]
    text-white
    tracking-wider
`}
`;

const Title = styled.h1`
${tw`
    w-[35rem]
    text-5xl
    leading-[66px]
    text-primary
    font-extrabold
    mb-2
`};
`;

const Descr = styled.p`
${tw`
    w-2/5
    italic
    text-primary
    text-2xl
    mt-14
    mb-14
`}
`;


export const HeroDesign: React.FC = () => {
    return (
        <Container>
            <StaticImage 
                placeholder={"blurred"}
                src={"../../assets/images/banner_design.jpg"} 
                alt={""}
                style={{
                    width: '100vw',
                    position: 'relative',
                }}
                imgStyle={{
                }}
                quality={100}
                formats={["auto", "webp", "avif"]}
            />
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
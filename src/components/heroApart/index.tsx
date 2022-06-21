import React from "react";
import styled from "styled-components";
import tw from "twin.macro";
import { Button } from "../button";
import { Wrapper } from "../wrapper";
import { StaticImage } from "gatsby-plugin-image";

const Container = styled.div`
${tw`
    w-screen
    relative
`};
`;

const Text = styled.div`
${tw`
    block
    absolute
    top-[6rem]
    tracking-wider
`}
`;


const Title = styled.h1`
${tw`
    text-6xl
    font-extrabold
    leading-[65px]
    mb-4
`};
`;

const Key = styled.span`
${tw`
    text-2xl
`}
`;

const Price = styled.span`
${tw`
    flex
    italic
    text-2xl
    mt-14
    mb-14
`}
`;

export const HeroApart: React.FC<{
    heroTitle: any;
    heroPostTitle: any;
    descrHero: any;
    mb?: any;
}> = ({heroTitle, heroPostTitle, descrHero, mb}) => {
    return (
        <Container className={mb}>
            <StaticImage 
                placeholder={"blurred"}
                src={"../../assets/images/bg/banner_1.jpg"} 
                alt={""}
                layout="fullWidth"
                quality={100}
                formats={["auto", "webp", "avif"]}
            />
            <Wrapper>
                <Text>
                    <Title>{heroTitle}<br />{heroPostTitle}</Title>
                    <Key>{descrHero}</Key>
                    <Price>Рассчитай стоимость ремонта прямо сейчас</Price>
                    <Button to={'/'} theme="button">рассчитать стоимость</Button>
                </Text>
            </Wrapper>
        </Container>
    );
};
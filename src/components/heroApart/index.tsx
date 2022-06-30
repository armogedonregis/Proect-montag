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

const ImageContainer = styled.div`
${tw`
    max-w-screen-md
    md:max-w-screen-lg
    md:h-screen
    h-[270px]
    lg:max-w-full
`}
`;

const Text = styled.div<{ textColor: boolean; }>`
${tw`
    block
    absolute
    top-[4rem]
    xl:top-[6rem]
    lg:tracking-wider
`}
${({ textColor }) => 
textColor ? tw`text-white` : tw`text-primary`
}
`;


const Title = styled.h1`
${tw`
    xl:text-6xl
    font-extrabold
    lg:leading-[65px]
    mb-4
    text-lg
    leading-[24px]
    md:text-2xl
    lg:text-4xl
    w-[300px]
    md:w-full
`};
`;

const Key = styled.span`
${tw`
    text-xs
    xl:text-2xl
    lg:text-xl
`}
`;

const Price = styled.span`
${tw`
    flex
    italic
    text-sm
    mt-[10px]
    mb-4
    lg:text-2xl
    lg:mt-14
    lg:mb-14
`}
`;

export const Bgrnd: React.FC<{
    theme?: string;
  }> = ({ theme = "bgmain" }) => {
    if (theme === "bgnew") {
    return <StaticImage 
        placeholder={"blurred"}
        src={"../../assets/images/bg/banner_novostroy.jpg"} 
        alt={""}
        layout="fullWidth"
        quality={100}
        style={{
            width: '100%',
            height: '100%',
        }}
        formats={["auto", "webp", "avif"]}
        />;
    }
    if (theme === "bgtown") {
        return <StaticImage 
            placeholder={"blurred"}
            src={"../../assets/images/bg/banner_townhouse.jpg"} 
            alt={""}
            layout="fullWidth"
            quality={100}
            style={{
                width: '100%',
                height: '100%',
            }}
            formats={["auto", "webp", "avif"]}
            />;
        }
        if (theme === "bgvac") {
        return <StaticImage 
            placeholder={"blurred"}
            src={"../../assets/images/bg/banner_zagorodnyh_domov.jpg"} 
            alt={""}
            layout="fullWidth"
            quality={100}
            style={{
                width: '100%',
                height: '100%',
            }}
            formats={["auto", "webp", "avif"]}
        />;
        }
    return <StaticImage 
        placeholder={"blurred"}
        src={"../../assets/images/bg/banner_1.jpg"} 
        alt={""}
        layout="fullWidth"
        quality={100}
        style={{
            width: '100%',
            height: '100%',
        }}
        formats={["auto", "webp", "avif"]}
    />;
  };

export const HeroApart: React.FC<{
    heroTitle: any;
    heroPostTitle: any;
    descrHero: any;
    mb?: any;
    bg?: any;
    color?: any;
}> = ({heroTitle, heroPostTitle, descrHero, bg, mb, color}) => {
    return (
        <Container className={mb}>
            <ImageContainer>
                <Bgrnd theme={bg} />
            </ImageContainer>
            <Wrapper>
                <div className="absolute top-[5px] lg:top-[20px]">
                    <Button theme="navigate" to={'/'}>Главная</Button>
                    <span className="text-xs lg:text-sm text-primary"> / </span>
                    <Button theme="navigate" to={'/vidy-remonta/'}>Виды ремонта</Button>
                    <span className="text-xs lg:text-sm text-primary"> / </span>
                    <span className="text-xs lg:text-sm text-primary">{heroTitle}</span>
                </div>
                <Text textColor={color}>
                    <Title>{heroTitle}<br />{heroPostTitle}</Title>
                    <Key>{descrHero}</Key>
                    <Price>Рассчитай стоимость ремонта прямо сейчас</Price>
                    <Button to={'/'} theme="button">рассчитать стоимость</Button>
                </Text>
            </Wrapper>
        </Container>
    );
};
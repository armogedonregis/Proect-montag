import React from "react";
import styled from "styled-components";
import tw from "twin.macro";
import { Button } from "../button";
import { Wrapper } from "../wrapper";
import Worker from "../../assets/icons/worker.svg";
import Document from "../../assets/icons/document.svg";
import Piggy from "../../assets/icons/piggy_money.svg";
import Shield from "../../assets/icons/shield.svg";
import { StaticImage } from "gatsby-plugin-image";

const Container = styled.div`
${tw`
    relative
    mb-5
    lg:mb-32
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
    lg:top-[6rem]
    text-white
    leading-[25px]
    lg:leading-[50px]
    tracking-wider
`}
`;

const Design = styled.span`
${tw`
    text-base
    lg:text-2xl
    mb-2
`}
`;

const Title = styled.h1`
${tw`
    text-xl
    lg:text-6xl
    font-extrabold
    w-[250px]
    lg:w-full
    mb-2
`};
`;

const Key = styled.p`
${tw`
    text-base
    mb-7
    lg:mb-14
    lg:text-2xl
`}
`;

const PriceContainer = styled.div`
${tw`
    flex
    justify-between
    lg:block
    lg:w-full
    w-screen
    pr-7
    lg:pr-0
`}
`;

const Price = styled.p`
${tw`
    italic
    tracking-[0]
    lg:tracking-wider
    w-[150px]
    lg:w-full
    text-xs
    lg:text-2xl
    lg:mb-14
`}
`;

const Panel = styled.div`
box-shadow: 0px 5px 7px 0px #eaeaea;
left:50%;
transform:translate(-50%);
${tw`
    w-[950px]
    absolute
    -bottom-16
    py-10
    px-10
    rounded-lg
    bg-white
    display[none]
    lg:display[block]
`}
`;

const Block = styled.ul`
${tw`
    flex
    justify-between
`}
`;

const Item = styled.li`
${tw`
    flex
    items-center
`}
`;

const TextItem = styled.span`
${tw`
    ml-4
    text-base
    text-left
`}
`;

export const Hero: React.FC = () => {
    return (
        <Container>
            <ImageContainer>
                <StaticImage 
                    placeholder={"blurred"}
                    src={"../../assets/images/bg/banner.jpg"} 
                    alt={""}
                    layout="fullWidth"
                    quality={100}
                    formats={["auto", "webp", "avif"]}
                />
            </ImageContainer>
            <Wrapper>
                <Text>
                    <Design>Дизайнерский</Design>
                    <Title>Ремонт квартир в Москве и области</Title>
                    <Key>«под ключ»</Key>
                    <PriceContainer>
                        <Price>Рассчитай стоимость ремонта прямо сейчас</Price>
                        <Button to={'/'} theme="button">рассчитать стоимость</Button>
                    </PriceContainer>
                </Text>
                <Panel>
                    <Block>
                        <Item>
                            <Worker fill={'#F6B300'} width={70} height={70} />
                            <TextItem>Персональный<br />прораб</TextItem>
                        </Item>
                        <Item>
                            <Document width={70} height={70} />
                            <TextItem>Работа<br />по договору</TextItem>
                        </Item>
                        <Item>
                            <Piggy fill={'#F6B300'} width={70} height={70} />
                            <TextItem>Оплата<br />по факту</TextItem>
                        </Item>
                        <Item>
                            <Shield fill={'#F6B300'} width={65} height={65} />
                            <TextItem>Гарантия<br />5 лет</TextItem>
                        </Item>
                    </Block>
                </Panel>
            </Wrapper>
        </Container>
    );
};
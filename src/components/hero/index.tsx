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
    md:top-[3rem]
    lg:top-[2rem]
    xl:top-[6rem]
    text-white
    leading-[25px]
    lg:leading-[50px]
    tracking-wider
`}
`;

const Design = styled.span`
${tw`
    text-base
    lg:text-xl
    xl:text-2xl
    mb-2
`}
`;

const Title = styled.h1`
${tw`
    text-xl
    md:text-2xl
    lg:text-4xl
    xl:text-6xl
    font-extrabold
    w-[250px]
    md:w-full
    mb-2
`};
`;

const Key = styled.p`
${tw`
    text-base
    mb-7
    lg:mb-10
    xl:mb-14
    lg:text-xl
    xl:text-2xl
`}
`;

const PriceContainer = styled.div`
${tw`
    flex
    justify-between
    md:block
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
    md:w-full
    text-xs
    xl:text-2xl
    lg:text-xl
    lg:mb-10
    xl:mb-14
    md:mb-7
`}
`;

const Panel = styled.div`
box-shadow: 0px 5px 7px 0px #eaeaea;
left:50%;
transform:translate(-50%);
${tw`
    xl:w-[950px]
    lg:w-[800px]
    absolute
    -bottom-16
    lg:py-5
    xl:py-10
    xl:px-10
    lg:px-5
    rounded-lg
    bg-white
    display[none]
    lg:display[block]
`}
`;

const PanelMd = styled.div`
box-shadow: 0px 5px 7px 0px #eaeaea;
left:50%;
transform:translate(-50%);
${tw`
    w-[550px]
    absolute
    bottom-10
    py-3
    px-2
    rounded-lg
    bg-white
    display[none]
    lg:display[none]
    md:display[block]
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
    lg:ml-4
    md:ml-2
    lg:text-base
    text-xs
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
                        <Button className="w-[133px]" to={'/'} theme="button">рассчитать стоимость</Button>
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
                <PanelMd>
                    <Block>
                        <Item>
                            <Worker fill={'#F6B300'} width={30} height={30} />
                            <TextItem>Персональный<br />прораб</TextItem>
                        </Item>
                        <Item>
                            <Document width={30} height={30} />
                            <TextItem>Работа по договору</TextItem>
                        </Item>
                        <Item>
                            <Piggy fill={'#F6B300'} width={30} height={30} />
                            <TextItem>Оплата по факту</TextItem>
                        </Item>
                        <Item>
                            <Shield fill={'#F6B300'} width={30} height={30} />
                            <TextItem>Гарантия<br />5 лет</TextItem>
                        </Item>
                    </Block>
                </PanelMd>
            </Wrapper>
        </Container>
    );
};
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

const Design = styled.span`
${tw`
    text-2xl
    mb-2
`}
`;

const Title = styled.h1`
${tw`
    text-6xl
    font-extrabold
    mb-2
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

            <StaticImage 
                placeholder={"blurred"}
                src={"../../assets/images/bg/banner.jpg"} 
                alt={""}
                layout="fullWidth"
                quality={100}
                formats={["auto", "webp", "avif"]}
            />
            <Wrapper>
                <Text>
                    <Design>Дизайнерский</Design>
                    <Title>Ремонт квартир в Москве и области</Title>
                    <Key>«под ключ»</Key>
                    <Price>Рассчитай стоимость ремонта прямо сейчас</Price>
                    <Button to={'/'} theme="button">рассчитать стоимость</Button>
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
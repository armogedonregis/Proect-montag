import React, { useState } from "react";
import styled from "styled-components";
import tw from "twin.macro";
import { Button } from "../button";
import { Wrapper } from "../wrapper";
import { StaticImage } from "gatsby-plugin-image";
import Arrow from "../../assets/icons/arr_right.svg";

const Container = styled.section`
${tw`
    text-center
    mb-5
    lg:mb-20
    py-[10px]
    lg:py-[50px]
`}
`;

const Title = styled.h2`
${tw`
    text-xl
    lg:text-4xl
    font-extrabold
    mb-2
    lg:mb-12
`}
`;

const List = styled.ul`
${tw`
    flex 
    justify-between 
    flex-wrap
`}
`;

const Item = styled.li`
box-shadow: 0px 7px 30px 0px #e4e4e4;
${tw`
    my-4
    lg:w-[37.5rem]
`}
`;

const ItemTitle = styled.b<{ hoverText?: boolean }>`
${tw`
    font-black lg:text-xl text-base
`}
${({ hoverText }) => 
hoverText ? tw`text-white mr-5 uppercase font-bold tracking-wider` 
: 
tw`text-accent`
}
`;

const Descr = styled.span`
${tw`
    text-xs
    lg:text-xl
`}
`;

const Content = styled.div<{ hover?: boolean }>`
border-radius: 0 0 5px 5px;
${tw`
    flex 
    flex-col lg:flex-row
    lg:items-center
    items-start
    h-[85px]
`}
${({ hover }) => 
hover ? tw`bg-accent justify-center` : tw`bg-white justify-evenly lg:justify-between px-10`
}
`;


export const Prices: React.FC<{
children?: React.ReactChild;
bg?: any;
}> = ({children, bg}) => {
    
const [active1, setActive1] = useState(false);
const [active2, setActive2] = useState(false);
const [active3, setActive3] = useState(false);
const [active4, setActive4] = useState(false);

    return (
        <Container className={bg}>
            <Wrapper>
                <Title>{children}</Title>
                <List>
                    <Item>
                        <Button onMouseOut={() => setActive1(false)} onMouseOver={() => setActive1(true)} theme="price" to={'/'}>
                            <StaticImage 
                                placeholder={"blurred"}
                                src={"../../assets/images/price_1.jpg"} 
                                alt={""}
                                objectFit={"fill"}
                                style={{
                                    width: '100%',
                                }}
                                quality={100}
                                formats={["auto", "webp", "avif"]}
                            />
                            {!active1 ?
                            <Content>
                                <ItemTitle>Косметический ремонт</ItemTitle>
                                <Descr>от <b>3 000</b> руб/м2</Descr>
                            </Content>
                            :
                            <Content hover>
                                <ItemTitle hoverText>уточнить цену</ItemTitle>
                                <Arrow width={29} />
                            </Content>
                            }
                        </Button>
                    </Item>
                    <Item>
                        <Button onMouseOut={() => setActive2(false)} onMouseOver={() => setActive2(true)} theme="price" to={'/'}>
                        <StaticImage 
                                placeholder={"blurred"}
                                src={"../../assets/images/price_2.jpg"} 
                                alt={""}
                                objectFit={"fill"}
                                style={{
                                    width: '100%',
                                }}
                                quality={100}
                                formats={["auto", "webp", "avif"]}
                            />
                            {!active2 ?
                            <Content>
                                <ItemTitle>Капитальный ремонт</ItemTitle>
                                <Descr>от <b>7 000</b> руб/м2</Descr>
                            </Content>
                            :
                            <Content hover>
                                <ItemTitle hoverText>уточнить цену</ItemTitle>
                                <Arrow width={29} />
                            </Content>
                            }
                        </Button>
                    </Item>
                    <Item>
                        <Button onMouseOut={() => setActive3(false)} onMouseOver={() => setActive3(true)} theme="price" to={'/'}>
                        <StaticImage 
                                placeholder={"blurred"}
                                src={"../../assets/images/price_3.jpg"} 
                                alt={""}
                                objectFit={"fill"}
                                style={{
                                    width: '100%',
                                }}
                                quality={100}
                                formats={["auto", "webp", "avif"]}
                            />
                            {!active3 ?
                            <Content>
                                <ItemTitle>Евроремонт</ItemTitle>
                                <Descr>от <b>8 000</b> руб/м2</Descr>
                            </Content>
                            :
                            <Content hover>
                                <ItemTitle hoverText>уточнить цену</ItemTitle>
                                <Arrow width={29} />
                            </Content>
                            }
                        </Button>
                    </Item>
                    <Item>
                        <Button onMouseOut={() => setActive4(false)} onMouseOver={() => setActive4(true)} theme="price" to={'/'}>
                        <StaticImage 
                                placeholder={"blurred"}
                                src={"../../assets/images/price_4.jpg"} 
                                alt={""}
                                objectFit={"fill"}
                                style={{
                                    width: '100%',
                                }}
                                quality={100}
                                formats={["auto", "webp", "avif"]}
                            />
                            {!active4 ?
                            <Content>
                                <ItemTitle>Элитный ремонт</ItemTitle>
                                <Descr>от <b>12 000</b> руб/м2</Descr>
                            </Content>
                            :
                            <Content hover>
                                <ItemTitle hoverText>уточнить цену</ItemTitle>
                                <Arrow width={29} />
                            </Content>
                            }
                        </Button>
                    </Item>
                </List>
            </Wrapper>
        </Container>
    );
};
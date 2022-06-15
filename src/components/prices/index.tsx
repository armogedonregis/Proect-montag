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
    mb-20
`}
`;

const Title = styled.h2`
${tw`
    text-4xl
    font-extrabold
    mb-12
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
border-radius: 0 0 5px 5px;
${tw`
    my-4
    w-[37.5rem]
`}
`;

const ItemTitle = styled.b<{ hoverText?: boolean }>`
${tw`
    font-black text-xl
`}
${({ hoverText }) => 
hoverText ? tw`text-white mr-5 uppercase font-bold tracking-wider` 
: 
tw`text-accent`
}
`;

const Descr = styled.span`
${tw`
    text-xl
`}
`;

const Content = styled.div<{ hover?: boolean }>`
${tw`
    flex 
    items-center
    h-[85px]
`}
${({ hover }) => 
hover ? tw`bg-accent justify-center` : tw`bg-white justify-around`
}
`;


export const Prices: React.FC<{
children?: React.ReactChild;
}> = ({children}) => {
    
const [active1, setActive1] = useState(false);
const [active2, setActive2] = useState(false);
const [active3, setActive3] = useState(false);
const [active4, setActive4] = useState(false);

    return (
        <Container>
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
                                imgStyle={{
                                    width: '100%',
                                    height: '100%',
                                }}
                                style={{
                                    width: '600px',
                                    height: '356px',
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
                                imgStyle={{
                                    width: '100%',
                                    height: '100%',
                                }}
                                style={{
                                    width: '600px',
                                    height: '356px',
                                }}
                                quality={100}
                                formats={["auto", "webp", "avif"]}
                            />
                            {!active2 ?
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
                        <Button onMouseOut={() => setActive3(false)} onMouseOver={() => setActive3(true)} theme="price" to={'/'}>
                        <StaticImage 
                                placeholder={"blurred"}
                                src={"../../assets/images/price_3.jpg"} 
                                alt={""}
                                objectFit={"fill"}
                                imgStyle={{
                                    width: '100%',
                                    height: '100%',
                                }}
                                style={{
                                    width: '600px',
                                    height: '356px',
                                }}
                                quality={100}
                                formats={["auto", "webp", "avif"]}
                            />
                            {!active3 ?
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
                        <Button onMouseOut={() => setActive4(false)} onMouseOver={() => setActive4(true)} theme="price" to={'/'}>
                        <StaticImage 
                                placeholder={"blurred"}
                                src={"../../assets/images/price_4.jpg"} 
                                alt={""}
                                objectFit={"fill"}
                                imgStyle={{
                                    width: '100%',
                                    height: '100%',
                                }}
                                style={{
                                    width: '600px',
                                    height: '356px',
                                }}
                                quality={100}
                                formats={["auto", "webp", "avif"]}
                            />
                            {!active4 ?
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
                </List>
            </Wrapper>
        </Container>
    );
};
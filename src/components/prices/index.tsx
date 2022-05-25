import React from "react";
import styled from "styled-components";
import tw from "twin.macro";
import price_1 from "../../assets/images/price_1.jpg"
import price_2 from "../../assets/images/price_2.jpg"
import price_3 from "../../assets/images/price_3.jpg"
import price_4 from "../../assets/images/price_4.jpg"
import { Button } from "../button";
import { Wrapper } from "../wrapper";


const Container = styled.section`
${tw`
    text-center
`};
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
    justify-evenly 
    flex-wrap
`}
`;

const Item = styled.li`
${tw`

`}
`;

const ItemTitle = styled.b`
${tw`
    font-black text-xl text-accent
`}
`;

const Descr = styled.span`
${tw`

`}
`;

const Content = styled.div`
${tw`
    flex flex-row justify-around
`}
`;


export const Prices: React.FC<{
children?: React.ReactChild;
}> = ({children}) => {
    return (
        <Container>
            <Wrapper>
            <Title>{children}</Title>
            <List>
                <Item>
                    <Button theme="price" to={'/'}>
                        <img src={price_1} alt="" />
                        <Content>
                            <ItemTitle>Косметический ремонт</ItemTitle>
                            <Descr>от <b>3 000</b> руб/м2</Descr>
                        </Content>
                    </Button>
                </Item>
                <Item>
                    <Button theme="price" to={'/'}>
                        <img src={price_2} alt="" />
                        <Content>
                            <ItemTitle>Косметический ремонт</ItemTitle>
                            <Descr>от <b>3 000</b> руб/м2</Descr>
                        </Content>
                    </Button>
                </Item>
                <Item>
                    <Button theme="price" to={'/'}>
                        <img src={price_3} alt="" />
                        <Content>
                            <ItemTitle>Косметический ремонт</ItemTitle>
                            <Descr>от 3 000 руб/м2</Descr>
                        </Content>
                    </Button>
                </Item>
                <Item>
                    <Button theme="price" to={'/'}>
                        <img src={price_4} alt="" />
                        <Content>
                            <ItemTitle>Косметический ремонт</ItemTitle>
                            <Descr>от 3 000 руб/м2</Descr>
                        </Content>
                    </Button>
                </Item>
            </List>
            </Wrapper>
        </Container>
    );
};
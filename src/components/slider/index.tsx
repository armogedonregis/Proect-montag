import React from "react";
import styled from "styled-components";
import tw from "twin.macro";
import { Button } from "../button";
import { Wrapper } from "../wrapper";


const Container = styled.section`
${tw`
    text-center
    w-full
`};
`;

const Title = styled.h2`
${tw`
`};
`;

const Content = styled.div`
${tw`
`};
`;

const TextContainer = styled.div`
${tw`
`};
`;

const Name = styled.h3`
${tw`
`};
`;

const Description = styled.span`
${tw`
`};
`;

const Price = styled.div`
${tw`
`};
`;

const ImageContainer = styled.div`
${tw`
`};
`;

const Pagination = styled.div`
${tw`
`};
`;

export const Slider: React.FC = () => {
    return (
        <Container>
            <Wrapper>
                <Title>Наши работы</Title>
                <Content>
                    <TextContainer>
                        <Name></Name>
                        <Description></Description>
                        <Price></Price>
                        <Button to={'/'} theme="button">подробнее</Button>
                    </TextContainer>
                    <ImageContainer>
                        <Pagination></Pagination>
                    </ImageContainer>
                </Content>
            </Wrapper>
        </Container>
    );
};
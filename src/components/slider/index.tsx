import React from "react";
import styled from "styled-components";
import tw from "twin.macro";
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

export const Slider: React.FC = () => {
    return (
        <Container>
            <Wrapper>
                <Title>Наши работы</Title>
            </Wrapper>
        </Container>
    );
};
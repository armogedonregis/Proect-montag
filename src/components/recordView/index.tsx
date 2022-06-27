import React from "react";
import styled from "styled-components";
import tw from "twin.macro";
import { Button } from "../button";
import { Wrapper } from "../wrapper";

const Container = styled.section`
  ${tw`
  mb-5
  bg-bgWhite
  lg:py-[45px]
  py-[30px]
  w-screen
  lg:mb-20
  mx-auto
  `};
`;

const FlexContainer = styled.div`
${tw`
    lg:flex lg:justify-between
    lg:items-center
`}
`;

const Text = styled.p`
${tw`
    lg:w-1/2
    lg:pr-[15px]
    lg:font-normal
    font-light
    lg:text-xl
    text-sm
    leading-[23px]
    lg:leading-[31px]
    italic
    mb-3
    lg:mb-0
`}
`;

export const RecordView: React.FC = () => {
    return (
        <Container>
            <Wrapper>
                <FlexContainer>
                    <Text>Если у Вас есть сомнения, Вы можете лично посетить объект, 
                        который находится в процессе ремонта, и убедиться лично 
                        в нашей компетентности</Text>
                    <Button theme="button" to={'/'}>записаться на просмотр</Button>
                </FlexContainer>
            </Wrapper>
        </Container>
    );
};
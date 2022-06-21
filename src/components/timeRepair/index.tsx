import React from "react";
import styled from "styled-components";
import tw from "twin.macro";
import { Wrapper } from "../wrapper";

const Container = styled.section`
  ${tw`
  mb-20
  bg-bgWhite-gray
  py-[30px]
  `};
`;

const Title = styled.h2`
  ${tw`
  text-center font-extrabold text-[40px] mb-10
  `};
`;

const List = styled.ul`
${tw`
    flex
    justify-evenly
`}
`;

const Item = styled.li`
${tw`
    flex
    flex-col
    text-xl
    text-center
`}
`;

const Metr = styled.b`
${tw`
    text-accent
    text-3xl
    font-extrabold
    mb-3
`}
`;

export const TimeRepair: React.FC<{
    TimeTitle: any;
    TextMetr1: any;
    TextMetr2: any;
    TextMetr3: any;
    TextMetr4: any;
    TimeMetr1: any;
    TimeMetr2: any;
    TimeMetr3: any;
    TimeMetr4: any;
}> = ({TimeTitle, TimeMetr1, TimeMetr2, TimeMetr3, TimeMetr4, 
    TextMetr1, TextMetr2, TextMetr3, TextMetr4
}) => {
    return (
        <Container>
            <Wrapper>
                    <Title>{TimeTitle}</Title>
                    <List>
                        <Item><Metr>{TimeMetr1}</Metr>{TextMetr1}</Item>
                        <Item><Metr>{TimeMetr2}</Metr>{TextMetr2}</Item>
                        <Item><Metr>{TimeMetr3}</Metr>{TextMetr3}</Item>
                        <Item><Metr>{TimeMetr4}</Metr>{TextMetr4}</Item>
                    </List>
            </Wrapper>
        </Container>
    );
};
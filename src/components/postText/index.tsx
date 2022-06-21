import React from "react";
import styled from "styled-components";
import tw from "twin.macro";
import { Wrapper } from "../wrapper";

const Container = styled.section`
  ${tw`
  mb-20
  mx-auto
  `};
`;

const Text = styled.p`
${tw`
    text-sm
    mb-10
`}
`;

const Title = styled.h3`
${tw`
    mb-4
    font-black
    text-xl
`}
`;


const List = styled.ul`
${tw`
    mb-10
`}
`;

const Item = styled.li`
${tw`
    list-disc
    text-sm
    ml-5
    mb-2
`}
`;

export const PostText: React.FC<{
    PreTitle?: any;
    TitleOne?: any;
    DescrTitle?: any;
    FeaturesTitle?: any;
    FeaturesPreDescr?: any;
    FeaturesItem?: any;
    FeaturesPostDescr?: any;
}> = ({
    PreTitle, TitleOne, DescrTitle, FeaturesTitle, 
    FeaturesPreDescr, FeaturesItem, FeaturesPostDescr
}) => {
    return (
        <Container>
            <Wrapper>
                <Text>{PreTitle}</Text>
                <Title>{TitleOne}</Title>
                <Text>{DescrTitle}</Text>
                <Title>{FeaturesTitle}</Title>
                <Text>{FeaturesPreDescr}</Text>
                <List>
                    {FeaturesItem?.map(x => {
                        return (
                            <Item key={+new Date() + Math.random()}>{x}</Item>
                        )
                    })}
                </List>
                <Text>{FeaturesPostDescr}</Text>
            </Wrapper>
        </Container>
    );
};
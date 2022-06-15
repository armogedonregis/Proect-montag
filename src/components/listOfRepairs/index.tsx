import { StaticImage } from "gatsby-plugin-image";
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

const Title = styled.h2`
${tw`
    text-center font-extrabold text-[40px] mb-16
`}
`;

const Content = styled.div`
:not(:first-child) {border-top: 3px solid #ededed; }
${tw`
    flex
    justify-between
    items-baseline
`}
`;

const TextContainer = styled.div`
${tw`
    
`}
`;

const TextTitle = styled.h3`
${tw`
    font-extrabold text-3xl mb-5 pt-5
`}
`;

const List = styled.ul`
${tw`
    mb-10
`}
`;

const Item = styled.li`
${tw`
    font-light text-xl mb-4 ml-7
    list-disc
    marker:text-accent
`}
`;

const ImgContainer = styled.div`
${tw`
`}
`;

export const ListOff: React.FC<{
    item: any;
    ItemsTitle: any;
}> = ({ item, ItemsTitle }) => {
    return (
                <Content>
                    <TextContainer>
                        <TextTitle>{ItemsTitle}</TextTitle>
                            <List>
                        {item.map(x => {
                            return (
                                <Item key={+new Date() + Math.random()}>{x}</Item>
                                
                            )
                        })}
                        </List>
                    </TextContainer>
                    <ImgContainer>
                        <StaticImage 
                            placeholder={"blurred"}
                            src={"../../assets/images/perechen_img1.jpg"} 
                            alt={""}
                            quality={100}
                            formats={["auto", "webp", "avif"]}
                        />
                    </ImgContainer>
                </Content>
    )
}

export const ListOfRepairs: React.FC<{
    Items: any;
}> = ({Items}) => {

    return (
        <Wrapper>
            <Container>
                <Title>Перечень ремонтных работ</Title>
                {Items.map((item, ItemsTitle) => {
                    return (
                        <ListOff key={+new Date() + Math.random()} {...item} {...ItemsTitle} />
                    )
                })
                }
            </Container>
        </Wrapper>
    );
};
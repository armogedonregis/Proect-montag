import React from "react";
import styled from "styled-components";
import tw from "twin.macro";
import { Wrapper } from "../wrapper";
import Check from "../../assets/icons/check.svg";
import { StaticImage } from "gatsby-plugin-image";

const Container = styled.section`
  ${tw`
  mb-[150px]
  mx-auto
  relative
  `};
`;

const Text = styled.p`
opacity: 0.99;
${tw`
    z-10
    text-xl
    font-normal
    mb-10
`}
`;

const Title = styled.h3`
  ${tw`
  text-left font-extrabold text-3xl mb-6 
  `};
`;

const List = styled.ul`
${tw`
  
`}
`;

const Item = styled.li`
${tw`
    flex
    text-xl
    font-medium
    mb-1
`}
`;

const Descr = styled.span`
${tw`
    ml-6
`}
`;

export const Dogovor: React.FC = () => {
    return (
        <Wrapper>
            <Container>
                <StaticImage 
                    placeholder={"blurred"}
                    src={"../../assets/images/dogovor.jpg"} 
                    alt={""}
                    style={{
                        position: 'absolute',
                        right: '-7px',
                        top: '31px',
                    }}
                    quality={100}
                    formats={["auto", "webp", "avif"]}
                />
                <Text>
                Есть идеи, но Вы не знаете как их реализовать?<br />
                Тогда Вы обратились по адресу: наши узкопрофильные бригады<br />
                готовы создать дом Вашей мечты вместе с Вами без головной боли
                </Text>
                <Title>Обязуемся соблюдать:</Title>
                <List>
                    <Item><Check width={30} height={30} /><Descr>технологии ремонта;</Descr></Item>
                    <Item><Check width={30} height={30} /><Descr>сроки, прописанные в договоре;</Descr></Item>
                    <Item><Check width={30} height={30} /><Descr>стоимость, указанную в договоре;</Descr></Item>
                    <Item><Check width={30} height={30} /><Descr>гарантийные условия.</Descr></Item>
                </List>
            </Container>
        </Wrapper>
    );
};
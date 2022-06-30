import React from "react";
import styled from "styled-components";
import tw from "twin.macro";
import { Wrapper } from "../wrapper";
import Check from "../../assets/icons/check.svg";
import { StaticImage } from "gatsby-plugin-image";

const Container = styled.section`
  ${tw`
  lg:mb-[150px]
  mb-10
  mx-auto
  relative
  `};
`;

const Text = styled.p`
opacity: 0.99;
${tw`
    z-10
    lg:text-xl
    text-sm
    lg:font-normal
    font-light
    lg:mb-10
    mb-5
`}
`;

const Title = styled.h3`
  ${tw`
  text-left 
  font-extrabold 
  lg:text-3xl 
  text-xl
  mb-6 
  `};
`;

const List = styled.ul`
${tw`
  
`}
`;

const Item = styled.li`
${tw`
    flex
    lg:text-xl
    text-sm
    font-medium
    mb-1
`}
`;

const Descr = styled.span`
${tw`
    ml-6
`}
`;

const ImageDesc = styled.div`
${tw`
    display[none]
    lg:block
`}
`;

const ImageMob = styled.div`
${tw`
    lg:display[none]
`}
`;

export const Dogovor: React.FC = () => {
    return (
        <Wrapper>
            <Container>
                <ImageDesc>
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
                </ImageDesc>
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
                <ImageMob>
                    <StaticImage 
                        placeholder={"blurred"}
                        src={"../../assets/images/dogovor_mob.jpg"} 
                        alt={""}
                        quality={100}
                        formats={["auto", "webp", "avif"]}
                    />
                </ImageMob>
            </Container>
        </Wrapper>
    );
};
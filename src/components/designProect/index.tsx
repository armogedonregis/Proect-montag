import { StaticImage } from "gatsby-plugin-image";
import React from "react";
import styled from "styled-components";
import tw from "twin.macro";
import { Wrapper } from "../wrapper";

const Container = styled.section`
  ${tw`
  mt-32
  mb-20
  mx-auto
  `};
`;

const Title = styled.h2`
  ${tw`
  text-center font-extrabold text-4xl mb-10
  `};
`;

const TextContainer = styled.div`
box-shadow: -9px 7px 25px -6px #eaeaea;
${tw`
    absolute
    p-[60px 70px]
    bg-white
    w-[425px]
    z-20
`}
`;

const Descr = styled.p`
  ${tw`
  w-10/12
  mx-auto
  text-justify
  text-xl 
  font-light
  leading-8
  `};
`;

export const DesignProect: React.FC = () => {
    return (
        <Wrapper>
            <Container>
                <Title>Дизайн-проект</Title>
                <TextContainer>
                    <Descr>
                        В настоящее время на рынке существует множество компаний, предлагающих свои услуги по современному дизайну интерьера. Компания Проект Монтаж уже более 10 лет занимается разработкой дизайна квартир и загородных домов в Москве и Московской области. Чем мы выгодно выделяемся среди своих конкурентов.
                    </Descr>
                </TextContainer>
                    <StaticImage 
                        placeholder={"blurred"}
                        src={"../../assets/images/design_proect.jpg"} 
                        alt={""}
                        style={{
                            width: '100%',
                            position: 'relative',
                        }}
                        quality={100}
                        formats={["auto", "webp", "avif"]}
                    />
            </Container>
        </Wrapper>
    );
};
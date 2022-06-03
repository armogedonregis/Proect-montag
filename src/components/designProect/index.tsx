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
  text-center font-extrabold text-4xl mb-10
  `};
`;

const TextContainer = styled.div`
${tw`
    relative
    text-right
    mr-10
`}
`;

const Descr = styled.p`
box-shadow: -9px 7px 25px -6px #eaeaea;
  ${tw`
  absolute
  p-[50px 90px]
  w-[600px]
  text-left
  top-[4.5rem]
  bg-white
  z-20
  mx-auto
  text-xl 
  leading-[30px]
  font-light
  `};
`;

export const DesignProect: React.FC = () => {
    return (
        <Wrapper>
            <Container>
                <Title>Дизайн-проект</Title>
                    <TextContainer>
                        <StaticImage 
                            placeholder={"blurred"}
                            src={"../../assets/images/design_proect.jpg"} 
                            alt={""}
                            quality={100}
                            formats={["auto", "webp", "avif"]}
                        />
                    <Descr>
                        В настоящее время на рынке существует множество компаний, предлагающих свои услуги по современному дизайну интерьера. Компания Проект Монтаж уже более 10 лет занимается разработкой дизайна квартир и загородных домов в Москве и Московской области. Чем мы выгодно выделяемся среди своих конкурентов.
                    </Descr>
                    </TextContainer>
            </Container>
        </Wrapper>
    );
};
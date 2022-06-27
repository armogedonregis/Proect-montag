import { StaticImage } from "gatsby-plugin-image";
import React from "react";
import styled from "styled-components";
import tw from "twin.macro";
import { Wrapper } from "../wrapper";

const Container = styled.div`
    border-top: 3px solid #ededed;
    border-bottom: 3px solid #ededed;
    padding: 10px 0 30px;
  ${tw`
  mb-5
  lg:mb-20
  mx-auto
  `};
`;

const Title = styled.h2`
  ${tw`
  md:text-center font-extrabold lg:text-[40px] lg:my-[35px]
  text-xl text-left mb-3.5
  lg:leading-[54px]
  leading-[30px]
  m-[10px 0 20px]
  md:text-3xl
  md:leading-[40px]
  `};
`;

const MobImage = styled.div`
${tw`
    block
    md:display[none]
`}
`;

const DeskImage = styled.div`
${tw`
    display[none]
    md:block
`}
`;

export const Experience: React.FC = () => {
    return (
        <Wrapper>
            <Container>
                <Title>У нас есть опыт<br /> проведения ремонта в новостройках</Title> 
                <MobImage>
                    <StaticImage 
                        placeholder={"blurred"}
                        src={"../../assets/images/mob_logo_partners.gif"} 
                        alt={""}
                        quality={100}
                        formats={["auto", "webp", "avif"]}
                    />
                </MobImage>
                <DeskImage>
                    <StaticImage 
                    placeholder={"blurred"}
                    src={"../../assets/images/logo_partners.gif"} 
                    alt={""}
                    quality={100}
                    formats={["auto", "webp", "avif"]}
                />
                </DeskImage>
            </Container>
        </Wrapper>
    );
};
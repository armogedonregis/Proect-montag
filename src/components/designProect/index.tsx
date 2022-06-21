import { StaticImage } from "gatsby-plugin-image";
import React from "react";
import styled from "styled-components";
import tw from "twin.macro";
import { Wrapper } from "../wrapper";

const Container = styled.section`
  ${tw`
  mb-32
  mx-auto
  `};
`;

const Title = styled.h2`
  ${tw`
  text-center font-extrabold text-[40px] mb-10
  px-5
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
  w-[700px]
  text-left
  top-[2rem]
  bg-white
  z-20
  mx-auto
  text-xl 
  leading-[30px]
  font-light
  `};
`;

export const DesignProect: React.FC<{
    TitleDesign: any;
    DescrDesign: any;
}> = ({ TitleDesign, DescrDesign }) => {
    return (
        <Wrapper>
            <Container>
                <Title>
                    {TitleDesign}
                </Title>
                <TextContainer>
                    <StaticImage 
                        placeholder={"blurred"}
                        src={"../../assets/images/design_proect.jpg"} 
                        alt={""}
                        quality={100}
                        formats={["auto", "webp", "avif"]}
                    />
                    <Descr>
                        {DescrDesign}
                    </Descr>
                </TextContainer>
            </Container>
        </Wrapper>
    );
};
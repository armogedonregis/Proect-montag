import { StaticImage } from "gatsby-plugin-image";
import React from "react";
import styled from "styled-components";
import tw from "twin.macro";
import { Wrapper } from "../wrapper";

const Container = styled.section`
  ${tw`
  lg:mb-32
  mb-10
  mx-auto
  `};
`;

const Title = styled.h2`
  ${tw`
  text-left font-extrabold lg:text-[40px] lg:mb-10
  mb-5
  text-xl
  lg:text-center
  lg:leading-[50px]
  lg:px-5
  `};
`;

const TextContainer = styled.div`
${tw`
    lg:relative
    lg:text-right
    lg:mr-10
`}
`;

const Descr = styled.p`
box-shadow: -9px 7px 25px -6px #eaeaea;
  ${tw`
  lg:absolute
  lg:p-[50px 90px]
  lg:w-[700px]
  w-auto
  p-[15px]
  text-left
  lg:top-[2rem]
  bg-white
  z-20
  mx-auto
  lg:text-xl 
  text-xs
  lg:leading-[30px]
  leading-[18px]
  font-light
  `};
`;

export const BgDesign: React.FC<{
    theme?: string;
  }> = ({ theme = "bgcap" }) => {
    if (theme === "bgdesign") {
    return <StaticImage 
        placeholder={"blurred"}
        src={"../../assets/images/design_proect.jpg"} 
        alt={""}
        quality={100}
        formats={["auto", "webp", "avif"]}
        />;
    }
    return <StaticImage 
        placeholder={"blurred"}
        src={"../../assets/images/kapremont_img.jpg"} 
        alt={""}
        quality={100}
        formats={["auto", "webp", "avif"]}
    />;
  };

export const DesignProect: React.FC<{
    TitleDesign: any;
    DescrDesign: any;
    photo?: any;
}> = ({ TitleDesign, DescrDesign, photo }) => {
    return (
        <Wrapper>
            <Container>
                <Title>
                    {TitleDesign}
                </Title>
                <TextContainer>
                    <BgDesign theme={photo} />
                    <Descr>
                        {DescrDesign}
                    </Descr>
                </TextContainer>
            </Container>
        </Wrapper>
    );
};
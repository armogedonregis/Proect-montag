import { StaticImage } from "gatsby-plugin-image";
import React from "react";
import styled from "styled-components";
import tw from "twin.macro";
import { Wrapper } from "../wrapper";

const Container = styled.section`
${tw`
  lg:mb-20
  mb-10
`}
`;

const Title = styled.h2`
  ${tw`
    lg:px-[13rem]
    lg:text-[40px]
    lg:leading-[53px]
    text-xl
    lg:text-center
    text-left
    font-extrabold
    lg:mb-10 mb-5
`}
`;

const CardContainer = styled.div`
  ${tw`
  flex
  flex-col lg:flex-row
  lg:justify-between
  `}
`;

const Card = styled.div`
${tw`
  m-[15px]
`}
`;

const CardTitle = styled.h3`
${tw`
  lg:text-xl
  text-sm
  lg:text-center
  text-left
  lg:font-extrabold font-black
  lg:mb-[25px] mb-2.5
`}
`;

export const Technology: React.FC = () => {
    return (
      <Container>
        <Wrapper>
            <Title>Технологии на конкретных примерах с наших объектов</Title>
            <CardContainer>
              <Card>
                <CardTitle>Кладка перегородок</CardTitle>
                <StaticImage 
                  placeholder={"blurred"}
                  src={"../../assets/images/tech_img_1.jpg"}
                  alt={""}
                  quality={100}
                  formats={["auto", "webp", "avif"]}
                />
              </Card>
              <Card>
                <CardTitle>Электромонтажные работы</CardTitle>
                <StaticImage 
                  placeholder={"blurred"}
                  src={"../../assets/images/tech_img_2.jpg"}
                  alt={""}
                  quality={100}
                  formats={["auto", "webp", "avif"]}
                />
              </Card>
            </CardContainer>
        </Wrapper>
      </Container>
    );
};
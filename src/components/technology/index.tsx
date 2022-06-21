import { StaticImage } from "gatsby-plugin-image";
import React from "react";
import styled from "styled-components";
import tw from "twin.macro";
import { Wrapper } from "../wrapper";

const Container = styled.section`
${tw`
  mb-20
`}
`;

const Title = styled.h2`
  ${tw`
    px-[13rem]
    text-[40px]
    text-center
    font-extrabold
    mb-10
`}
`;

const CardContainer = styled.div`
  ${tw`
  flex
  justify-between
  `}
`;

const Card = styled.div`
${tw`
  m-[15px]
`}
`;

const CardTitle = styled.h3`
${tw`
  text-xl
  text-center
  font-extrabold
  mb-[25px]
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
import React from "react";
import styled from "styled-components";
import tw from "twin.macro";
import { Wrapper } from "../wrapper";
import Img1 from "../../assets/images/card_price_1.jpg";
import Img2 from "../../assets/images/card_price_2.jpg";
import Img3 from "../../assets/images/card_price_3.jpg";
import ImageGallery from "react-image-gallery";
import "react-image-gallery/styles/css/image-gallery.css";

const Container = styled.section`
${tw`
    text-center
    w-full
`};
`;

const Title = styled.h2`
${tw`
`};
`;

const images = [
    {
      original: 'https://picsum.photos/id/1018/1000/600/',
      thumbnail: 'https://picsum.photos/id/1018/250/150/',
    },
    {
      original: 'https://picsum.photos/id/1015/1000/600/',
      thumbnail: 'https://picsum.photos/id/1015/250/150/',
    },
    {
      original: 'https://picsum.photos/id/1019/1000/600/',
      thumbnail: 'https://picsum.photos/id/1019/250/150/',
    },
  ];

export const Slider: React.FC = () => {
    return (
        <Container>
            <Wrapper>
                <Title>Наши работы</Title>
                <ImageGallery items={images} />
            </Wrapper>
        </Container>
    );
};
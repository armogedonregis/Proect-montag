import { StaticImage } from "gatsby-plugin-image";
import React from "react";
import styled from "styled-components";
import tw from "twin.macro";
import { Wrapper } from "../wrapper";

const Container = styled.section`
  ${tw`
  lg:mb-20
  mb-10
  mx-auto
  `};
`;

const Title = styled.h2`
${tw`
    lg:text-center 
    text-left
    font-extrabold 
    lg:text-[40px] 
    text-xl
    md:text-2xl
    lg:mb-16
    mb-4
`}
`;

const Content = styled.div`
border-top: 3px solid #ededed;
${tw`
    flex
    lg:justify-between
    lg:flex-row
    lg:items-baseline
    flex-col
    mb-5 lg:mb-[initial]
`}
`;

const TextContainer = styled.div`
${tw`
    lg:w-[20.5rem]
`}
`;

const TextTitle = styled.h3`
${tw`
    font-extrabold lg:text-3xl lg:mb-5 lg:pt-5
    mb-2 pt-3 text-base md:text-xl
`}
`;

const List = styled.ul`
${tw`
    lg:mb-10
    mb-5
`}
`;

const Item = styled.li`
${tw`
    font-light text-xs lg:text-xl mb-1 lg:mb-4 ml-7
    list-disc md:text-base
    marker:text-accent
    marker:text-base
`}
`;

const ImgDesc = styled.div`
${tw`
    display[none]
    md:block
`}
`;

const ImgMobile = styled.div`
${tw`
    md:display[none]
`}
`;

export const ImageListRepair: React.FC<{
num?: Number;
}> = ({num}) => {
    if (num === 1) {
        return (
            <>
            <ImgDesc>
                <StaticImage 
                    placeholder={"blurred"}
                    src={"../../assets/images/perechen_img1.jpg"} 
                    alt={""}
                    style={{
                        width: '100%',
                        height: '100%',
                    }}
                    quality={100}
                    formats={["auto", "webp", "avif"]}
                />
            </ImgDesc>
            <ImgMobile>
                <StaticImage 
                    placeholder={"blurred"}
                    src={"../../assets/images/mob_perechen_img1.jpg"} 
                    alt={""}
                    style={{
                        width: '100%',
                        height: '100%',
                    }}
                    quality={100}
                    formats={["auto", "webp", "avif"]}
                />
            </ImgMobile>
            </>
        )
    }
    if (num === 2) {
        return (
            <>
            <ImgDesc>
                <StaticImage 
                    placeholder={"blurred"}
                    src={"../../assets/images/perechen_img2.jpg"} 
                    alt={""}
                    style={{
                        width: '100%',
                        height: '100%',
                    }}
                    quality={100}
                    formats={["auto", "webp", "avif"]}
                />
            </ImgDesc>
            <ImgMobile>
                <StaticImage 
                    placeholder={"blurred"}
                    src={"../../assets/images/mob_perechen_img2.jpg"} 
                    alt={""}
                    style={{
                        width: '100%',
                        height: '100%',
                    }}
                    quality={100}
                    formats={["auto", "webp", "avif"]}
                />
            </ImgMobile>
            </>
        )
    }
    if (num === 3) {
        return (
            <>
            <ImgDesc>
                <StaticImage 
                    placeholder={"blurred"}
                    src={"../../assets/images/perechen_img3.jpg"} 
                    alt={""}
                    style={{
                        width: '100%',
                        height: '100%',
                    }}
                    quality={100}
                    formats={["auto", "webp", "avif"]}
                />
            </ImgDesc>
            <ImgMobile>
                <StaticImage 
                    placeholder={"blurred"}
                    src={"../../assets/images/mob_perechen_img3.jpg"} 
                    alt={""}
                    style={{
                        width: '100%',
                        height: '100%',
                    }}
                    quality={100}
                    formats={["auto", "webp", "avif"]}
                />
            </ImgMobile>
            </>
        )
    }
    if (num === 4) {
        return (
            <>
            <ImgDesc>
                <StaticImage 
                    placeholder={"blurred"}
                    src={"../../assets/images/perechen_img4.jpg"} 
                    alt={""}
                    style={{
                        width: '100%',
                        height: '100%',
                    }}
                    quality={100}
                    formats={["auto", "webp", "avif"]}
                />
            </ImgDesc>
            <ImgMobile>
                <StaticImage 
                    placeholder={"blurred"}
                    src={"../../assets/images/mob_perechen_img4.jpg"} 
                    alt={""}
                    style={{
                        width: '100%',
                        height: '100%',
                    }}
                    quality={100}
                    formats={["auto", "webp", "avif"]}
                />
            </ImgMobile>
            </>
        )
    }
    if (num === 5) {
        return (
            <>
            <ImgDesc>
                <StaticImage 
                    placeholder={"blurred"}
                    src={"../../assets/images/perechen_img5.jpg"} 
                    alt={""}
                    style={{
                        width: '100%',
                        height: '100%',
                    }}
                    quality={100}
                    formats={["auto", "webp", "avif"]}
                />
            </ImgDesc>
            <ImgMobile>
                <StaticImage 
                    placeholder={"blurred"}
                    src={"../../assets/images/mob_perechen_img5.jpg"} 
                    alt={""}
                    style={{
                        width: '100%',
                        height: '100%',
                    }}
                    quality={100}
                    formats={["auto", "webp", "avif"]}
                />
            </ImgMobile>
            </>
        )
    }
};

export const ListOff: React.FC<{
    item: any;
    ItemsTitle: any;
    nums: any;
}> = ({ item, ItemsTitle, nums }) => {
    return (
                <Content>
                    <TextContainer>
                        <TextTitle>{ItemsTitle}</TextTitle>
                            <List>
                        {item.map(x => {
                            return (
                                <Item key={+new Date() + Math.random()}>{x}</Item>
                                
                            )
                        })}
                        </List>
                    </TextContainer>
                        <ImageListRepair num={nums}  />
                </Content>
    )
};

export const ListOfRepairs: React.FC<{
    Items: any;
}> = ({Items}) => {
let i = 1;
    return (
        <Wrapper>
            <Container>
                <Title>???????????????? ?????????????????? ??????????</Title>
                {Items.map((product, id) => {
                    return (
                        <ListOff key={+new Date() + Math.random()} nums={id + 1} {...product} />
                    )
                })
                }
            </Container>
        </Wrapper>
    );
};
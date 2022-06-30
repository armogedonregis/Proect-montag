import { StaticImage } from "gatsby-plugin-image";
import React from "react";
import styled from "styled-components";
import tw from "twin.macro";

const Container = styled.div`
${tw`
    
`};
`;


export const ProcItem: React.FC = () => {
    const item = [1, 2, 3, 4, 5, 6];
    return (
        <Container>
            {item.map(x => {
                return (
                    <StaticImage 
                        placeholder={"blurred"}
                        src={`../../assets/images/protsess/block_1/img_${x}.jpg`} 
                        alt={""}
                        quality={100}
                        formats={["auto", "webp", "avif"]}
                    />
                )
            })}
        </Container>
    );
};
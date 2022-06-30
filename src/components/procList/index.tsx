import React from "react";
import styled from "styled-components";
import tw from "twin.macro";
import { ProcItem } from "../procItem";

const Container = styled.div`
${tw`
    
`};
`;


export const ProcList: React.FC = () => {
    return (
        <Container>
            <ProcItem />
        </Container>
    );
};
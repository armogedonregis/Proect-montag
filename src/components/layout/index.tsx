import React from "react";
import styled from "styled-components";
import tw from "twin.macro";
import { Footer } from "../footer";
import { Header } from "../header";
import { Navbar } from "../navbar";
import { Wrapper } from "../wrapper";

type LayoutProps = {
  children: React.ReactNode;
};

const PageContainer = styled.div`
  ${tw`
    flex
    flex-col
    text-primary
    items-center
    w-full
  `}
`;

const Mains = styled.main`
${tw`
  w-full
  overflow-x-hidden
`}
`;

export default function Layout({
  children,
}: LayoutProps) {
  return (
    <PageContainer>
      <Header />
      <Navbar />
      <Mains>
        {children}
      </Mains>
      <Footer />
    </PageContainer>
  );
}

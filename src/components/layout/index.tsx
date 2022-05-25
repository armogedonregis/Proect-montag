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
    w-full
    text-primary
    h-full
    items-center
  `}
`;

export default function Layout({
  children,
}: LayoutProps) {
  return (
    <PageContainer>
      <Wrapper>
        <Header />
      </Wrapper>
      <Navbar />
        <main>
          {children}
        </main>
      <Footer />
    </PageContainer>
  );
};

import React from 'react';
import styled from 'styled-components';
import tw from 'twin.macro';
import Layout from '../components/layout';
import { Prices } from '../components/prices';
import { Questions } from '../components/questions';
import { Wrapper } from '../components/wrapper';

const Container = styled.section`
${tw`
  
`}
`;

const TitleContainer = styled.div`
${tw`
  bg-bgWhite-gray
  w-screen
`}
`;

const Title = styled.h1`
${tw`
  lg:leading-[66px]
  lg:text-[50px]
  lg:tracking-wider
  mb-6
  font-extrabold
`}
`;

const Descr = styled.p`
${tw`
  lg:leading-[31px]
  lg:text-xl
  font-normal
  lg:-mb-20
`}
`;

export default function Remont() {
  return (
    <Layout>
      <TitleContainer>
        <Wrapper>
          <Title>Виды ремонта под ключ</Title>
          <Descr>Выполняем ремонтные работы в новостройках и вторичном жилье в москве и области. Начало работ на следующий день после подписания договора.</Descr>
        </Wrapper>
          <Prices />
      </TitleContainer>
      <Questions pag={true} centr={true} TitleQ={"Долговечный ремонт без забот"} TitleP={"Вам не придется уделять много времени ремонту. Руководитель проекта самостоятельно контролирует весь процесс ремонта, еженедельно отправляет фото/видео отчет, все работы выполняются согласно утверждённому графику и стоимости, прописанным в договоре."}  />
    </Layout>
  );
}
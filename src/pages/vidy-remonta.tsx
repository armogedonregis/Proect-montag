import React from 'react';
import styled from 'styled-components';
import tw from 'twin.macro';
import { Button } from '../components/button';
import Layout from '../components/layout';
import { Prices } from '../components/prices';
import { Questions } from '../components/questions';
import { Wrapper } from '../components/wrapper';

const TitleContainer = styled.div`
${tw`
  bg-bgWhite-gray
  w-screen
  relative
`}
`;

const Title = styled.h1`
${tw`
  lg:leading-[66px]
  lg:text-[50px]
  lg:tracking-wider
  lg:pt-16
  pt-10
  mb-2
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
          <div className="absolute top-[5px] lg:top-[20px]">
            <Button theme="navigate" to={'/'}>Главная</Button>
            <span className="text-xs lg:text-sm text-primary"> / </span>
            <span className="text-xs lg:text-sm text-primary">Виды ремонта</span>
          </div>
          <Title>Виды ремонта под ключ</Title>
          <Descr>Выполняем ремонтные работы в новостройках и вторичном жилье в москве и области. Начало работ на следующий день после подписания договора.</Descr>
        </Wrapper>
          <Prices />
      </TitleContainer>
      <Questions pag={true} centr={true} TitleQ={"Долговечный ремонт без забот"} TitleP={"Вам не придется уделять много времени ремонту. Руководитель проекта самостоятельно контролирует весь процесс ремонта, еженедельно отправляет фото/видео отчет, все работы выполняются согласно утверждённому графику и стоимости, прописанным в договоре."}  />
    </Layout>
  );
}
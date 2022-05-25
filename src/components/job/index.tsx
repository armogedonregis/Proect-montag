import React from "react";
import styled from "styled-components";
import tw from "twin.macro";
import { Wrapper } from "../wrapper";

const Jobs = styled.section`
  ${tw`
  mt-32
  mb-20
  mx-auto
  `};
`;

const Title = styled.h2`
  ${tw`
  text-center font-extrabold text-4xl mb-10
  `};
`;

const Descr = styled.p`
  ${tw`
  w-10/12
  mx-auto
  text-justify
  text-xl 
  font-light
  leading-8
  `};
`;

export const Job: React.FC = () => {
    return (
        <Wrapper>
            <Jobs>
                <Title>Все отделочные работы у одного подрядчика</Title>
                <Descr>Компания Проект Монтаж обладает всеми ресурсами и опытом выполнения ремонта квартир под ключ в Москве и московской области без привлечения сторонних организаций. Заказав у нас ремонт под ключ, вы получаете не только высокое качество работ, но и доступные цены. На ремонтные работы и отделочные материалы. Безусловно при выборе подрядчика помимо стоимости важно качество выполнения работ. Поэтому компания Проект Монтаж предлагает для всех желающих организует экскурсии по объектам которые находятся в стадии ремонта.</Descr>
            </Jobs>
        </Wrapper>
    );
};
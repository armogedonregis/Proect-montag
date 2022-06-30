import React from "react";
import styled from "styled-components";
import tw from "twin.macro";
import { Wrapper } from "../wrapper";

const Jobs = styled.section`
  ${tw`
  lg:mb-20
  mb-10
  mx-auto
  `};
`;

const Title = styled.h2`
  ${tw`
  text-left 
  font-extrabold 
  lg:text-[40px]
  lg:leading-[53px]
  text-xl 
  leading-[24px]
  lg:mb-10
  mb-3.5
  `};
`;

const Descr = styled.p`
  ${tw`
  mx-auto
  text-left
  lg:text-xl
  text-sm 
  font-normal
  lg:leading-8
  leading-[22px]
  `};
`;

export const TextTown: React.FC = () => {
    return (
        <Wrapper>
            <Jobs>
                <Title>Все отделочные работы выполняются руками
профессионалов. Никаких мастеров<br />
«на все руки»</Title>
                <Descr>Мы убеждены, что качественного ремонта невозможно добиться с помощью одного или двух мастеров-универсалов. Компания Проект Монтаж предлагает качественный ремонт таунхауса в Москве и области под ключ. Мы обладаем большим опытом, знанием и современным оборудованием для самых высоких задач в сфере ремонта. Заказав у нас ремонтные работы, Вы получаете полный спектр услуг в одном месте без привлечения сторонних подрядчиков.</Descr>
            </Jobs>
        </Wrapper>
    );
};
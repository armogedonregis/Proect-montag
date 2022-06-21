import React from "react";
import styled from "styled-components";
import tw from "twin.macro";
import { Wrapper } from "../wrapper";

const Jobs = styled.section`
  ${tw`
  mb-20
  mx-auto
  `};
`;

const Title = styled.h2`
  ${tw`
  text-left font-extrabold text-[40px] mb-10
  `};
`;

const Descr = styled.p`
  ${tw`
  mx-auto
  text-left
  text-xl 
  font-normal
  leading-8
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
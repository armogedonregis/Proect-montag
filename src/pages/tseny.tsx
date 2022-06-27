import React from 'react';
import { CardProect } from '../components/cardProect';
import Layout from '../components/layout';
import { Prices } from '../components/prices';

export default function Price() {
  return (
      <Layout>
        <Prices Post={"Выполняем ремонт квартир и загородных домов в Москве и Московской области. Применяем современные технологии и оборудование. На все наши работы предоставляем 3-летнюю гарантию. Разбираемся где и какие материалы нужно использовать, соблюдаем технологии. Весь процесс контролирует руководитель проекта. Еженедельный фото-, видеоотчет сделанных работ."} children={"Цены на ремонт квартир под ключ"} />
        <CardProect title={"Цены на дизайн-проект"} />
      </Layout>
  );
}

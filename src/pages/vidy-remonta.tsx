import React from 'react';
import Layout from '../components/layout';
import { Prices } from '../components/prices';

export default function Remont() {
  return (
    <Layout>
      <section>
        <h2>Виды ремонта под ключи</h2>
        <p>Выполняем ремонтные работы в новостройках и вторичном жилье в москве и области. Начало работ на следующий день после подписания договора.</p>
        <Prices />
      </section>
    </Layout>
  );
}
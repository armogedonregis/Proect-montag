import { graphql } from 'gatsby';
import React from 'react';
import { HeroApart } from '../../components/heroApart';
import Layout from '../../components/layout';
import { Material } from '../../components/material';
import { Prices } from '../../components/prices';
import { Technology } from '../../components/technology';
import { TextTown } from '../../components/textTown';

export default function TownRemont({ data }) {
  
  const propsText = data.townHouseJson;

  const { heroTitle, heroPostTitle, descrHero } = propsText;

  const HeroProps = { heroTitle, heroPostTitle, descrHero };

  return (
    <Layout>
      <HeroApart mb={"mb-[120px]"} {...HeroProps} />
      <TextTown />
      <Technology />
      <Material />
      <Prices children={"Чем мы можем быть полезны для Вас"} />
    </Layout>
  );
};

export const townHouse = graphql`
  query townHouseJson {
      townHouseJson {
        heroTitle
        heroPostTitle
        descrHero
    }
  }
`
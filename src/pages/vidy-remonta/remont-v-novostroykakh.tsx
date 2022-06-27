import { graphql } from 'gatsby';
import React from 'react';
import { CardNew } from '../../components/cardNew';
import { Experience } from '../../components/experience';
import { HeroApart } from '../../components/heroApart';
import Layout from '../../components/layout';
import { Material } from '../../components/material';
import { Prices } from '../../components/prices';
import { RecordView } from '../../components/recordView';

export default function NewRemont({ data }) {

  const propsText = data.newBuildJson;

  const { heroTitle, heroPostTitle, descrHero } = propsText;

  const HeroProps = { heroTitle, heroPostTitle, descrHero };

  return (
    <Layout>
      <HeroApart bg={"bgnew"} mb={"mb-[5px] lg:mb-[120px]"} {...HeroProps} />
      <CardNew />
      <RecordView />
      <Material />
      <Experience />
      <Prices children={"Цены"} />
    </Layout>
  );
};

export const townHouseJson = graphql`
  query newBuildJson {
      newBuildJson {
        heroTitle
        heroPostTitle
        descrHero
    }
  }
`
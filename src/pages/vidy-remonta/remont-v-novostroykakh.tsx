import { graphql } from 'gatsby';
import React from 'react';
import { HeroApart } from '../../components/heroApart';
import Layout from '../../components/layout';

export default function NewRemont({ data }) {

  const propsText = data.newBuildJson;

  const { heroTitle, heroPostTitle, descrHero } = propsText;

  const HeroProps = { heroTitle, heroPostTitle, descrHero };

  return (
    <Layout>
      <HeroApart mb={"mb-[120px]"} {...HeroProps} />
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
import { graphql } from 'gatsby';
import React from 'react';
import { HeroApart } from '../../components/heroApart';
import Layout from '../../components/layout';
import { Material } from '../../components/material';
import { PostText } from '../../components/postText';
import { Prices } from '../../components/prices';
import { Professional } from '../../components/professional';
import { Technology } from '../../components/technology';

export default function OneRemont({ data }) {
  const propsText = data.oneRemontJson;

  const { heroTitle, heroPostTitle, descrHero, TitleOne, DescrTitle, FeaturesTitle, 
    FeaturesPreDescr, FeaturesItem, FeaturesPostDescr } = propsText;

  const HeroProps = { heroTitle, heroPostTitle, descrHero };

    const PostProps = { TitleOne, DescrTitle, FeaturesTitle, 
      FeaturesPreDescr, FeaturesItem, FeaturesPostDescr };

  return (
    <Layout>
      <HeroApart {...HeroProps} />
      <Professional />
      <Technology />
      <Material />
      <Prices bg={"bg-bgWhite"} children={"Чем мы можем быть полезны для Вас"} />
      <PostText {...PostProps} />
    </Layout>
  );
};

export const oneRemont = graphql`
  query oneRemont {
      oneRemontJson {
        descrHero
        heroTitle
        heroPostTitle
        DescrTitle
        FeaturesItem
        FeaturesPostDescr
        FeaturesPreDescr
        FeaturesTitle
        TitleOne
    }
  }
`
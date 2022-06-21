import { graphql } from 'gatsby';
import React from 'react';
import { HeroApart } from '../../components/heroApart';
import Layout from '../../components/layout';
import { Material } from '../../components/material';
import { PostText } from '../../components/postText';
import { Prices } from '../../components/prices';
import { Professional } from '../../components/professional';
import { Technology } from '../../components/technology';

export default function TwoRemont({ data }) {
  
  const propsText = data.twoRemontJson;

  const { heroTitle, heroPostTitle, descrHero, TitleOne, 
    DescrTitle, FeaturesTitle, FeaturesPreDescr,
    FeaturesPostDescr, FeaturesItem } = propsText;

  const HeroProps = { heroTitle, heroPostTitle, descrHero };

    const PostProps = { TitleOne, 
      DescrTitle, FeaturesTitle, FeaturesPreDescr,
      FeaturesPostDescr, FeaturesItem };

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

export const twoRemont = graphql`
  query twoRemont {
    twoRemontJson {
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
`;
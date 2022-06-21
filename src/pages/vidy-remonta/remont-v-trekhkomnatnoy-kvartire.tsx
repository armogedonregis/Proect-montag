import { graphql } from 'gatsby';
import React from 'react';
import { HeroApart } from '../../components/heroApart';
import Layout from '../../components/layout';
import { Material } from '../../components/material';
import { PostText } from '../../components/postText';
import { Prices } from '../../components/prices';
import { Professional } from '../../components/professional';
import { Technology } from '../../components/technology';

export default function ThreeRemont({ data }) {
  const propsText = data.threeRemontJson;

  const { heroTitle, heroPostTitle, descrHero, PreTitle, TitleOne, 
    DescrTitle, FeaturesTitle, FeaturesItem } = propsText;

  const HeroProps = { heroTitle, heroPostTitle, descrHero };

    const PostProps = { PreTitle, TitleOne, DescrTitle, FeaturesTitle, 
      FeaturesItem };

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

export const threeRemont = graphql`
  query threeRemont {
    threeRemontJson {
      DescrTitle
      FeaturesItem
      FeaturesTitle
      PreTitle
      TitleOne
      descrHero
      heroTitle
      heroPostTitle
  }
  }
`;
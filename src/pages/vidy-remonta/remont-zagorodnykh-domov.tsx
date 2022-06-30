import { graphql } from 'gatsby';
import React from 'react';
import { Company } from '../../components/company';
import { Dogovor } from '../../components/dogovor';
import { HeroApart } from '../../components/heroApart';
import Layout from '../../components/layout';
import { PostText } from '../../components/postText';
import { Prices } from '../../components/prices';
import { Technology } from '../../components/technology';

export default function HouseRemont({ data }) {
  
  const propsText = data.vacationHomeJson;

  const { heroTitle, heroPostTitle, descrHero, FeaturesPostDescr } = propsText;

  const HeroProps = { heroTitle, heroPostTitle, descrHero };

  return (
    <Layout>
      <HeroApart color={true} bg={"bgvac"} mb={"mb-5 lg:mb-[120px]"} {...HeroProps} />
      <Dogovor />
      <Company />
      <Prices children={"Чем мы можем быть полезны для Вас"} />
      <Technology />
      <PostText FeaturesPostDescr={FeaturesPostDescr} />
    </Layout>
  );
};

export const vacationHome = graphql`
  query vacationHome {
      vacationHomeJson {
        heroTitle
        heroPostTitle
        descrHero
        FeaturesPostDescr
    }
  }
`
import { graphql } from 'gatsby';
import React from 'react';
import { CardProect } from '../components/cardProect';
import { DesignProect } from '../components/designProect';
import { FeaturesDesign } from '../components/featuresDesign';
import { HeroDesign } from '../components/heroDesign';
import Layout from '../components/layout';
import { Privilege } from '../components/privilege';

export default function Design({ data }) {

  const propsText = data.designIntereraJson;
  const { TitleDesign, DescrDesign } = propsText;
    
  const DesignProps = { TitleDesign, DescrDesign };

  return (
      <Layout>
        <HeroDesign />
        <DesignProect photo={"bgdesign"} {...DesignProps} />
        <Privilege />
        <FeaturesDesign />
        <CardProect title={"Цены"} />
      </Layout>
  );
}

export const Interera = graphql`
  query DesignPage {
    designIntereraJson {
    TitleDesign
    DescrDesign
  }
  }
`
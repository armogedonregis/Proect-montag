import React from 'react';
import { CardProect } from '../components/cardProect';
import { DesignProect } from '../components/designProect';
import { FeaturesDesign } from '../components/featuresDesign';
import { HeroDesign } from '../components/heroDesign';
import Layout from '../components/layout';
import { Privilege } from '../components/privilege';

export default function Design() {
  return (
      <Layout>
        <HeroDesign />
        <DesignProect />
        <Privilege />
        <FeaturesDesign />
        <CardProect />
      </Layout>
  );
};

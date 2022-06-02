import React from 'react';
import { DesignProect } from '../components/designProect';
import { HeroDesign } from '../components/heroDesign';
import Layout from '../components/layout';

export default function Design() {
  return (
      <Layout>
        <HeroDesign />
        <DesignProect />
      </Layout>
  );
};

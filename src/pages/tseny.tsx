import React from 'react';
import { CardProect } from '../components/cardProect';
import Layout from '../components/layout';
import { Prices } from '../components/prices';

export default function Price() {
  return (
      <Layout>
        <Prices />
        <CardProect />
      </Layout>
  );
}

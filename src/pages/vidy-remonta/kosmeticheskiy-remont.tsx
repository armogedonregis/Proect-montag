import React from 'react';
import { DesignProect } from '../../components/designProect';
import { HeroKinds } from '../../components/heroKinds';
import Layout from '../../components/layout';
import { TimeRepair } from '../../components/timeRepair';

export default function Cosmetic() {
  return (
    <Layout>
      <HeroKinds />
      <DesignProect />
      <TimeRepair />
    </Layout>
  );
};

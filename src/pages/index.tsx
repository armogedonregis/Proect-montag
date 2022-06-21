import React from 'react';
import { Company } from '../components/company';
import { Hero } from '../components/hero';
import { Job } from '../components/job';
import Layout from '../components/layout';
import { Prices } from '../components/prices';
import { Questions } from '../components/questions';
import { Slider } from '../components/slider';

export default function Index() {
  return (  
    <Layout>
        <Hero />
        <Job />
        <Questions />
        <Prices children={"Цены"} />
        <Company />
    </Layout>
  );
}
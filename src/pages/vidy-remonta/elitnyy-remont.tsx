import { graphql } from 'gatsby';
import React from 'react';
import { Company } from '../../components/company';
import { DesignProect } from '../../components/designProect';
import { HeroKinds } from '../../components/heroKinds';
import Layout from '../../components/layout';
import { ListOfRepairs } from '../../components/listOfRepairs';
import { TimeRepair } from '../../components/timeRepair';

export default function Elite({ data }) {
  const propsText = data.eliteJson;
  const itemsProps = propsText.items;


  const Items = itemsProps;
  const { TimeTitle, TimeMetr1, TimeMetr2, TimeMetr3, TimeMetr4, 
    TextMetr1, TextMetr2, TextMetr3, TextMetr4, title, price,
    TitleDesign, DescrDesign } = propsText;
    
  const TimeProps = {TimeTitle, TimeMetr1, TimeMetr2, TimeMetr3, TimeMetr4, 
    TextMetr1, TextMetr2, TextMetr3, TextMetr4};
  const HeroProps = { title, price };
  const DesignProps = { TitleDesign, DescrDesign };
  return (
    <Layout>
      <HeroKinds {...HeroProps} />
      <DesignProect {...DesignProps} />
      <TimeRepair {...TimeProps} />
      <ListOfRepairs Items={Items} />
      <Company />
    </Layout>
  );
};

export const elite = graphql`
  query ElitePage {
    eliteJson {
    DescrDesign
    TextMetr1
    TextMetr2
    TextMetr3
    TextMetr4
    TimeMetr2
    TimeMetr1
    TimeMetr4
    TimeMetr3
    TimeTitle
    TitleDesign
    title
    price
    items {
      ItemsTitle
      item
    }
  }
  }
`
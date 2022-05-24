import React from 'react';
import clsx from 'clsx';
import Layout from '@theme/Layout';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
// import styles from './index.module.css';
// import styles from './programs.module.css';
import HomepageFeatures from '@site/src/components/HomepageFeatures';
// import '../js/includes.js'
// import '../js/global_functions.js'
// import overlayprogram from '../js/buildoverlay.js'
// import '../js/papaparse.min.js'
// import '../js/filter.js'
// import GeneratePrograms from '../../js/generatePrograms.node.js'
// import {filterSelection, w3AddClass, w3RemoveClass, InitFilter} from '../js/filter.js'
import { programInfo } from "../data/3500.json"

console.log(programInfo);    



export default function Home() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <Layout
      title={`${siteConfig.title} | Programs`}
      description="Programs">
      <header className={clsx('hero hero--primary', styles.heroBanner, 'mainpageheader')}></header>
      <h2>${programName}</h2>
           
      <main>

      
    
      </main>
      
    </Layout>

  );
  
}


import React from 'react';
import clsx from 'clsx';
import Layout from '@theme/Layout';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
// import styles from './index.module.css';
import styles from './programs.module.css';
import HomepageFeatures from '@site/src/components/HomepageFeatures';
// import '../js/includes.js'
// import '../js/global_functions.js'
// import overlayprogram from '../js/buildoverlay.js'
// import '../js/papaparse.min.js'
// import '../js/filter.js'
import GeneratePrograms from '../js/generatePrograms.node.js'
// import {filterSelection, w3AddClass, w3RemoveClass, InitFilter} from '../js/filter.js'

function HomepageHeader() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <header className={clsx('hero hero--primary', styles.heroBanner, 'mainpageheader')}>
    
    <h2>Programs</h2>
        
    
        
    </header>
  );
}


export default function Home() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <Layout
      title={`${siteConfig.title} | Programs`}
      description="Programs">
      <HomepageHeader />
      
      <main>

        <GeneratePrograms />

      <div id="programoverlay" className="overlay closed"></div>
      <script src="buildoverlay.js"></script>
        <script src="papaparse.min.js"></script>
      
    
      </main>
      {/* <InitFilter /> */}
    </Layout>
    
  );
  
}
// getData('programlisting.csv');

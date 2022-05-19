import React from 'react';
import clsx from 'clsx';
import Layout from '@theme/Layout';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import styles from './index.module.css';
import HomepageFeatures from '@site/src/components/HomepageFeatures';
// import '../js/includes.js'
// import '../js/global_functions.js'
// import overlayprogram from '../js/buildoverlay.js'
// import getData from '../js/parsecsv.js'
// import '../js/papaparse.min.js'
// import '../js/filter.js'
import GeneratePrograms from '../js/generatePrograms.node.js'

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
   {/* <iframe src='./_index.html' width={"100%"} height={"100%"}></iframe> */}
   
   
      <div id="myslidesbtnContainer"></div>
      <div className="row">
        <GeneratePrograms />
      </div>
      <div id="programoverlay" className="overlay closed"></div>
      <script src="buildoverlay.js"></script>
        <script src="papaparse.min.js"></script>
      
    <script src="filter.js"></script>
      </main>
    </Layout>
  );
  
}
// getData('programlisting.csv');

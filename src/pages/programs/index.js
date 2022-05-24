import React from 'react';
import clsx from 'clsx';
import Layout from '@theme/Layout';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import styles from './programs.module.css';
import data from './programlisting.json'

console.log(data);

function ProgramList() {

const programs = data;
const programlistitems = programs.map((programs, index) =>
  

  <div className='slide'>
    <img src={'./images/' + programs.URL  + ".webp"} />
    <p>{programs.name}</p>
</div>

)

return (
  <div className='programlist'>
    {programlistitems}

  </div>
)

}



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

        <ProgramList />

      <div id="programoverlay" className="overlay closed"></div>
      <script src="buildoverlay.js"></script>
        <script src="papaparse.min.js"></script>
      
    
      </main>
      {/* <InitFilter /> */}
    </Layout>
    
  );
  
}
// getData('programlisting.csv');

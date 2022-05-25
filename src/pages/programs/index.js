import React from 'react';
import clsx from 'clsx';
import Layout from '@theme/Layout';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import styles from './programs.module.css';
import data from './programlisting.json'
// import data2 from './3500.json'

// console.log(data);

function CategoryList() {
  let categories = data.map((programs) => 
  programs.Category
  )
  categories.unshift('ALL')
  
  categories = Array.from(new Set(categories))
  const indcategoriesDIV = categories.map((category, index) =>
  <div className='slidesbtn' key={category + index}>
    {category}
    </div>
  )

  return (
    <div className='categories'>
      {indcategoriesDIV}
    </div>
  )

}


function ProgramList() {

const programs = data;





const programlistitems = programs.map((programs, index) =>
  

  <div key={index + programs.name} className='slide row'>
    <img src={'./images/' + programs.URL  + ".webp"} />
    <p>{programs.name}</p>
  </div>

)

return (
 
 <div className='programlist table row container'>
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
        <div className='programlisting'>
        <CategoryList />
        <ProgramList />
        </div>
    
      {/* <script src="buildoverlay.js"></script> */}
        {/* <script src="papaparse.min.js"></script> */}
      
    
      </main>
      {/* <InitFilter /> */}
    </Layout>
    
  );
  
}
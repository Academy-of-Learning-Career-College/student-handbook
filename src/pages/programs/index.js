// TODO: Add Live Search

import React from 'react';
import clsx from 'clsx';
import Layout from '@theme/Layout';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import styles from './programs.module.css';
import data from './programlisting.json'
// import data2 from './3500.json'
import { filterSelection, w3RemoveClass, w3AddClass, InitFilter } from '../../js/filter';
import CallToActioniFrame from '../../components/calltoactioniframe';
// console.log(data);







function makeActiveButton(index) {
  if (index == 0) {
    return " active"
  } else {
    return ""
  }
}



function CategoryList() {
  let categories = data.map((programs) => 
  programs.Category
  )
  categories.unshift('All')
  
  categories = Array.from(new Set(categories))
  const defaultClassName = "slidesbtn"
  const indcategoriesDIV = categories.map((category, index) =>
  

    <button className={defaultClassName + makeActiveButton(index)}  key={category + index} id={category} onClick={() => filterSelection(category)}>
    {category}
    </button>
  )

  return (
    <div className='categories'>
      {indcategoriesDIV}
    </div>
  )

}


function ProgramList() {

const programs = data;

const GenSlide = props => {
  const { URL, cat, Name } = props;

  return (
  <a href={'/student-handbook/programs/info?program=' + URL}><div className={`column cards ${cat} show` }>
    <div className="content">
    <img src={'./images/' + URL  + ".webp"} alt={Name}/>
    <p>{Name}</p>
    </div>
  </div></a>
  )

}


const programlistitems = programs.map((programs, index) => {
    let key=index*Math.random()*558445*Math.random()
    let props = {
      URL:programs.URL,
      cat:programs.Category,
      Name:programs.name
    }
    return (
      <GenSlide {...props} key={key} />
    )
}
)

return (
 
 <div className='programlist table'>
    {programlistitems}
  </div>
)

}



function HomepageHeader() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <h2>Programs</h2>
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
      <div className='row'>
     
        <div className='programlisting row'>
        <CategoryList />
        <script>
        InitFilter()
        </script>
        <ProgramList />
        </div>
        </div>
    
      
      
    
      </main>
      {/* <InitFilter /> */}
    </Layout>
    
  );
  
}
// TODO: Add Live Search
import React from 'react';
import clsx from 'clsx';
import Layout from '@theme/Layout';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import styles from './programs.module.css';
import data from './programlisting.json'
import queryString from 'query-string'
import CallToActioniFrame from '../../components/calltoactioniframe';
import BuildProgramPage from '../../js/buildoverlay'


function GetQuery(){
  console.log(location.search);
  const parsed = queryString.parse(location.search);
  console.log(parsed);
  return parsed.program
}



function GenerateProgramPage() {

const programinfo1 = data.find(element => element.URL == GetQuery())
document.title = programinfo1.name
return (
    <><div className='programheader'>
      <h3>{programinfo1.name}</h3>
      <img src={'./images/full/' + programinfo1.URL  + "_full_size.webp"} /></div>
      <h3>Program Info</h3>
    <BuildProgramPage programnameasurl={programinfo1.URL} programname={programinfo1.name} programtype={programinfo1.Category} hide_data_table={false} />

    </>
    
)

}


function ProgramList() {



const programlistitems = programs.map((programs, index) =>
  

  <div key={index + programs.name} className={`column cards ${programs.Category} show` }>
    <div className="content">
    <img src={'./images/' + programs.URL  + ".webp"} alt={programs.name}/>
    <p>{programs.name}</p>
    </div>
  </div>

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
      title={``}
      description="Programs">
      <HomepageHeader />
      
      <main>
      
    <GenerateProgramPage />
      
    
      </main>
      <CallToActioniFrame />
    </Layout>
    
  );
  
}
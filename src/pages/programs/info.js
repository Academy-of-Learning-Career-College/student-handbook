// TODO: Add Live Search
import React from 'react';
import Layout from '@theme/Layout';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import data from './programlisting.json'
import queryString from 'query-string'
import CallToActioniFrame from '../../components/calltoactioniframe';
import BuildProgramPage from '../../js/buildoverlay'
import BrowserOnly from '@docusaurus/BrowserOnly';

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
  
<BrowserOnly>
    <BuildProgramPage programnameasurl={programinfo1.URL} programname={programinfo1.name} programtype={programinfo1.Category} hide_data_table={false} />
</BrowserOnly>    
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
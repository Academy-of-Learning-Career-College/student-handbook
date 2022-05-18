import React from 'react';
import clsx from 'clsx';
import Layout from '@theme/Layout';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import styles from './index.module.css';
import HomepageFeatures from '@site/src/components/HomepageFeatures';

function HomepageHeader() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <header className={clsx('hero hero--primary', styles.heroBanner, 'mainpageheader')}>
    
            <div className="mainpageheaderform">
                <h1 className="white-text-md text-center">Funding Available for Those Who Qualify</h1>
                <h2 className="white-text">Canada's Largest Career College Network</h2>
                <div>
                    &nbsp;
                </div>
                <iframe className="afulliframe iframe-full-height" title="Learnmoreframe" src="//form1.campuslogin.com/Academy_of_Learning_College/10400/Lead/AbbotsfordLangley.campuslogin?&style=//aolccbc.com/forms/transpform.css"></iframe>
            </div>
        
    
        
    </header>
  );
}

export default function Home() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <Layout
      title={`Hello from ${siteConfig.title}`}
      description="Description will go into a meta tag in <head />">
      <HomepageHeader />
      <main>
        
        <div className="container-fluid">
        <div className="row">
            <div className="col-lg"><img alt="Academy of Learning Career College logo" src="../images/Academt-of-Learning---final-logo-.webp" width="100%" /></div>
            <div className="col">
                <h1 className="text-center">ACADEMY OF LEARNING CAREER COLLEGE</h1>
                <h2 className="text-center orange-text">Canada's Largest Career College Network.</h2>
                <p className="text-center">At Academy of Learning, we attribute our rapid growth to our success in identifying and filling the gap between the formal education currently available in Canada and the realities of the working world. We provide learners the solutions
                    they need by offering customized, convenient and affordable programs.</p>
                <p className="text-center">In today's business world, where quality training is not only important but essential to career success, Academy of Learning Career College stands out as a training provider relied on by students, employers and government agencies. No
                    other private post-secondary college can match the variety of programs that Academy of Learning Career College offers. Students can choose from over 30 diploma and certificate programs offered at Academy of Learning Career College.</p>
                <p>&nbsp;</p>
                <p className="text-center"><a className="btn btn-primary btn-lg orange-btn" href="aboutus.html" role="button">ABOUT AOLCC</a></p>
            </div>
        </div>
    </div>

    
    <div className="container-fluid">
            <div className="row">
                <div className="col-lg-12 mb-4 mt-2 text-center">
                    <h2>FEATURES</h2>
                </div>
            </div>
        </div>
        <div className="container-fluid">
            <div className="row">
                <div className="col-lg-4 col-md-6 col-sm-12 text-center">
                    <h3>LEARN AT YOUR OWN PACE</h3>
                    <p>Our campuses provide a relaxing atmosphere where you can learn at your own pace. The features of our Integrated Learning System&reg; allow for flexibility in your daily schedule. You can finish your program quickly to get into the
                        job market faster.</p>
                </div>
                <div className="col-lg-4 col-md-6 col-sm-12 text-center">
                    <h3>JOB PLACEMENT</h3>
                    <p>Diploma programs feature real-world job placement so you're job-ready at graduation. A number of our adult learners are hired by their placement sites.</p>
                </div>
                <div className="col-lg-4 col-md-6 col-sm-12 text-center">
                    <h3>PRACTICAL EXPERIENCE</h3>
                    <p>Many of our programs feature a practical component in which learners gain valuable experience with actual clients.</p>
                </div>
                <div className="col-lg-4 col-md-6 col-sm-12 text-center">
                    <h3>SHORT, EFFECTIVE COURSES</h3>
                    <p>We offer short programs, so you can earn your Diploma or Certificate in just 4-12 months instead of the conventional 2-4 years at a Community College or University. This gives you the financial flexibility to get into the workforce
                        sooner, instead of being tied to a Community College or University for several years.</p>
                </div>
                <div className="col-lg-4 col-md-6 col-sm-12 text-center">
                    <h3>FLEXIBLE SCHEDULING</h3>
                    <p>Work / Life balance is important. Don't give up on your dream of a better career to help you and your family. Our flexible hours and online learning allow you to earn a Diploma or Certificate with minimal disruption to your daily schedule.
                        You'll be able to balance your education with your employment and your family. With our continuous enrolment, it is never too late for you to start.</p>
                </div>
                <div className="col-lg-4 col-md-6 col-sm-12 text-center">
                    <h3>DIPLOMA AND CERTIFICATE PROGRAMS</h3>
                    <p>We offer over 30 Diploma and Certificate programs for you to choose from. For one-on-one support, Learning Coaches are available at all times to provide personalized guidance and assistance to help you succeed!</p>
                </div>
                <div className="col-lg-4 col-md-6 col-sm-12 text-center">
                    <h3>HANDS-ON TRAINING</h3>
                    <p>Audio, visual, online and rich media instructions are used to explain concepts and guide learners through initial skill-based applications. Hands-on tasks give students an opportunity to apply skills to “real life” situations. We help
                        you master the subject matter before moving onto the next lesson.</p>
                </div>
                <div className="col-lg-4 col-md-6 col-sm-12 text-center">
                    <h3>SAFE, COMFORTABLE LEARNING ENVIRONMENT</h3>
                    <p>There's no intimidating classroom atmosphere or competition! We ensure a comfortable, safe and friendly learning environment for all adult learners. If you need to miss a lesson, you can take the same lesson at another time. With ILS
                        and online learning you'll never miss an assignment or lesson.</p>
                </div>
                <div className="col-lg-4 col-md-6 col-sm-12 text-center">
                    <h3>INTEGRATED LEARNING SYSTEM (ILS)</h3>
                    <p>Course materials and instructions provide an all-encompassing learning experience using multi-sensory learning styles and preferences through student workbooks, media presentations, and hands-on activities.</p>
                </div>
            </div>

        </div>
        <div className="container-fluid">
            <div className="row">
                <div className="text-center col-md-8 col-12 mx-auto">
                    <h1 className="orange-text">DEDICATED TO QUALITY</h1>
                    <p>Our programs are conceived and developed with learners' needs and ease of use in mind. At Academy of Learning Career College, Canada's largest career college network, our training program will set you up for success. Learn more about
                        our world-class Integrated Learning System (ILS).</p>
                </div>
            </div>
        </div>
        <div className="position-images wpb_single_image center"><img alt="Academy of Learning Integrated Learning System" src="/images/ils.webp" /></div>
        <div className="orange text-center banner">
            <a className="white-text-md" href="programs/">We have more than 30+ programs. EXPLORE &gt;</a>
        </div>
        <div className="banner" style={{height: '10px'}}>
            &nbsp;
        </div>
        <div className="inline-block">
            <div className="sixtypcthz"><img alt="Map of Campuses on an iMac" className="sixtypcthz" src="/images/imac-final.webp" /></div>
            <div className="fiftypcthz float-right">
                <h1>50+ CAMPUSES ACROSS CANADA.</h1>
                <h2>As a Canadian Owned and Operated Company, we are proud to deliver quality Education to our fellow Canadians.</h2>
                <hr />
                <p>With 50+ campuses across Canada we are Canada's largest career college. As a Canadian owned and operated company, we understand the requirements of Canadian learners and tailor our curriculum and learning outcomes for the realities of
                    the Canadian job market.</p>
                <div className="btn">
                    <a href="locations/">FIND A LOCATION NEAR YOU</a>
                </div>
            </div>
        </div>
        <div className="grey-bg text-center white-text">
            <p><b>CALL US TODAY AT 604-855-3315 IN ABBOTSFORD OR 604-532-4040 IN LANGLEY</b></p>
            <p>WE STRIVE TO PROVIDE OUR ADULT LEARNERS WITH THE HIGHEST QUALITY IN EDUCATION, CURRICULUM, SERVICE AND TECHNOLOGY</p>
            <div className="row">
                <div className="col-sm-4 col-auto mx-auto">
                    <a className="btn btn-block btn-lg btn-success orange-btn" href="ils.html" title="">LEARN MORE</a>
                </div>
            </div>
        </div>
        <div className="container-fluid" style={{height: '600px'}}>
        <div className="row afulliframe">
            <div className="row text-center">
                <h2>Request more info</h2>
            </div>
            <div className="row text-center">
                <iframe className="moreinfoform" title="moreinfoform" src="//form1.campuslogin.com/Academy_of_Learning_College/10400/Lead/AbbotsfordLangley.campuslogin?&style=//aolccbc.com/forms/clform.css"></iframe>
            </div>
            </div>
            </div>
      </main>
    </Layout>
  );
}

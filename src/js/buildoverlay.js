import React, { useEffect, useState } from "react";
import { lazy, Suspense } from "react"
import mainlist from '../data/programlisting.json'
import ptibdata from '../data/3500.json'
import HTMLReactParser from "html-react-parser";

import BrowserOnly from '@docusaurus/BrowserOnly';



const create = React.createElement;

const prognotes = `
Tuition fees include digital course materials.
Printed copies may be available for an additional fee.
Financial Assistance may be available for those who qualify.
`

const gradreq = `
Students must maintain a 75% program average to obtain a 
`

const method = `
Onsite, Remote and Blended using our
Integrated Learning ®System training facilitated by qualified learning coaches.
`


function getPTIBData(progname) {

    try {
        let ourData = ptibdata.programs.filter(program => { return program.name.toLowerCase() === progname.toLowerCase() })

        if (ourData.length === 0) {
            log(`There was an issue`)
        } else {
            return ourData
        }
    } catch {
        log(`There was an issue`)
    }
}




function setHeader(override, defaultvalue) {
    if (!override) {
        return defaultvalue
    } else {
        return override
    }
}

function log(e) {
    console.log(e);
}

var headings = [{
    "a1": "Admission Requirements",
    "a2": "Program Highlights",
    "a3": "Career Opportunities",
    "a4": "CORE COURSES",
    "a5": "Upon completion of the program the participant must demonstrate the following core competencies:"
}]
var programs_with_no_data_table = {
    "program": "english_as_a_second_language"
}

function setData(content) {
    const programContent = content;
}


function toCAD(amount) {

    try {
        return `\$${amount.toLocaleString('en-US', { style: 'decimal', maximumFractionDigits: 0 })}`
    } catch (error) {
        return ' ';
    }

}

export default function buildProgramPage(data) {
    //vars

    let URL = data.programnameasurl
    let NAME = data.programname
    let TYPE = data.programtype
    let HIDEDT = data.hide_data_table
    let smorg = "smorgs/" + URL + "_" + TYPE + ".pdf"




    useEffect(() => {
        const fetchData = async () => {
            const response = await fetch(`./data/${URL}_programdata.json`);
            const newData = await response.json();
            setData(newData);
        };

        fetchData();
    }, [URL]);
    const [data2, setData] = useState(null);
    if (data2) {
        // let admitreq_array = data2.heading[0].a1


        // vitalinfo = {
        //     "progtitle" : NAME,
        //     "full" : "images/full/" + URL + "_full_size.webp",
        //     "a1" : a1,
        //     "admitreq" : admitreq,
        //     "a2" : a2,
        //     "programhighlights" : programhighlights,
        //     "a3" : a3,
        //     "careeropp" : careeropp,
        //     "a4" : a4,
        //     "a5" : a5,
        //     "corecourses" : corecourses,
        //     "programtype" : programtype,
        //     "salarystart" : salarystart,
        //     "salaryend" : salaryend,
        //     "programduration" : programduration,
        //     "programhours" : programhours,
        //     "workexphours" : workexphours,
        //     "dtuition" : dtuition,
        //     "ituition" : ituition,
        //     "dapp" : dapp,
        //     "iapp" : iapp,
        //     "dassess" : dassess,
        //     "textbooks1" : textbooks1,
        //     "coursemat" : coursemat_html,
        //     "dother" : dother,
        //     "smorg" : smorg
        // }

        //   console.log(data2);

        let defaultheadings = new Array()

        let i = 0
        defaultheadings[i] = "Admissions Requirements"
        i++
        defaultheadings[i] = "Program Highlights"
        i++
        defaultheadings[i] = "Career Opportunities"
        i++
        defaultheadings[i] = "Core Courses"

        let altheadings = new Array()
        i = 0
        altheadings[i] = data2.admitreq.alt_heading
        i++
        altheadings[i] = data2.programhighlights.alt_heading
        i++
        altheadings[i] = data2.careeropp.alt_heading
        i++
        altheadings[i] = data2.corecourses.alt_heading


        // let admitreq_heading = setHeader(,'Admissions Requirements')


        let pagecontent = new Array()
        i = 0
        pagecontent[i] = generatesection(data2.admitreq, defaultheadings[i], altheadings[i])
        i++
        pagecontent[i] = generatesection(data2.programhighlights, defaultheadings[i], altheadings[i])
        i++
        pagecontent[i] = generatesection(data2.careeropp, defaultheadings[i], altheadings[i])
        i++
        pagecontent[i] = generateCoursesList(data2.corecourses, defaultheadings[i], altheadings[i])
        i++
        pagecontent[i] = generateDataBox(data2, URL, smorg, NAME)

        const ProgramPageHeader = function(){
            return (
                <div className={"programheader"}>
                    <h3>{NAME}</h3>
                    <img src={`./images/full/${URL}_full_size.webp`} alt={NAME} />
                    <h3>Program Info</h3>
                </div>
                )
        }


        return (
              
            <div className="row">
                <div className="col-md">
                    <ProgramPageHeader />
                    {pagecontent[0]}
                    {pagecontent[1]}</div>
                <div className="col-md">
                    {pagecontent[2]}
                    {pagecontent[3]}</div>
                <div className="col-md programdata">
                    {pagecontent[4]}</div>
            </div>

        )
    } else {
        return null;
    }

}

function generatedurationBox(ptib) {
    try {
        log(`workexperience = ${ptib.name} `)
    } catch {
        log(`I can't find workexperience, ptib=${ptib}`)
    }
}

function generateOtherFeeRows(label, cost) {
    if (cost === undefined) {
        return
    } else {
        cost = toCAD(cost)
        return (
            <tr><td>{label}</td><td>{cost}</td><td>{cost}</td></tr>
        )
    }
}

function generateDataBox(e, name, smorg, NAME) {

    name = name.replaceAll("_", " ")
    let ptib = getPTIBData(NAME)
    let ptibData = new Array()
    try {

        ptib.map((what) => {
            let i = 0
            ptibData[i] = `Hours: ${what.Duration[0].hours}`
            i++
            ptibData[i] = `Weeks: ${what.Duration[0].weeks}`
            i++
            ptibData[i] = what.Duration[0].workexperience
            if (ptibData[i] === undefined) { ptibData[i] = '' }
            i++
            ptibData[i] = what.Credential
            i++
            ptibData[i] = what.domestic[0].tuition
            i++
            ptibData[i] = what.domestic[0].application_fee
            i++
            ptibData[i] = what.domestic[0].assessment_fee
            i++
            ptibData[i] = what.domestic[0].textbooks
            i++
            ptibData[i] = what.domestic[0].coursematerials
            i++
            ptibData[i] = what.domestic[0].other
            i++
            ptibData[i] = what.domestic[0].administration_fee
            ptibData.admin_fee = what.domestic[0].administration_fee
            return ptibData

        })
    } catch {
        log(`I cannot find ${name}`)
        log(`I was looking for `)
    }
    //now I need to build the Duration box

    try {
        return (

            <><table>
                <tbody>
                    <tr><td>Program Type: </td><td colSpan={2}>{ptibData[3]}</td></tr>
                    <tr><td>Anticipated Salary: </td><td colSpan={2}>{toCAD(e.salarystart)} - {toCAD(e.salarystart)}</td></tr>
                    <tr><td>Program Duration </td><td colSpan={2}>
                        {ptibData[0]}<br />
                        {ptibData[1]}<br />
                        {ptibData[2]}
                    </td></tr>
                </tbody>
            </table>
                <h3>Tuition Fees</h3>
                <table>
                    <tbody>
                        <tr><td>&nbsp;</td><td>Domestic</td><td>International</td></tr>
                        <tr><td>Tuition</td><td>{toCAD(ptibData[4])}</td><td>{toCAD(ptibData[4] * 1.3)}</td></tr>
                        <tr><td>Application</td><td>{toCAD(ptibData[5])}</td><td>{toCAD(ptibData[5] * 2)}</td></tr>
                        <tr><td>Assessment</td><td>{toCAD(ptibData[6])}</td><td>{toCAD(ptibData[6])}</td></tr>
                        {generateOtherFeeRows('Text Books', ptibData[7])}
                        {generateOtherFeeRows('Course Materials', ptibData[8])}
                        <tr><td>Other</td><td>{toCAD(ptibData[9])}</td><td>{toCAD(ptibData[9])}</td></tr>
                        <tr><td>Program Syllabus</td><td colSpan={2}><a href={smorg}>Download</a></td></tr>
                        <tr><td>Program Notes</td><td colSpan={2}>{prognotes}</td></tr>
                        <tr><td>Graduation Requirements</td><td colSpan={2}>{gradreq}{ptibData[3]}</td></tr>
                        <tr><td>Method of Delivery</td><td colSpan={2}>{method}</td></tr>
                    </tbody>
                </table></>

        )
    } catch {
        alert(err)
    }

}

function generateCoursesList(e, title) {
    const CourseLI = props => {
        const { li_title, li_content } = props;


        if (!li_title) {
            return <li>{li_content}</li>
        } else {
            return <li><strong>{li_title}</strong><br />{li_content}</li>
        }
    }

    let courselist = e.paragraphs.map((c, i) => {
        let li_title = ''
        if (c.ul_start) { return }
        if (c.ul_end) { return }
        let props = {
            li_title: c.li_title,
            li_content: c.content
        }
        let key = Math.random() * Math.random() * 12 * Math.random()
        return <CourseLI {...props} key={key} />

    }
    )
    return (
        <div>
            <h3>{title}</h3>
            <ul>
                {courselist}
            </ul>
        </div>
    )

}

function generatesection(e, title) {
    //console.log(`I got ${array.paragraphs} and ${title}`);
    //console.log(array.paragraphs);
    //admitreq.paragraphs[0].style
    let what = e.paragraphs.map((c, i) => {
        let key = Math.random() * Math.random() * Math.random() * Math.random() * 5854425 * Math.random()
        return (
            <div className={c.style} key={key}>

                {c.content}
            </div>

        )
    }
    )

    log(e)
    log(title)
    return (
        <div id={title}>
            <h3>{title}</h3>
            {what}
        </div>
    )
}



function generateFullDiv() {
    return [{
        "top": `
   <div class="container-flex center">
   <h1>
       <div id="progtitle" class="progtitle1">${progtitle}</div>
   </h1>
</div>
<div class="container-flex center">
   <div id="fullimage"><img src=${fullImage} alt='Program Image'></div>
</div>`,
        "left": `
<div class="container-flex program-info" id="program-info">
   <div class="header lefthr">
       <h1>Program Info:</h1>
   </div>
   <div class="d-md-flex flex-row ">
       <div class="p-2 col1">
           <div class="container">
               <h2>${a1}</h2>
               <div id="admitreq">${admitreq}</div>
           </div>
           <div class="container">
               <h2>${a2}</h2>
           </div>
           <div class="container">
               <div id="programhighlights">${programhighlights}</div>
           </div>
       </div>
       <div class="p-2 col2">
           <div class="textleft">
               <div class="container">
                   <h2>${a3}</h2>
               </div>`,
        "middle": `
               <div class="container">
                   <div id="careeropp">${careeropp}</div>
               </div>
           </div>
           <div>
               <div class="container">
                   <h2>${a4}</h2>
               </div>
               <div class="container">
                   <p>${a5}</p>
                   <div id="corecourses">${corecourses}</div>
               </div>
           </div>
       </div>`,
        "right": `
       <div class="p-2 programdatacol" id="progdatatable">
           <table class="progdata">
               <tbody>
                   <tr>
                       <td class="title title_with_emoji">
                       <i class="fas fa-scroll"></i>&nbsp;Program&nbsp;Type:</td>
                       <td colspan="2">${programtype}</td>
                   </tr>
                   <tr>
                       <td class="title title_with_emoji"><i class="fas fa-search-dollar"></i>&nbsp;Anticipated&nbsp;Salary:</td>
                       <td colspan="2">${salarystart} &ndash; ${salaryend}
                       </td>
                   </tr>
                   <tr class="tr-nobottomborder">
                       <td class="title title_with_emoji"><i class="fas fa-calendar"></i>&nbsp;Program&nbsp;Duration:</td>
                       <td id="duration"colspan="2">
                           Weeks: ${programduration}<br>
                           Hours: ${programhours} <br>
                           <p id="workexphours">${workexphours}</p>
                           
                       </td>
                   </tr>
                   <tr class="tr-notopborder tr-nobottomborder">
                       <td colspan="3">
                           <h3>Tuition Fees</h3>
                       </td>
                   </tr>
                   <tr>
                       <td class="title">Tuition:</td>
                       <td>${dtuition}</td>
                       <td>${ituition}</td>
                   </tr>
                   <tr>
                       <td class="title">Application:</td>
                       <td>${dapp}</td>
                       <td>${dapp}</td>
                   </tr>
                   <tr>
                       <td class="title">Assessment:</td>
                       <td>${dassess}</td>
                       <td>${dassess}</td>
                   </tr>
                   ${textbooks1}
                   ${coursemat_html}

                   <tr>
                       <td class="title">Other Fees:</td>
                       <td>${dother}</td>
                       <td>${dother}</td>
                   </tr>
                   <tr>
                       <td class="title">Program Syllabus:</td>
                       <td colspan="2"><a href="${smorg}" target="_blank">Click here to Download</a></td>
                                                                        
                   </tr>
                   <tr>
                   <td class="title">Program Notes</td>
                   
                   <td colspan="2" class="breaksallowed">
                   Tuition fees include digital course materials. <br> 
                   Printed copies may be available for an additional fee.<br>
                   Financial Assistance may be available for those who qualify.
                   </td></tr>
                   <tr><td class="title">Graduation Requirements</td>
                   <td colspan="2" class="breaksallowed">
                   Students must maintain a 75% program average to obtain a ${programtype}
                   </td>
                   </tr>
                   <tr class="tr-nobottomborder">
                   <td class="title">Method of Delivery</td>
                   <td colspan="2" class="breaksallowed">
                   Onsite, Remote and Blended using our <br>Integrated Learning &reg;System training facilitated by qualified learning coaches.
                   </td>
                   </tr>
               </tbody>
           </table>
       </div>`
    }]
}


export function buildProgramPage2(programnameasurl, programname, programtype, hide_data_table) {
    console.log(programnameasurl, programname, programtype, hide_data_table);



    const credential = programtype;
    let othercontent = ''
    let JSONFile = "./data/" + programnameasurl + "_programdata.json";
    console.log(JSONFile);
    let proglistingJSONFile = "data/3500.json";
    let fullImage = "images/full/" + programnameasurl + "_full_size.webp";
    let smorg = "smorgs/" + programnameasurl + "_" + programtype + ".pdf"
    fetch(JSONFile)
        .then(function (response) {
            ///console.log(response);
            if (response.status == 404) {
                alert("Error, the " + JSONFile + " cannot be found")
            }
            return response.json()
        })
        .then(function (data) {
            console.log(data)

            //programnameasurl = data.programnameasurl;
            // Set Admit Requirements Paragraphs
            //call function called create div loop

            //fullimage = `<img src=${fullImage} alt='Program Image'>`;

            textbooks1 = "";
            optional_cooperative_placement_hours = "";
            admitreq_array = createDivfromJSON(data.admitreq, headings[0].a1)
            admitreq = admitreq_array[0].partcontent;
            a1 = admitreq_array[0].part_heading

            //console.log(createDivfromJSON(data.admitreq));
            programhighlights_array = createDivfromJSON(data.programhighlights, headings[0].a2);
            programhighlights = programhighlights_array[0].partcontent;
            a2 = programhighlights_array[0].part_heading

            careeropp_array = createDivfromJSON(data.careeropp, headings[0].a3);
            careeropp = careeropp_array[0].partcontent
            a3 = careeropp_array[0].part_heading
            corecourses_array = createDivfromJSON(data.corecourses, headings[0].a4);
            corecourses = corecourses_array[0].partcontent;
            a4 = corecourses_array[0].part_heading
            a5 = headings[0].a5

            // console.log(a1)
            // console.log(a2)
            // console.log(a3)
            // console.log(a4)
            // console.log(a5)
            newMinWageDate = new Date(2022, 7, 1)
            if (newMinWageDate < new Date()) {
                bcminwage = 15.65;
            } else {
                bcminwage = 15.20;
            } //console.log(newMinWageDate) 
            //console.log('BC Minimum Wage is: ' + bcminwage)

            const bcminannualsalary = bcminwage * 40 * 52;
            let salarystart = data.salarystart;
            if (salarystart < bcminannualsalary) {
                salarystart = bcminannualsalary
                //console.log('Salary Start too low, overriding to ' + toCAD(salarystart))
            };
            salarystart = toCAD(salarystart, 'salararystart');
            //console.log(salarystart);
            salaryend = toCAD(data.salaryend, 'salaryend');
            if (!(data.prog_video)) {
                syllabuslink = "<a href=smorgs/" + data.syllabuslink + " target=\"_blank\">Click Here<\/a>"
            } else {
                syllabuslink = "<a href=smorgs/" + data.syllabuslink + " target=\"_blank\">Click Here<\/a> <iframe width=\"345\" height=\"194\" src=" + data.prog_video + " frameborder=\"0\" allow=\"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture\" allowfullscreen><\/iframe>"
            };

            function createDivfromJSON(part, alt_heading) {
                //console.log(partname);
                partcontent = '';
                part_alt_heading = '';
                part.paragraphs.forEach(paragraph => {
                    if (paragraph.li_title) {
                        partcontent = partcontent + "<b>" + paragraph.li_title + "</b><br />"
                    }
                    if (paragraph.ul_start) {
                        partcontent = partcontent + "<ul>"
                    } else if (paragraph.ul_end) {
                        partcontent = partcontent + "</ul>"
                    } else {
                        partcontent = partcontent + "<" + paragraph.style + ">" + paragraph.content + "</" + paragraph.style + ">";
                    }
                    alt_heading_temp = part.alt_heading
                    console.log(alt_heading_temp)
                });
                //console.log(`Here's your content: ${partcontent}`);
                if (alt_heading_temp == undefined) {
                    part_alt_heading = alt_heading

                    console.log(`alt_heading_temp = ${alt_heading_temp}\npart_alt_heading = ${part_alt_heading}\nalt_heading = ${alt_heading}`);
                } else {
                    part_alt_heading = alt_heading_temp
                    console.log(alt_heading_temp);
                    console.log(`alt_heading_temp = ${alt_heading_temp}\npart_alt_heading = ${part_alt_heading}\nalt_heading = ${alt_heading}`);
                }
                partcontent_array = [{
                    "partcontent": partcontent,
                    "part_heading": part_alt_heading
                }]
                return partcontent_array;

            }
            console.log(`Fetching proglistingJSONFile`);
            fetch(proglistingJSONFile)
                .then(function (response) {
                    console.log(`Got a response \n${response}`);
                    return response.json()
                })
                .then((data) => {
                    // searchtext = "Searching for " + programnameasurl
                    console.log(`Now, I need to serach for ${programname} in the proglistingJSONFile`)
                    mainname = programname.replace(/\sCertificate|\sDiploma/g, "")
                    mainname = mainname.toLowerCase();
                    //console.log(searchtext);

                    data.programs.forEach(program => {
                        //console.log(program.name);
                        //console.log(mainname);
                        // programnameasurl2 = "";
                        // programnameasurl2 = program.name.replace(/\+| |-/g, "_").toLowerCase();
                        // programnameasurl2 = programnameasurl2.replace(/__/g, "_");
                        //console.log(programnameasurl2);

                        if (program.name.toLowerCase() === mainname.toLowerCase()) {
                            ///console.log("I found it " + mainname + " is the same as " + programnameasurl2);                                //console.log(program.credential);
                            progtitle = program.name;
                            programtype = program.Credential;
                            programhours = program.Duration[0].hours;
                            programduration = program.Duration[0].weeks;
                            ///console.log(program.Duration[0].weeks);
                            workexphours = program.Duration[0].workexperience;

                            if (workexphours === undefined) {
                                //console.log("Whelp");
                                workexphours = '';
                            } else {
                                //console.log(workexphours);
                            }
                            ///console.log(workexphours);
                            // alert(workexphours)
                            dtuition = toCAD(program.domestic[0].tuition, 'domestic tuition');
                            ituition = toCAD((program.domestic[0].tuition * 1.3), 'international tuition');
                            appfee = 250;
                            //iappfee = appfee * 2;
                            dapp = toCAD(appfee, 'domestic app fee');
                            iapp = toCAD(appfee * 2, 'domestic app fee');
                            //dapp = toCAD(program.domestic[0].application_fee);
                            //iapp = toCAD((program.domestic[0].application_fee * 2));
                            ///console.log(program.domestic[0]);
                            assessfee = toCAD(100, 'assess (Domestic and INTL) fee');
                            dassess = assessfee
                            iassess = assessfee;

                            //dassess = toCAD(program.domestic[0].assessment_fee);
                            // iassess = toCAD(program.domestic[0].assessment_fee);

                            otherfees = program.domestic[0].other;
                            if (otherfees === undefined) {
                                otherfees = 4;
                            }

                            dother = toCAD(otherfees, 'other fees');
                            //console.log(dother);
                            iother = dother;
                            textbooks = program.domestic[0].textbooks;
                            if (textbooks === undefined) {
                                textbooks1 = "";

                            } else {
                                textbookscost = toCAD(textbooks, 'textbooks');

                                textbooks1 = `<tr id="textbooks">
                                                        <td class="title">Text Books:</td>
                                                        <td>${textbookscost}</td>
                                                        <td>${textbookscost}</td>
                                                    </tr>`;

                                // textbooks2 = textbookscost;
                            }
                            coursemat = program.domestic[0].coursematerials
                            if (coursemat === undefined) {
                                coursemat_html = "";
                            } else {
                                coursemat_cost = toCAD(coursemat, 'course materials');
                                coursemat_html = `<tr id="coursemats">
                                        <td class="title">Course Materials:</td>
                                        <td>${coursemat_cost}</td>
                                        <td>${coursemat_cost}</td>
                                    </tr>`;
                            }

                            if (program.cooperative_placement_hours === undefined) {
                                optional_cooperative_placement_hours = "";
                            } else {
                                cooperative_placement_hours = program.duration[0].cooperative_placement_hours;

                            }
                            // build cell titles




                            console.log(`Building content now`);


                            prog_info_array = [{
                                "top": `
                                    <div class="container-flex center">
                                    <h1>
                                        <div id="progtitle" class="progtitle1">${progtitle}</div>
                                    </h1>
                                </div>
                                <div class="container-flex center">
                                    <div id="fullimage"><img src=${fullImage} alt='Program Image'></div>
                                </div>`,
                                "left": `
                                <div class="container-flex program-info" id="program-info">
                                    <div class="header lefthr">
                                        <h1>Program Info:</h1>
                                    </div>
                                    <div class="d-md-flex flex-row ">
                                        <div class="p-2 col1">
                                            <div class="container">
                                                <h2>${a1}</h2>
                                                <div id="admitreq">${admitreq}</div>
                                            </div>
                                            <div class="container">
                                                <h2>${a2}</h2>
                                            </div>
                                            <div class="container">
                                                <div id="programhighlights">${programhighlights}</div>
                                            </div>
                                        </div>
                                        <div class="p-2 col2">
                                            <div class="textleft">
                                                <div class="container">
                                                    <h2>${a3}</h2>
                                                </div>`,
                                "middle": `
                                                <div class="container">
                                                    <div id="careeropp">${careeropp}</div>
                                                </div>
                                            </div>
                                            <div>
                                                <div class="container">
                                                    <h2>${a4}</h2>
                                                </div>
                                                <div class="container">
                                                    <p>${a5}</p>
                                                    <div id="corecourses">${corecourses}</div>
                                                </div>
                                            </div>
                                        </div>`,
                                "right": `
                                        <div class="p-2 programdatacol" id="progdatatable">
                                            <table class="progdata">
                                                <tbody>
                                                    <tr>
                                                        <td class="title title_with_emoji">
                                                        <i class="fas fa-scroll"></i>&nbsp;Program&nbsp;Type:</td>
                                                        <td colspan="2">${programtype}</td>
                                                    </tr>
                                                    <tr>
                                                        <td class="title title_with_emoji"><i class="fas fa-search-dollar"></i>&nbsp;Anticipated&nbsp;Salary:</td>
                                                        <td colspan="2">${salarystart} &ndash; ${salaryend}
                                                        </td>
                                                    </tr>
                                                    <tr class="tr-nobottomborder">
                                                        <td class="title title_with_emoji"><i class="fas fa-calendar"></i>&nbsp;Program&nbsp;Duration:</td>
                                                        <td id="duration"colspan="2">
                                                            Weeks: ${programduration}<br>
                                                            Hours: ${programhours} <br>
                                                            <p id="workexphours">${workexphours}</p>
                                                            
                                                        </td>
                                                    </tr>
                                                    <tr class="tr-notopborder tr-nobottomborder">
                                                        <td colspan="3">
                                                            <h3>Tuition Fees</h3>
                                                        </td>
                                                    </tr>
                                                    <tr>
                                                        <td class="title">Tuition:</td>
                                                        <td>${dtuition}</td>
                                                        <td>${ituition}</td>
                                                    </tr>
                                                    <tr>
                                                        <td class="title">Application:</td>
                                                        <td>${dapp}</td>
                                                        <td>${iapp}</td>
                                                    </tr>
                                                    <tr>
                                                        <td class="title">Assessment:</td>
                                                        <td>${dassess}</td>
                                                        <td>${iassess}</td>
                                                    </tr>
                                                    ${textbooks1}
                                                    ${coursemat_html}
    
                                                    <tr>
                                                        <td class="title">Other Fees:</td>
                                                        <td>${dother}</td>
                                                        <td>${dother}</td>
                                                    </tr>
                                                    <tr>
                                                        <td class="title">Program Syllabus:</td>
                                                        <td colspan="2"><a href="${smorg}" target="_blank">Click here to Download</a></td>
                                                                                                         
                                                    </tr>
                                                    <tr>
                                                    <td class="title">Program Notes</td>
                                                    
                                                    <td colspan="2" class="breaksallowed">
                                                    Tuition fees include digital course materials. <br> 
                                                    Printed copies may be available for an additional fee.<br>
                                                    Financial Assistance may be available for those who qualify.
                                                    </td></tr>
                                                    <tr><td class="title">Graduation Requirements</td>
                                                    <td colspan="2" class="breaksallowed">
                                                    Students must maintain a 75% program average to obtain a ${programtype}
                                                    </td>
                                                    </tr>
                                                    <tr class="tr-nobottomborder">
                                                    <td class="title">Method of Delivery</td>
                                                    <td colspan="2" class="breaksallowed">
                                                    Onsite, Remote and Blended using our <br>Integrated Learning &reg;System training facilitated by qualified learning coaches.
                                                    </td>
                                                    </tr>
                                                </tbody>
                                            </table>
                                        </div>`
                            }]


                            // console.log(`I reached the innerHTML part`);

                            // console.log(`Checking the value of hide_data_table`)
                            if (hide_data_table == true) {
                                // alert(hide_data_table)
                                prog_info_array[0].right = ''

                            }
                            // console.log(`Here is the DIV's content: \n${othercontent}`);
                            content = `${prog_info_array[0].top} ${prog_info_array[0].left} ${prog_info_array[0].middle} ${prog_info_array[0].right}</div> `

                            setData(content)
                            if (workexphours === undefined) {
                                document.getElementById('workexphours').innerHTML = '';
                            }
                            return content;

                        } else {
                            //console.log('there was an issue')
                        };


                        return content;

                    }

                    );
                    ///console.log(othercontent);
                    return content;
                })

            //console.log(othercontent);

            return content;
            ///console.log(othercontent);
        }) //console.log(othercontent);
    return content
}


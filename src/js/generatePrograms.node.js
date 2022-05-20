import parse from 'html-react-parser';
import Papa from 'papaparse'
var thistoo = '';
var mycontent = '';
var categories_short = '';
var categories = '';
var usedcats = '';
var programname = '';
var programcat = '';
var programnameasurl = '';
var programcat_short = '';
var program_type = '';
var htmlContent = '';
String.prototype.toTitle = function () {

    thistoo = this.replaceAll(/cert\./gi, 'Certification')
    //thistoo = thistoo.replaceAll(/prep/gi, 'preparation')
    thistoo = thistoo.replaceAll(/mcsa/gi, 'Microsoft')
    thistoo = thistoo.replaceAll(/addction/gi, 'Addictions')
    thistoo = thistoo.replaceAll(/W\//gi, 'With')
    return thistoo.replace(/(^|\s)\S/g, function (t) { return t.toUpperCase() });
}

String.prototype.toURL = function () {

    const regex = /\+|\s|certificate|diploma|\_\_|\/|\.|_\z|\:|\-|\(|\)|&plus;/gi;
    const regex2 = /_$|__/gi
    const regex3 = /_$/gi
    const regex4 = /^\s+|\s+$|\s+(?=\s)/g
    const regex5 = /__/gi
    thistoo = this.replaceAll(regex, '_')
    thistoo = thistoo.replaceAll(regex2, '_');
    thistoo = thistoo.replace(regex3, ' ')
    thistoo = thistoo.replace(regex4, '')
    return thistoo.replace(regex5, '_').toLowerCase()
}

String.prototype.toNumber = function () {
    return this.replace(/\$|\,/gm, '')
}

function buildcatButton(categories, usedcats, programcat_short, programcat) {
    return `${categories}<button class='slidesbtn active' onclick=\"filterSelection('${programcat_short}')\">${programcat}</button>`
}

function buildProgramButton(programcat_short, programnameasurl, programname, program_type,mycontent) {
    let divContent = `${mycontent}<div class="column ${programcat_short} slide show">
            <div class="content"><button onClick=\"overlayprogram\('${programnameasurl}\',\'${programname}'\,\'${program_type}\')\"> 
            <img src="images/${programnameasurl}.webp" alt="${programname}" style="width:100%" />
            <h4>${programname}</h4></div>
            </button></div></div>`
            // console.log(`our div containts ${divContent}`);
    return divContent
}

function parseTheFile(file) {
    Papa.parse(file, {
        download: true,
        header: true,
        complete: function (results) {
    results.data.forEach(function (program) {
                if (program["Name of Program"]) {
                    if (program["Active"] == 'Yes') {
                        programname = program["Name of Program"].toTitle();
                        programcat = program['Category'];
                        programnameasurl = program["URL"];
                        programcat_short = programcat.toURL();
                        programcat_short = programcat_short.toURL();
                        program_type = program["Type"];
                        if (usedcats.includes(programcat_short)) {
                            //skip Duplicate Category
                        } else {
                            usedcats = usedcats + programcat_short;
                            categories = buildcatButton(categories, usedcats, programcat_short, programcat);
                        }
                        // console.log(`Now I need to build mycontent with ${programname}`);
                        mycontent = buildProgramButton(programcat_short, programnameasurl, programname, program_type,mycontent);



                    }
                }

            }


            );





            //console.log(`hello, mycontent=${holder}`)
            //console.log(results)
            //return mycontent
            // return holder
        }

    }

    )

    // console.log(`something something ${holder}`);
    htmlContent = `<div id="myslidesbtnContainer">${categories}</div>
    <div className="row"></div>`
    console.log(`categories=${categories}`);
    console.log(`mycontent=${mycontent}`);
    console.log(`htmlContent=${htmlContent}`);

    //console.log(categories, mycontent, htmlContent)
    //      console.log(`I am sending ${htmlContent} to the caller`);

}

function getData(file) {
    console.log('Starting');

    try {


        categories = `<button class=\"slidesbtn active\" onclick=\"filterSelection('all')\">All</button>`

        //categories = ''     
        let htmlContent = parseTheFile(file);
        //       console.log(htmlContent);
        return htmlContent
    } catch (err) {
        alert(err)
        //console.log(err)
        // return null
    }

}

export default function GeneratePrograms() {

    htmlContent = getData('programlisting.csv')
    console.log(`Oh hai ${htmlContent}`);
    return htmlContent
    // return parse(htmlContent)

}
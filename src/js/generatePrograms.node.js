import data from '../data/3500.json'
import parse from 'html-react-parser';





export default function GeneratePrograms() {

    console.log(data)

    let mycontent = ''
    let programpath = ''
    let programdata = ''
    let programthumb =''
    data.programs.forEach(program => {
        programpath = program.name.replace(/\+| |-/g, "_").toLowerCase();
        programpath = programpath.replace(/__/g, "_");
        programdata = "data\\" + programpath + "_programdata.json";
        //console.log(programdata);
        programthumb = "images\\thumbs\\" + programpath + ".webp";
        //console.log(programthumb);
        mycontent = `${mycontent}<div class='container flex-wrap text-wrap slide '><a href='programinfo.html?${programpath}' target='_blank'> <img src='${programthumb}' /><br /><strong>${program.name}</strong></a></div>`


    });
    // document.getElementById('slides').innerHTML = mycontent;
    return parse(mycontent)
}
console.log("----welcome in js----");

const myHTML = `<h1> Added from</h1>
                <p> This is a paragraph</p>`;
const htmlEle = document.getElementById("container");
htmlEle.innerHTML = myHTML;


const myHTML2 = `<h1>vikas</h1>`;
const htmlEle2 = document.getElementsByClassName("container2")[0];
htmlEle2.innerHTML = myHTML2;
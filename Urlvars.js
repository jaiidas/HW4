function getUrlVars() {
    var vars = {};
    var parts = window.location.href.replace(/[?&]+([^=&]+)=([^&]*)/gi, function(m,key,value) {
        vars[key] = value;
    });
    return vars;    
}

var name = getUrlVars()["name"];
var view = getUrlVars()["view"];
var checklist = getUrlVars()["checklist"];


var welcome = document.createElement("h1");
var textnode = document.createTextNode("Hello "+ name + "!");
welcome.appendChild(textnode);
document.querySelector("#welcome").appendChild(welcome);



var checklist1 = getUrlVars()["checklist1"];
var checklist2 = getUrlVars()["checklist2"];
var checklist3 = getUrlVars()["checklist3"];
var checklist4 = getUrlVars()["checklist4"];
var checklist5 = getUrlVars()["checklist5"];
var checklist6 = getUrlVars()["checklist6"];

var match= 0;

if (checklist1=="Books")
match+=20;

if (checklist2=="Art")
match+=20;

if (checklist3!="Writing")
match+=20;

if (checklist4=="Movies")
match+=20;

//if (checklist5=="Science")
//	match+=15;

if (checklist6!="Games")
match+=20;

document.querySelector("#result").append(match+"%");



if (view=="Rana_CV"){

var text = document.createElement("h3");
var textnode = document.createTextNode("Here is");
text.appendChild(textnode);

document.getElementById('Radio_option').appendChild(text);

var text_link = document.createElement("h4");
var link= document.createTextNode("Rana's CV");
text_link.appendChild(link);

     var a = document.createElement('a');  
     a.appendChild(link);  
     a.title = "Rana's CV";  
     a.href = "img/Rana Alaqil.pdf";  
     document.getElementById('Radio_option').appendChild(a);
}



if (view=="Jaida_CV"){
var text = document.createElement("h3");
var textnode = document.createTextNode("Here is");
text.appendChild(textnode);

document.getElementById('Radio_option').appendChild(text);

var text_link = document.createElement("h4");
var link= document.createTextNode("Jaida's CV");
text_link.appendChild(link);

     var a = document.createElement('a');  
     a.appendChild(link);  
     a.title = "Jaida's CV";  
     a.href = "img/Jaida Alsuhaibani.pdf";  
     document.getElementById('Radio_option').appendChild(a);
}


if (view=="Meme"){
var img = document.createElement("img");
img.src = 'img/UI-UX-Meme-17.jpg';

var text = document.createElement("h3");
var textnode = document.createTextNode("Here is the Meme");
text.appendChild(textnode);

//document.getElementById('Radio_option').appendChild(text);
document.getElementById('Radio_option').appendChild(img);
} 
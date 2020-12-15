/*const title = document.getElementById('page-title');
console.log(title);
const error = document.getElementsByClassName('error');
console.log(error);
const paras = document.getElementsByTagName('p');
console.log(paras);
 const para= document.querySelector('p');
 console.log(para.innerText);
 para.innerText+= ". Bob may have got this right";
const paras= document.querySelectorAll('p');
paras.forEach(para => {
    console.log(para.innerText)
    para.innerText+=', plus this text.';
});*/
/*let age=(48);
let year=(2020);
age= 21;
console.log(age, year);
alert ("age, year");

let goals=(null);
goals= (NaN);
//goals=(undefined);
console.log(goals);*/

//strings
/*console.log('Hi there coronvirus world.');
let mario= "mario@wonderfulworld.com";
console.log(mario);


//string cocatination
let firstThought= ('What a wonderful world.');
let secondThought= ('Sometimes!');
let todaysThought = firstThought + ' ' + secondThought;
console.log(todaysThought);

//getting characters
console.log(todaysThought[0]);

//string length
console.log(secondThought.length);
console.log(todaysThought.length);


//string methods
console.log(firstThought.toUpperCase() + " " + secondThought.toUpperCase());
let finalThought= todaysThought.toLowerCase();
console.log(finalThought, todaysThought);

let index= mario.indexOf('@');
console.log(index);*/

//common string methods
let email= 'mario@thenetninja.co.uk';

//let result= email.lastIndexOf('n');
let result= email.slice(0, 5);
console.log(result);


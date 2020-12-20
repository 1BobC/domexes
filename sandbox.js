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
/*Modern Javascript Tutorial #2
Syntax Basics & Types
let age=(48);
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

/*common string methods
let email= 'mario@thenetninja.co.uk';

//let result= email.lastIndexOf('n');
//let result= email.slice(0, 5);
//let result= email.substr(0, 6);
let result= email.replace('i', 'g');
console.log(result);*/

//numbers in variables
//let radius= (10);
//let pi= (3.142);
//console.log(radius, pi);
//maths operators +, -, *, /, **, %
//let result= (10 % 3);
//let result= pi * radius**2;
//order of operation BIDMAS
//console.log(result);
//let likes= 10;
//likes++;
//likes--;
//likes += 10;
//likes-= 5;
//likes *= 2;
//likes **=2;
//likes /=3;
//console.log(likes);
//let result= 'The blog has' + ' ' + likes + ' ' + 'likes.'
//console.log(result);

//template strings
//const title= '"Best reads of 2020"';
//const author= 'Mario';
//const likes= 30;
//concatonation way
//let result= 'The blog called ' + title + ' by ' + author + ' has ' + likes + ' likes.';
//console.log(result);
//template string way
//let result= `The Blog called ${title} by ${author} has ${likes} likes`;
//console.log(result);
//creating html templates
/*let html= `
<h2>${title}</h2>
<p>By ${author}</p>
<span>This blog has ${likes} likes.</span>
`;
console.log(html);*/

//arrays
//let ninjas= ['bob', 'kenji', 'samsung'];
/*ninjas [1]= 'mushiMushi';
console.log (ninjas[1]);
let ages= [19, 24, 29, 34];
console.log(ages[3]);
let random= ['twenty', 30, 'thirtyFive', 40];
console.log(random[3]);
console.log(ninjas.length);
//let result= ninjas.join('>>');
//let result= ninjas.indexOf('samsung');
//let result= ninjas.concat(['harry', 'harold', 'charlie', 'georgie']);
let result= ninjas.push('jim', 'james');
result= ninjas.pop();
console.log(result);
result= ninjas.pop();
console.log(result);
result= ninjas.pop();
console.log(result);

//null, undefined
let age= null;
console.log(age, age + 3, `The age is ${age}`);

//boolean & comparisons
//console.log(false, true, "false", "true");

//methods can return boolean
let email= 'luigi@thenetninja.co.uk';
let names= ['mario', 'luigi', 'toad'];
//let result= email.includes('@');
let result= names.includes('luigi');
console.log(result);

//comparison operators ==, !=, >, <, >=, <= etc
let age= 25;
console.log(age == 25);
console.log(age == 26);
console.log(age != 26);
console.log(age != 25);
console.log(age > 25);

let name= 'Bob';
//console.log(name == 'Bob');
//console.log(name == 'bob');
//console.log(name > 'crystal');
console.log(name < 'bob');*/

//let age= 25;
//loose comparison (different types can be equal)
//console.log(age == 25);
//console.log(age == '25');
//console.log(age != 25);
//console.log(age != '25');

//strict comparison (different types connot be equal)
//console.log(age === 25);
//console.log(age === '25');
//console.log(age !== 25);
//console.log(age !== '25');

//type conversion
//let score= '100';
//score= Number(score);
//console.log(score + 1);
//console.log(typeof score);
//let result= String(50);
//let result= Boolean(100);
//let result= Boolean(0);
//let result= Boolean('0');
//console.log(result, typeof result);
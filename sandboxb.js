//modern javascript tutorial #4/

//function declaration  declarations are/ can be hoisted
//function greet(){
//    console.log('hello there!');
//}
//greet();    
//greet();    
//greet();


//function expression
/*const speak= function() {
    console.log('goodaymate!');
};

speak();*/

//function declaration will be hoisted to function invocation or call 
//function greet(){
//    console.log('hello there!');
//}

    //see how arguments and parameters are passed into 
    //a function expression and it's function call
//const speak= function(name= 'June', time= 'day') {      //arguements order must match
                                                        //add args /params
    //console.log(`Good ${time} ${name}.`);
//};
//speak('mario', 'morning');              //arguements order must match
//speak();                              //check if args /params added to expression above
//speak('Bob', 'night')                //check if call arg params override expression args / params        

    //returning values
    //regular function
//const calcArea= function(radius){
    //let area= 3.14 * radius**2;
    //console.log(area);
    //return area;
    //return 3.14 * radius**2;//cleanup code
//}
//calcArea(5);
//const area= calcArea(5);
//console.log(area);  //this returned area (not just console logged area) can be used further

//const calcVol= function (area) {    //eg to calc volume
    
//};
//calcVol(vol);

    //regular function
//const calcArea= function(radius){
    //let area= 3.14 * radius**2;
    //console.log(area);
    //return area;
    //return 3.14 * radius**2;//cleanup code
    //}

    //arrow function 18.44
//const calcArea= (radius) => {  
//    return 3.14 * radius**2;
//}
//code cleanup - 
/*const calcArea= radius =>        //if only one parram remove parenthesis
     3.14 * radius**2;        //next remove braces and the word return

const area= calcArea(5);
console.log ('Area is:', area);*/

    //practise arrow function
//const greet= function()  {                  //regular
//    return 'Hello world';
//}

    //const greet= () => 'Hello World';     //arrow
    //const result= greet();
    //console.log(result);


/*const bill= function(products, tax) {       //regular
    let total= 0;
for (let i = 0; i < products.length; i++) {
    total += products[i] + products[i] * tax;
}
      return total;
}
console.log(bill([10, 15, 30], 0.2));*/

/*const bill= (products, tax) => {            //arrow
    let total= 0;
for (let i = 0; i < products.length; i++) {
    total += products[i] + products[i] * tax;
}
      return total;
}
console.log(bill([10, 15, 30], 0.2)); */

/*const name= 'Bob';
//const greet= 'hello'
    //functions
//  const greet= () => 'hello!';
//  let resultOne= greet.toUpperCase();
//  console.log(resultOne);
    //methods
 let resultTwo= name.toUpperCase();
 console.log(resultTwo);*/

    //callbacks & for each / arrow function and...
/*const myFunc= (callbackFunc) => {
    //do something
    let value= 50;
    callbackFunc(value);
};
    //...regular function
//myFunc(function(value) {        //change to arow function
myFunc (value => {
    //do something
    console.log(value);
});*/
    //callbacks & for each contd
let people= ['Bob', 'June', 'Kelly', 'Shona**2', 'Finn', 'Freya'];

//people.forEach(function(person){    //change to arrow function
// people.forEach ((person, index) => {    //add index to params
//     console.log(index, person);
// });                     
                                        //change to call-back function
/*const logPerson = (person, index) => {
    console.log(`${index} - hello ${person}`);
};
people.forEach(logPerson);*/

//get a reference to the 'ul' in the DOM        from 39 mins - Do AGain!
const ul = document.querySelector('people');
const people= ['Bob', 'June', 'Kelly', 'Shona**2', 'Finn', 'Freya'];
people.forEach(function(person) {           //create callback method

}) 

    


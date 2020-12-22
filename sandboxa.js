    //Modern Javascript Tutorial #3
    //Control Flow - looping and conditionals
    //for loops
/*let i= 0;
for (let i = 0; i < 5; i++){
    console.log('in loop', i);
    i++;
}
console.log('loop finished');
const names= ['bob', 'june', 'kelly', 'shona'];
for(let i = 0; i < names.length; i++){
    //console.log(i);
    //console.log(names[i]);
    let html= `<div>${names[i]}</div>`;
    console.log(html);
}
    /*while loop
let i= 0;
while (i < 5){
    console.log('in loop', i);
    i++;
}
console.log('loop finished');

const names= ['bob', 'june', 'kelly', 'shona'];
let i= 0;
while (i < names.length){
    console.log(names [i]);
    i++;
}
console.log('loop finished');*/

    //do while loop
//const names= ['bob', 'june', 'kelly', 'shona'];
//let i= 5;
/*let i= 2;
do{
    console.log('value of i is: ', i );
    i++;
}
while (i < 5)
console.log('loop finished');*/

    //if statements
/*const age= 25;
if (age > 20 ){
    console.log('You are over twenty');
}
const people = ['bob', 'june', 'kelly', 'shona', 'mike', 'yoshi'];
if(people.length > 3){
    console.log("That's several people");
}*/
//const password= 'p#s';
//const password= 'p#sswored';
//const password= 'p#sswordeylong';
/*if (password .length >= 12){
    console.log('that is a strong strong password');
}
else if (password.length >= 8 ){
    console.log ('that password is long enough');
}else{
    console.log('the password is a bit short, better to be eight characters' )
}*/
    //logical operators OR || and AND &&
    /*const password= 'p#s';
   //const password= 'p#sswored';
    //const password= 'p#sswordeylong';
    if (password.length >= 12 && password.includes('#')){
        console.log('that is a strong strong password');
    }
    else if (password.length >= 8 || password.includes('#') && password.length>5){
        console.log ('that password is strong enough');
    }else{
        console.log('the password is a bit weak, better to be eight characters and include an #');
    }*/
    //logical operator NOT (!)
    //let user= false;
    //if(!user){
    //    console.log ('You must be logged in to continue.')
    //}
  //console.log (user);
  //console.log (!user);
    //break and continue
    /*const scores= [22, 45, 18, 0, 100, 67, 93];
    for(let i = 0; i < scores.length; i++){
        console.log('your score: ' + scores[i]);
    if(scores[i] === 0){
        continue;
    }
    if(scores[i] === 100){
        console.log('Congratulations you have the top score.');
        break;
    }
    }*/
        //switch statements
    /*const grade= 'x';
    switch (grade) {
        case 'A':
            console.log('You got an A!');
            break;
        case 'B':
            console.log('You got an B');
            break;
        case 'C':
            console.log('You got an C');
            break;  
        case 'D':
            console.log('You got an D');
            break; 
        case 'E':
            console.log('You got an E');
            break; 
        default:
            console.log('Not a valid grade');
    }*/


        //if statements as an alternative to switch statements
       /* if (grade=== 'A') {

        }else if (grade=== 'B') {

        }else if (grade=== 'C') {

        }else if (grade=== 'D') {

        }else if (grade=== 'E') {

        }else {

        }*/
    
     //variable and block scope
     //shows difference between var and let/const
    
     /*let age= 30;
     let name= 'bob&june';
     //const age= 30;
     //var age= 30;
     if (true) {
         let age= 40;
         //const age= 40;
         //var age= 40;
         let name1= 'bob';
         //const name= 'bob';
         //var name= 'bob';
         let test1= 'Merry Xmas';
        console.log('inside 1st code block: ', age, name1, test1); //, test1
      
     if (true) {
         let age= 50;
         //const age= 50;
         //var age= 50;
         let name2= 'june';
         //const name= 'june';
         //var name= 'june';
         let test2= 'merry Christmas';
         console.log('inside 2nd code block: ', age, name1, name2, test1, test2); // , test2
     }
     }
        console.log('outside both code blocks', age, name); //, test1, test2*/





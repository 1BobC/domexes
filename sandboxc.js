//#5 object literals
/*let user= {
    name: 'henry',
    //key: 'value',
    age: 73,
    email: 'hank@host.com',
    location: 'San Francsisco',
    blogs: ['All whiskies everywhere', 'Only one make of cheese']
};
console.log(user);
console.log(user.name);     //using dot notation - mainly used
//user.age= 28;
console.log(user.age);

console.log(user.email);
user.name= 'havril';
console.log(user.name);

const key= 'location';      //using sq bracket notation can be useful  - why?
console.log(user[key]);

console.log(typeof user);   //using typeof*/

//object literals adding methods
/*let user= {
    name: 'henry',
    age: 73,
    email: 'hank@host.com',
    location: 'San Francsisco',
    blogs: ['All whiskies everywhere', 'Only one make of cheese'],

    login: function(){            //adding a method! the method is defined on an object
                                  //PS can remove the colon and word function for short hand method! 
        console.log('the user is logged in');   //making it a method rather than a function - geddit!
    },
    logout: function(){           //PS can remove the colon and word function for short hand method!
        console.log('the user is logged out');
    },
    //logBlogs: function() {              //cannot use arrow function here with 'this' - why? 16.39
                                       //PS can remove the colon and word function for short hand method!
    logBlogs: () => {
        //console.log(this);
        //console.log(this.blogs);
        //console.log('This user has written the following blogs: ');
        //this.blogs.forEach(blog => {    //but can use arrow function here - why? 16.39
        //    console.log(blog);
        //})
        console.log(this);
    }    
};
    //user.login();               //calling the method!
    //user.logout();              //similar to string method - const name= 'mario'; name.toUpperCase();  
    user.logBlogs();
    console.log(this);*/
    
  //Putting objects inside an array (not just strings) plus cleaned up code from above
  /*const blogs= [
    { title: 'Why mac & cheese rules!', likes: 30},
    { title: '10 things to do with Marmite', likes: 50}
  ] ; 
    console.log(blogs);*/
   
   /* let user= {
        name: 'crystal',
        age: 30,
        email: 'crystal@netninja.com',
        location: 'myImagimation',
        blogs: [
            { title: 'Why mac & cheese rules!', likes: 'with ' + 30 + ' likes'},
            { title: '10 things to do with Marmite', likes: 'with ' + 50 + ' likes'}
        ],
        login(){
            console.log('The user is logged in');
        },
        logout(){
            console.log('The user is logged out');
        },
        logBlogs(){
            console.log('This user has written the following blogs: ');
            this.blogs.forEach(blog => {
                console.log(blog.title, blog.likes);
            })
        }
    };
        user.logBlogs();*/
        //console.log(this);  
//check this out again about 17 min on... and continue by adding new array onto the object!

//OK now Math objects - ready  made!
    // console.log(Math);
    // console.log(Math.PI);
    // console.log(Math.SQRT2);

    // const area= 18.76;
    // console.log(Math.round (area));
    // console.log(Math.floor (area));
    // console.log(Math.ceil(area));
    // console.log(Math.trunc (area));

//OK now random numbers!
   /* const random= Math.random();
    console.log(random);
    console.log(Math.round(random * 100));  //27.4
    console.log(Date());*/

//Primitive values
    // let scoreOne= 50;           
    // let scoreTwo= scoreOne;     //values stored seperately on 'the stack'
    // console.log(`scoreOne: ${scoreOne}`, `scoreTwo: ${scoreTwo}`);

    // scoreOne= 100;
    // console.log(`scoreOne: ${scoreOne}`, `scoreTwo: ${scoreTwo}`);  //only scoreOne changes, why?

//Reference values
    const userOne= {name: 'june', age: 20};
    const userTwo= userOne;

    console.log(userOne, userTwo);
    
    userOne.age= 40;
    console.log(userOne, userTwo);



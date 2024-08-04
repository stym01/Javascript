// singleton
// Object.create

// object literals

const mySym= Symbol("key1") //declaring a symbol data type

const JsUser = {
    name : "Satyam",
    "full name" : "Satyam Kesharwani",
    age :19,
    location :"Prayagraj",
    email:"satyam@google.com",
    [mySym] : "mykey1"
}

// console.log(JsUser.name)
// console.log(JsUser["name"])
// console.log(JsUser["full name"]) //only way to access this
// console.log(typeof JsUser[mySym]) //only way to acess symbol
// console.log(JsUser)  //[Symbol(key1)]: 'mykey1' as output and not string if delcared with brackwets inside object

// JsUser.email="Satyam@chatgpt.com"
// console.log(JsUser);

// Object.freeze(JsUser) //will freeze the object hence no change will occur like below email

// JsUser.email="Satyam@meta.com"
// console.log(JsUser);


//creating a function for object
JsUser.greeting=function() {
    console.log("hello JsUser");
}
console.log(JsUser.greeting); //[Function (anonymous)] output...it only shows that it is a fn
console.log(JsUser.greeting()); //now exefcute....and "undefined" is also there in output...

JsUser.greeting2=function(){
    console.log(`hello ${this.name}`) //1 ke bagal wala symbol and $ as format specifier
}

console.log(JsUser.greeting2())

//storing promise in a variavle and then calling rhen catch and finally seoarately
const promiseOne=new Promise(function(resolve,reject){
    //Do an async task
    //DB calls, cryptography, network
    setTimeout(() => {
        console.log("Async task 1");
        resolve()
    }, 1000);
})

promiseOne.then(function(){
    console.log("inside then of task 1");
})
promiseOne.catch(function(){
    console.log("inside then of task 1");
})
promiseOne.finally(function(){
    console.log("inside finally of task 1");
})

//not creating a variable
new Promise(function(resolve,reject){
    setTimeout(() => {
        console.log("Async task 2");
        resolve()
    }, 1000);
}).then(function(){
    console.log("inside then of 2");
}).catch(function(){
    console.log("inside catch of 2");
}).finally(function(){
    console.log("inside finally of 2");
})

//passing parameter in resolve
new Promise(function(resolve,reject){
    setTimeout(() => {
        console.log("Async task 3");
        resolve({username:'Chai' ,email : 'chai@example.com'})
    }, 1000);
}).then(function(user){
    console.log(user.email);
})

//passing parameter in resolve and reject
new Promise(function(resolve,reject){
    setTimeout(() => {
        const error=false;
        if(!error){
            resolve({username:'hitesh',channel:'code'})
        }
        else{
            reject('Errorr : something went wrong')
        }
    }, 1000);
}).then(function(user){
    return user.channel      //the returned item goes to the next then block and there we can do anything and also can do the nested thens
}).then(function(channel){
    console.log(channel);
}).catch(function(errors){
    console.log(errors);
}).finally(() => console.log("The promise is either resolved or rejected")
)


//using async await fn
const promiseFive=new Promise(function(resolve,reject){
    setTimeout(() => {
        const error=false;
        if(!error){
            resolve({username:'hitesh',channel:'code'})
        }
        else{
            reject('Errorr : something went wrong')
        }
    }, 1000);
})

async function consumePromiseFive(){
    try {
        const response = await promiseFive   //await coz async otherwise turant execute ho jaayega aur response me kuch nhi hoga...the returned result will be stored  in response and we can do anything with that
        console.log(response);
    } catch (eror) {     //if  found error then we will print this
        console.log(eror);
    }
}
consumePromiseFive() //created the function now we have to call this to execute async await fn block



//fetch using async await fn
async function getAllUsers(){     //this fn is written after 5 async promises but still it appears first 
    try {
        const response= await fetch('https://jsonplaceholder.typicode.com/users')
        const data= await response.json()    //if await not used then it will show undefined as data iske pass aa hi nhi paayega
        console.log(data[0]);
    } catch (error) {
        console.log("E: " + error);
    }
}
getAllUsers();


//fetch using then and catch
fetch('https://api.github.com/users/hiteshchoudhary')
.then((response) => {
    return response.json()
}).then((data) => {
    console.log(data);
}).catch((error) => console.log(error))


//promise.all also available
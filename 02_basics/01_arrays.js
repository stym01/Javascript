const myArr = [0, 1, 2, 3, 4, 5]
const myHeors = ["shaktiman", "naagraj"]

const myArr2 = new Array(1, 2, 3, 4)

// myArr.shift() //just shift krega left me so ek element delete
// myArr.unshift(46)  //shift towards right but 1st position will become blank hence insert the argument number
// console.log(myArr)

// console.log(myArr.includes(9));
// console.log(myArr.indexOf(3));

const myNewArr=myArr.slice(1,4) //exlude last index
console.log("B" + myNewArr) 
console.log("A" + myArr)

const myn2=myArr.splice(1,4) //include last index and take out the part from it...and hence modify the arr
console.log("d" + myn2)
console.log("c" + myArr)

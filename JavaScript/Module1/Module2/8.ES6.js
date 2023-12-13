// Arrow functions  (Es-> ECMA SCRIPT)

let test1 = ()=>{
      console.log(1)
}

let test2 = (a) =>{
      console.log(a+2)
}


let test3 = (a,b)=>{
      console.log(a*b)
}

test1()
test2(4)
test3(56,4)


// templet literal

console.log(`welcome
to 
semicomnware`)


// Destructuring Arrays

// The destructuring assigment syntax is a java script expression that makes it possible to unpack values
// from arrays, or prpoerties from objects, into variables.

let arr =['Hii','I','Am','Ankit']

//let a=arr[1]
//let b=arr[2]     // acessing element by index

//console.log(a)
//console.log(b)

let [a,b,c,d,e]=arr   //  here i have stored array in varaible

console.log(b)


// Destructuring Objects

let myObj={
      name : 'akshay',
      age : 23,
      gender: 'male',


      address :{
            country :'England',
            city : 'london'
      }
}

let{name :n,age :A ,gender:g,address:{country: C}}=myObj

console.log(n)
console.log(A)
console.log(g)
console.log(C)
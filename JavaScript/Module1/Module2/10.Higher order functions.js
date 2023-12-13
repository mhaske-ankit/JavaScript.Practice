// Higher order function (MAP)

// Map will loop through every element of your array and will perform specific operations that you have provided
// Map method will always return you a new array with your results


const num =[1,2,3,4,5,6,7]

const squaredNum=num.map(function(n){
      return n*n

})

console.log(squaredNum)


// finde returns the first element of an array that satisfy the conditions

const transaction=[1000,20000,3450,-5000,45000,-30000]

const firstWithdrawl=transaction.find(function(n){
      return n<0
})

console.log(firstWithdrawl)


// Finde index function


const firstWithdrawlIndex=transaction.findIndex(function(n){
      return n<0
})

console.log(firstWithdrawlIndex)


// Some method

// some: Condition Check: To get true or false based on a condtion
// It will return true if even 1 element satisfies the conditon


const transaction2=[1000,20000,3450,-5000,45000,30000]

const resultscore=transaction2.some(function(n){
      return n<0
})

console.log(resultscore) 

// Filter method
// filter returns a new array it will return all those elements that matches the specific condition
//if the condition is true it will return the element for that condition and if it is false it will discard that element


let num2=[1,2,3,4,5,6,7,8,34,43,67,82]
 
let evenNo=num2.filter(function(n){
      return n%2==0
})

console.log(evenNo)
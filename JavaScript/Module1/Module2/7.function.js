// Basic funtions in js

function greet(){
      console.log('Welcome to semiconware')
}

greet() // funtion invokation means calling

// parameters and arguments

function add(a,b){
      console.log(a+b)
}

add(50,50)
add(12,12)   // we can call multiple time one function


// Expressions

var a=2+3
console.log(a)

var add =function(a,b){
      return a+b
}

var sum= add  // here change the variable  add to sum

var result=sum(20,80)
console.log(result)
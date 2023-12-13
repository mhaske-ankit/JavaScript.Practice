// loops are the statment that we can use to controle a flow of the program and to do some repeatative

var a = 'Hello World'

for (var i =0; i< 10; i++){
      console.log(a);
}

var i = 0
 for (var i=0; i<10;i++){
      console.log(i)
 }

 // we have an array and we have to square each element of that array

 var num =[2,3,4,5,6,7,8,9];
 var squaredArr = []// declair empty array

 for (var i=0; i<num.length; i++){
      squaredArr.push(num[i]*num[i])
 }
 console.log(squaredArr);


 // while loop

 // A while loop evaluates the condition inside the parenthesis().
 // If the condition evaluates to true,the code inside the while loop is executed.
 // The condition is evaluated again.
 // This process continue until the condition is false.
 // When the conditon evaluates to false, the loop stops.

 // print number 1 to 10

var i=1
var n=10

 while(i<=n){
      console.log(i)
      i++
 }

 // do while loop

 // it execute atleast one time

 var i =5
 var n=10

 do{
      console.log(i)
      i++
}while(i<=n)
 


// For in loop

// In javascript, the for-in loop allows you to loop through the properties of an object.
// The statments of code found within the loop body will be executed once for each property of the object.

var colors={
          primary : 'red',
          secondary : 'blue',
          tertiary : 'orange'
}
// syntax
for(var color in colors){
     console.log(color+'->'+colors[color])
}

// arrays in loop

var colorsArray =['orange','pink','blue','purple','green']

for(var color in colorsArray){
     console.log(color+'->'+colorsArray[color]) // accesing the index of element like ,0 1 2 3
}
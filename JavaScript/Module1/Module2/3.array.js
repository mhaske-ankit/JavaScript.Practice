// Array provides ordered collection of data

var arr= [12,'ferrari',true,34.5]
console.log(arr)


// accesing the element

var a= arr[1]
console.log(a)

// Replace element

arr[1]=['BMW']
console.log(arr)

//* inbuilt javascript Arrays method *//

// pop method= it remove the last element of array 

var arr2=[12,34,56,78,90]

var c=arr2.pop()
console.log(c)
console.log(arr2)


// push method = add the element in last

var d =arr2.push(100)
console.log(d)
console.log(arr2)

// shift method = it works like pop but it remove starting element

var w=arr2.shift()
console.log(w)
console.log(arr2)

// unshift method = it works like push but it add element in starting

var x= arr2.unshift(101)
console.log(x)
console.log(arr2)
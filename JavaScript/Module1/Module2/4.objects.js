// In js bojects are in key and value pair

var person={
            firstname :"virat",
            lastname : "kholi",
            age : 35,
            hobby: "playing cricket",
}

console.log(person)


var cap={
      firstname :"stev",
      lastname :"rogers",
      age :102,

      friends :['Bucky barnes','Bruce Baner','stony stark'],

      isavenger : true,

      address :{
            state :'New York',
            city :{
                  name :'brooklyn',
                  pincode :12334,

            }
      }

}

// access the value

console.log(cap.friends[2])

console.log(cap.address.city.name)  // access city name =

// add properties
 
cap.movies =['age of ultron','civil war','first avenger']
console.log(cap)

// delete properties

delete cap.age
console.log(cap)
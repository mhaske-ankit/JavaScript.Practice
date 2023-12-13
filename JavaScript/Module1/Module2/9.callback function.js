// call back function

function printFirstName(firstname, cb){
      console.log(firstname)
      cb('kohli')
}


function printLastname(lastname){
      console.log(lastname)
}

printFirstName('virat', printLastname)
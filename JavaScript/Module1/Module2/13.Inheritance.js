class abc {
      constructor(_name,_age){

            this.name=_name
            this.age=_age

      }
}



class pqr extends abc{
      constructor(_name,_age,_classstrength){
            super(_name,_age)
            this.class=_classstrength
      }

}

let pqr2 =new pqr('Monika',22,45)   // here I have create object
console.log(pqr2)

let abc1 =new abc('stev',23)
console.log(abc1)
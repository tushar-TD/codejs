//arrow function =>
const user={
usern:"saloni",
price:999,

welcome:function(){
console.log(`${this.usern}, welcome to my website`)
    }

}

// user.welcome()
// user.usern="Ram"
// user.welcome()
//window is browser object which is empty


//console.log(this)

// function yes(){
//     console.log(this)
// }
// yes()

// const yup = ()=>{
//     //let userName="Tushar"
//     console.log(this.userName);
// }

// yup()//still it undefined

// const addtwo=(num1,num2)=>{
//     return num1+num2
// }
// const addtwo=(num1,num2)=>  num1+num2

const addtwo=(num1,num2)=>  (num1+num2
 )
console.log(addtwo(2,90))

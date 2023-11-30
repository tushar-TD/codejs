//singleton object-const tinerUser=new Object();
//non singleton obj- const tinderUser={}

const tinderUser={}
tinderUser.id="123";
tinderUser.name="Samule"
tinderUser.loggedIn=false;
//console.log(tinderUser)

const regularUser={
    email:"trd@gmail.com",
    fullName:{
        userName:{
            firstname:"Tushar",
            lastname:"Dhanorkar"
        }
    }
}

//console.log(regularUser.fullName.userName.firstname)

const obj1={1:"a",2:"b"}
const obj2={3:"c",4:"d"}
const obj4={6:"m",90:"n"}
//const obj3={obj1,obj2}
//const obj3=Object.assign({},obj1,obj2,obj4)
// const obj3={...obj1,...obj2}
// console.log(obj3)

console.log(Object.keys(regularUser))
console.log(Object.values(regularUser))
console.log(Object.entries(regularUser))
console.log(regularUser.hasOwnProperty('fullName'))
//singleton-when we create object by constructor.
//Object.create

const MySym=Symbol("Key1")
const jsUser={
    namee:"tushar",
    [MySym]:"MyKey1",
    age:21,
    location:"Mumbai",
    mail:"gmail.com",
    loggedIn:false,
    lastLoggedId:["monday","saturday"]
}
Object.freeze(jsUser)
console.log(jsUser["namee"])
console.log( jsUser[MySym])
console.log( jsUser)

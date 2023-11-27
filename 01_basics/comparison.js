console.log(null>1)
console.log(null>=0)
console.log("01">=0)
console.log(null==0)
console.log(undefined==0)

//===strict check(values+datatypes)
//primitive datatype->call by value-->string,Number,Boolean,undefined,Symbol,null,bigint
const id=Symbol('123')
console.log(typeof(id))

//Non Primitive->Array,Object,Functions
//datatypes of nonpremitive=Object
//Array
const heroes=["hitman","batman","spiderman"]
//Object
const herooes={
    nam:"Tushar",
    age:23
}
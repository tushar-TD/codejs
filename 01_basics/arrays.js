const marvelHeroes=["thor","Ironman","Spiderman"]
const dcHeroes=["superman","flash"]
//marvelHeroes.push(dcHeroes)
const heroes=marvelHeroes.concat(dcHeroes)
//console.log(marvelHeroes[3][0])
const newH=[...marvelHeroes,...dcHeroes]
//spread=(...)
const another_array=[1,2,3,[3,4,5,[8,9,10]],90]
const real_array=another_array.flat(Infinity)
console.log(real_array)
console.log(Array.isArray(real_array))
console.log(typeof(real_array))
console.log(Array.from({name:"Tushar"}))//making array of key or an value

let score1=100
let score2=200
let score3=300
console.log(Array.of(score1,score2,score3))
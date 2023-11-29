const nam="Tushar"
const repoCount=true;
const t=(nam+repoCount)
console.log(typeof(t))
console.log(typeof(repoCount))
console.log(`Hello my name is ${nam} and my repo is ${repoCount}`)

const gameName=new String(`tushar`)
// console.log(gameName[0])
// console.log(gameName.length)
// console.log(gameName.toUpperCase())
// console.log(gameName.charAt(5))
// console.log(gameName.indexOf('a'))
const gname=gameName.substring(0,4)
console.log(gname)
const nname=gameName.slice(-6,3)
console.log(nname)

const mname="          gameName       "
console.log(mname)
const yname=mname.trim()
console.log((yname))
const url="https://www.youtube.com/watch?v=fozwNnFunlo&list=PLu71SKxNbfoBuX3f4EOACle2y-tRC5Q37&index=11&t=246s"

console.log(url.replace('youtube',"tushar"))
console.log(url.includes('youtube'))
console.log(mname.trim.split('e'))

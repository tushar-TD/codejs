//immediatly invoked function expression(iife)
// if we have single where database connection is establised and if we want it to invoked when we open File
// we use iife. and sometime globle variable create pollute issue in function.

(function chai(){
    console.log("db connected")
})
();//semicoln is manaditory if we have more iife

((name)=>{
    console.log(`bd connected too ${name}!`)
})('Tushar')
//multiple argument.
let add = function(a, b, c){
    return a+b +c
}

let result = add (10,1, 5)

console.log(result)

//Default argument.

let getScoreText = function (name = null ,score = 0) {
return `name : ${name} score : ${score}`
}

console.log(getScoreText("ahmed",100))

let name = 'Ahmed'
let age = 28 
console.log(`Hay , may name ${name}! and I'm ${age} years old`)

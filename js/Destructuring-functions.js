function rand({min = 10, max = 1000}){
    const valor = Math.random() * (max - min) + min
    return Math.floor(valor)
}

const obj0 = {min: 0, max: 86}
const obj1 = rand({min: 50, max: 3000})

console.log(rand(obj0))
console.log(obj1)
console.log(rand({}))
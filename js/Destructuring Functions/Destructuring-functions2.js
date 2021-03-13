function rand([min = 0, max = 2000]){
    if(min > max) [min, max] = [max, min]
    const valor = Math.random() * (max - min) + min

    return Math.floor(valor);
}

const [a, b] = [100, 200]
const array = [800, 300]

console.log(rand([a, b]))
console.log(rand(array))
console.log(rand([992]))
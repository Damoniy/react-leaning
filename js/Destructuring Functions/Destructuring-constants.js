const person = {
    name: 'Maria Clara',
    age: 16,
    adress: {
        street: 'Saint Louis',
        number: 277,
        city: 'San Fierro'
    }
}

const{name: n, age: a, adress: ad} = person
const{adress: {street: s}} = person

console.log(n, a, ad)
console.log(n, a, s)
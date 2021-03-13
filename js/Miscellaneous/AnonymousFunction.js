const soma = function(x, y) {
    return x + y
}

const result = function(a, b, operation = soma){
    console.log(operation(a, b))
}

result(5, 7)
result(10, 2, plus = (a, b) => a + b)
result(5, 5, multiply = (a, b) => a * b)
result(10,11, minus = (a, b) => a - b)
result(10, 5, divide = (a, b) => a / b)

const pessoa = {
    falar: function() {
        console.log('Olá')
    }
}

pessoa.falar()
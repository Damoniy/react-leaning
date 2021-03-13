let students = ['Ana', 'Paul', 'Bob']

console.log(students)
console.log(students[0])

students = new Array('Natasha', 'Steve', 'Erick')
console.log(students)
console.log(students[0])

students.push('Bob')
console.log(students.length)

students.sort()
console.log(students)

delete students[0]

students.sort()
console.log(students)

students.splice(3, 1)
console.log(students)

students.splice(0, 1, "Bob")
console.log(students)

students.splice(0, 0, "Rakkan", "Nautilus")

students.pop()
console.log(students)

students.unshift('Xayah')
console.log(students)

students.shift()
console.log(students)

const derivated = students.slice(0, 2)
console.log(derivated)
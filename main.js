console.log('desde main')

let nombre = 'diego'

// console.log(1)
// console.log(2)
// console.log(3)
// console.log(4)
// console.log(5)

// for(inicializacion; condicion. actualizacion)
for(i=30; i <= 50 ; i += 5){
    console.log(i)
}

// i++ ====> i = i  + 5

// 30 35 40 45 50 
// i = 30 
// 

// length.        1     2         3
const frutas = ['piña','uva','melon','tomate','aguacate']
// position        0.     1.     2
console.log(frutas)
console.log(frutas[1])

console.log('FRUTAS PLURAL')
console.log(frutas[0] + 's')
console.log(frutas[1] + 's')
console.log(frutas[2] + 's')


console.log('FRUTAS PLURAL con LOOP')
// for(i=0; i < frutas.length ;i++){
//     console.log(frutas[i] + 's')
// }

// console.log('FRUTAS PLURAL con LOOP INVERTIDO')
// for(i=frutas.length -1 ;i >= 0 ;i--){
//     console.log(frutas[i] + 's')
// }


console.log('FRUTAS PLURAL con LOOP INVERTIDO CON REVERSE')
for(i=0; i < frutas.length ;i++){
    console.log(frutas.reverse()[i] + 's')
}
// 0 1 2
// 2. 1  0

// 4 3 2 1 0 -1 -2 -3 -infitno
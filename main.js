console.log('conditional rendering')

// Array Mario Luigi Bowser Toad Peach

// let marioCharacters = ['Mario','Luigi','Bowser','Toad','Peach','Star']

// console.log(marioCharacters)
// // console.log(marioCharacters[0])
// // console.log(marioCharacters[1])
// // console.log(marioCharacters[2])
// // console.log(marioCharacters[3])
// // console.log(marioCharacters[4])

// // for(inicializacion;condicion;actualizacion)


// // i = 7. 7 >= 0 marioCharacters[7]
// for(i=marioCharacters.length -1; i >= 0 ;i--){
//     console.log(marioCharacters[i])
// }


// let numbers = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20]

// // for(i=0;i < numbers.length; i = i + 3){
// //     console.log(i)
// //     console.log(numbers[i])

// // }

// let marioGoodCharacters = []

// for(i=0; i < marioCharacters.length ; i++ ){
//     console.log(marioCharacters[i])
//     if(marioCharacters[i] != 'Bowser'){
//         marioGoodCharacters.push(marioCharacters[i])
//     }
// }


// console.log(marioGoodCharacters)

// let filteredCharacters = marioCharacters.filter( (character)=> character != 'Bowser' )
// console.log(filteredCharacters)

// console.log( numbers.filter( (elemento)=> elemento > 7 ) )
// console.log( numbers.filter( (elemento)=> elemento != 7 ) )
// console.log( numbers.filter( (elemento)=> elemento % 3 == 0 ) )
// console.log( numbers.filter( (elemento)=> elemento > 9 ) )
// console.log( numbers.filter( (elemento)=> elemento < 16 ) )

// console.log( numbers.filter( (elemento)=> elemento > 9 && elemento < 16 ) )

// let newNumbers = []

// for(i=0; i < numbers.length ; i = i + 1){
//     console.log(numbers[i] *  4 )
//     newNumbers.push(numbers[i] *  4) 
// }
// console.log(newNumbers)

// let mapNumbers = numbers.map( numero => numero * 4 )
// console.log(mapNumbers)

// console.log( marioCharacters )
// console.log( marioCharacters.map( (character)=> character + 's' ) )


// marioCharacters.forEach( (item)=>{
//     console.log(item)
// })

// console.log('Do while')
// let j = 20
// do {
//     console.log(j)
//     /// cualuiqer coda
//     j++
// }while( j < 10)


// PSEUDO CODIGO
// crear funcion que tome un parametro sueldo
// DONE: definir y asignar variable
// condicional o ternario para vlaidr is sueldo es mayor o menor a mil
// retornaria 'Debes pagar un impuesto de 10%'
// retornaria 'Debes pagar un impuesto de 5%'



let sueldo = 5000
// let mensaje = ''
// if(sueldo >= 1000){
//     mensaje = 'Debes pagar un impuesto de 10%'
// }else{
//     mensaje = 'Debes pagar un impuesto de 5%'
// }

// condicional
//if( condicion){
//    verdadero
//}else{
//    falso
//}

// ganar mas de 100 
// ganar menos o igual 100


// si ganas entre 0 y 500
// signaas entre 500 y 700
// si ganas en te 700 y 1200
// o si ganas mas de 1200


// ternary operator
// // (condicion) ? verdadero :  falso
// let mensaje =  (sueldo >= 1000) ?  'Debes pagar un impuesto de 10%' : 
//                     (sueldo >= 1000) ?  'Debes pagar un impuesto de 10%' : 
//                         (sueldo >= 1000) ?  'Debes pagar un impuesto de 10%' : 'Debes pagar un impuesto de 5%'

// console.log(mensaje)


// // document.getElementById('content').innerHTML = '<h1>'+ mensaje+'</h1>'
// document.getElementById('content').insertAdjacentHTML(
//     'afterbegin',
//     `<p>${mensaje}</p>`
//   );
  



let persona =  {
  nombre: 'alicia',
  apellido: 'Benavente',
  edad: 27,
  skill: ['js','python','react'],
  programar: function(){
    console.log('estoy programando')
  },
  'lugar de nacimiento': 'madrid'

}


// Objeto Perro,. nombre, raza , metodo ladrar 'Wow'
let perro = {
  nombre: 'kiv',
  raza: 'gato',
  ladrar: function () {
    console.log('Wow')
  }
}


// PSEUDOCODIGO
// DONE: crear un boton en html
// DONE: crear una funcion que cambie el texto
// DONE:     cambiar el contenido del texto a 'Nuevo titulo'
// DONE:      Cambior el color de fondo a rojo
// cuando le de click al boton en html ejecutar una funcion en js



// PSEUDOCODIGO
// cuand le de click a un boton saludar a cada persona de forma aleatoria
// DONE: cuando le de click a un boton ejectuar una funciona

function changeTitle(){
  console.log('changeTitle')
  let nombres = ['aaron','alicia','miguel','davinia','alberto','jose']
  let colores = ['red','blue','green','yellow','purple']
  document.getElementById('title').innerHTML =  "hola "  +  nombres[ Math.floor(Math.random() * nombres.length)]
  document.getElementById('title').style.backgroundColor = colores[ Math.floor(Math.random() * colores.length)] 
}

// changeTitle()



// PSEUDOCODIGO

// cuando le de click sobre el boton llamar una funcion
function lanzarDados(){
  console.log('lanzarDados')
  // modificar el valor del dado 1 y 2 en hmtl
  document.getElementById('dado1').innerHTML = Math.ceil(Math.random() * 6)
  document.getElementById('dado2').innerHTML = Math.ceil(Math.random() * 6)
}
// generar dos valores aleatorios 1 - 6




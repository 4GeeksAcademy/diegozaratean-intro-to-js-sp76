console.log('desde main')


// let nombre = 'diego'
// console.log('Antes de la funcion ', nombre )
// function saludarAlumno(nombre){
//     console.log('Dentro de la funcion ', nombre )
//     console.log('hola ' + nombre)
// }
// // console.log('Despeus÷ de la funcion ', nombre )
// saludarAlumno('Jose')
// saludarAlumno('Alicia')
// saludarAlumno('Yara')


// function transportar(origen, destino){
//     console.log('saliendo de ' + origen)
//     console.log('transportando')
//     console.log('llegando a ',destino)
// }

// transportar('casa','parque')
// transportar('parque','oficina')
// transportar('oficina','casa')
function suma(num1,num2){
    return num1 + num2
}

// console.log(suma(2,2)) // 4
// console.log(suma(1,4)) // 5 
// console.log(suma(0,6)) // 6
// console.log(suma(12,3)) // 15

// function admitido(edad){
//     if(edad >= 18){
//         return 'Puedes entrar'
//         console.log('flag 6')
//     }else{
//         return 'Tienes que esperar'
//     }
// }

// console.log(admitido(15)) // 'Tienes que esperar'
// console.log(admitido(22)) // 'Puedes entrar'


// function calculoCuotaAutonomo(ventasMensuales){
//     return ventasMensuales * 0.2
// }

// document.getElementById('cantidad').innerText = calculoCuotaAutonomo(10000)



// console.log('ANTES se ejecuto window onload');
// window.onload = function() {

//     console.log('se ejecuto window onload');

// }
// console.log('DESPUES se ejecuto window onload');


// Funciones declarativas
saludoDeclaratibvo()
function saludoDeclaratibvo(){
    console.log('hola declarativo')
}

// funciones de expresión 
const saludoEpresion = function(){
    console.log('hola expresion')
}
saludoEpresion()

// funciones de flecha Arrow 
const saludoFlecha = ()=>{
    console.log('hola flecha')
}
saludoFlecha()


// PSEUDO Codigo  GEnerador de excusas
// desarrolalr un generador de excusas
// 1. modificar html desde Js
// 2. declarar variables (opciones entre las que eliges)
// 3. tomar un elemento aleatorio dentro del array Who
// 4. tomar un elemento aleatorio dentro del array action
// 5. tomar un elemento aleatorio dentro del array what
// 6. tomar un elemento aleatorio dentro del array when
// 7. unir palabras aleatorias y crear una frase
// 8. asignar frase al html desde js

console.log('loops and arrays')

// Array Mario Luigi Bowser Toad Peach

let marioCharacters = ['Mario','Luigi','Bowser','Toad','Peach','Star']

console.log(marioCharacters)
// console.log(marioCharacters[0])
// console.log(marioCharacters[1])
// console.log(marioCharacters[2])
// console.log(marioCharacters[3])
// console.log(marioCharacters[4])

// for(inicializacion;condicion;actualizacion)


// i = 7. 7 >= 0 marioCharacters[7]
for(i=marioCharacters.length -1; i >= 0 ;i--){
    console.log(marioCharacters[i])
}


let numbers = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20]

// for(i=0;i < numbers.length; i = i + 3){
//     console.log(i)
//     console.log(numbers[i])

// }

let marioGoodCharacters = []

for(i=0; i < marioCharacters.length ; i++ ){
    console.log(marioCharacters[i])
    if(marioCharacters[i] != 'Bowser'){
        marioGoodCharacters.push(marioCharacters[i])
    }
}


console.log(marioGoodCharacters)

let filteredCharacters = marioCharacters.filter( (character)=> character != 'Bowser' )
console.log(filteredCharacters)

console.log( numbers.filter( (elemento)=> elemento > 7 ) )
console.log( numbers.filter( (elemento)=> elemento != 7 ) )
console.log( numbers.filter( (elemento)=> elemento % 3 == 0 ) )
console.log( numbers.filter( (elemento)=> elemento > 9 ) )
console.log( numbers.filter( (elemento)=> elemento < 16 ) )

console.log( numbers.filter( (elemento)=> elemento > 9 && elemento < 16 ) )

let newNumbers = []

for(i=0; i < numbers.length ; i = i + 1){
    console.log(numbers[i] *  4 )
    newNumbers.push(numbers[i] *  4) 
}
console.log(newNumbers)

let mapNumbers = numbers.map( numero => numero * 4 )
console.log(mapNumbers)

console.log( marioCharacters )
console.log( marioCharacters.map( (character)=> character + 's' ) )


marioCharacters.forEach( (item)=>{
    console.log(item)
})

console.log('Do while')
let j = 20
do {
    console.log(j)
    /// cualuiqer coda
    j++
}while( j < 10)

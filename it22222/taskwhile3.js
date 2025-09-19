/**
 * посчитать колво последовательных
 * точек в строке
 */

const text = 'Тестируем.. вайл...'

let index = 0
let counter = 0

while (index++ < text.length){
if(text[index]=== '.'){
    console.log(text[index]) 
    counter++ 
}
}
console.log(counter)

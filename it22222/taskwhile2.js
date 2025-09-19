/**
 * дано число, не меньше двух
 * 
 * вывести наименьший натуральный 
 * делитель, отличный от 1
 */

const N =  56
let div = 2

// while (div <= N){
//     if (N % div === 0){
//         console.log(div)
//         break
//     }
//     div++
// }

while (div <= N && N % div !== 0){
    div++
}
console.log (div)
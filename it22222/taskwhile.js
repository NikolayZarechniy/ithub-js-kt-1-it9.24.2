/**
 * вывести квадраты натуральных чисел,
 * не превосходящие N, по возрастанию
 */
const n = 10
let i = 1

// while (i**2 <= n){
//     console.log (i ** 2)
//     i++   
// }


// while (true) {
//     const isquare = i++ ** 2
//     if (isquare > n){
//         break
//     }
//     console.log(isquare)
//  }


do{
console.log(i**2)
i++
} while (i** 2<= n)
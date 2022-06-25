/* Every
Реализуйте метод every, принимающий в качестве параметров массив и пре­
дикативную функцию. Напишите две версии: одну с использованием цикла,
а вторую с применением метода some.

Implement every() as a function that takes an array and a predicate function
as parameters. Write two versions, one using a loop and one using the some(). */

'use strict';

let arr = [2,4,3];

console.log( myEvery(arr, x => x > 1 && x < 5) ); //-> true

 function myEvery (arr, callback) {
    let every = true;
    for (let el of arr) {
        callback(el) ? "" : every = false;  
    }
    return every;
} 

function myEvery (arr, callback) {
    let every = true;
    let l = arr.length - 1;
    let arr2 = [];
    while (l > 0 && every) {
        arr2[0] = arr[l];
        every = arr2.some(callback);
        l--;
    }
    return every;
}
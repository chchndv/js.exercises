/* Every
Реализуйте метод every, принимающий в качестве параметров массив и пре­дикативную функцию. 
Напишите две версии: одну с использованием цикла,а вторую с применением метода some.
en - Implement every() as a function that takes an array and a predicate function
as parameters. Write two versions, one using a loop and one using the some(). 
@format
*/

"use strict";

//for loop version
function myEvery(arr, callback) {
  let every = true;
  for (let el of arr) {
    callback(el) ? "" : (every = false);
    if (!every) break;
  }
  return every;
}

//some() version
function myEvery(arr, callback) {
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

let arr = [1, 2, 3];
const callback = (x) => x < 5;
console.log(myEvery(arr, callback)); //-> true
arr.push(6);
console.log(myEvery(arr, callback)); //-> false

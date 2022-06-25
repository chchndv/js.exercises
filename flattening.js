/* Flattening
Use the reduce method in combination with the concat method to “flatten”
an array of arrays into a single array that has all the elements of the original
arrays. */

'use strict';

const arr1 = [3, 5, 7];
const arr2 = ['seven', 'nine', 'eleven'];
const arrOfArr = [arr1, arr2];
let flatten = [];

//ver. 1
flatten = arrOfArr.reduce( (a, b) => a.concat(b) );

//ver. 2 with for/concat
for (let el of arrOfArr) { flatten = flatten.concat(el); } 

console.log(flatten); //-> [ 3, 5, 7, 'seven', 'nine', 'eleven' ]
/*FizzBuzz
Write a program that uses console.log to print all the numbers from 1 to 100,
with two exceptions. For numbers divisible by 3, print "Fizz" instead of the
number, and for numbers divisible by 5 (and not 3), print "Buzz" instead.
When you have that working, modify your program to print "FizzBuzz" for
numbers that are divisible by both 3 and 5 (and still print "Fizz" or "Buzz"
for numbers divisible by only one of those).
@format
*/

"use strict";

let arr = [];

for (var i = 1; i < 101; i++) {
  arr.push(i);
}

//with ternary operator
for (let num of arr) {
  arr[num] % 3 !== 0 && arr[num] % 5 !== 0
    ? ""
    : arr[num] % 3 === 0 && arr[num] % 5 !== 0
    ? (arr[num] = "Fizz")
    : arr[num] % 3 !== 0 && arr[num] % 5 === 0
    ? (arr[num] = "Buzz")
    : (arr[num] = "FizzBuzz");
}

//same with if-else
for (let num of arr) {
  if (arr[num] % 3 !== 0 && arr[num] % 5 !== 0) {
    continue;
  } else if (arr[num] % 3 === 0 && arr[num] % 5 !== 0) {
    arr[num] = "Fizz";
  } else if (arr[num] % 3 !== 0 && arr[num] % 5 === 0) {
    arr[num] = "Buzz";
  } else {
    arr[num] = "FizzBuzz";
  }
}

arr.forEach((x) => console.log(x));
/* -> 1 2 Fizz 4 Buzz 6 7 8 Fizz 10 11 Fizz 13 14 FizzBuzz 16 17 Fizz 
19 Buzz 21 22 23 Fizz 25 26 Fizz 28 29 FizzBuzz 31 32 Fizz 34 Buzz 36 37 38 Fizz 40 41 Fizz 43 44 
FizzBuzz 46 47 Fizz 49 Buzz 51 52 53 Fizz 55 56 Fizz 58 59 FizzBuzz 61 62 Fizz 64 Buzz 
66 67 68 Fizz 70 71 Fizz 73 74 FizzBuzz 76 77 Fizz 79 Buzz 81 82 83 Fizz 85 86 
Fizz 88 89 FizzBuzz 91 92 Fizz 94 Buzz 96 97 98 Fizz 100 */

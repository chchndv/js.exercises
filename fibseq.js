/** @format  
 Фибоначи функция, сделанная без использования Генераторов с возможностью 
 задать кол-во цифр, начальное число, начальный шаг прибавления
*/
"use strict";

function fibSeq(take, start, step) {
  let x = start,
    y = x + step,
    seq = [];
  seq.push(x, y);

  let n = x;
  while (take - 2 > 0) {
    n == x ? (seq.push((x += y)), (n = y)) : (seq.push((y += x)), (n = x));
    take--;
  }
  return seq;
}

console.log(fibSeq(15, 5, 5).join(" ")); /* ->
5 10 15 25 40 65 105 170 275 445 720 1165 1885 3050 4935
*/

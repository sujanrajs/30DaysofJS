/* 
Closure

JavaScript allows writing function inside an outer function.
We can write as many inner functions as we want.

If inner function access the variables of outer function then it is called closure.
*/

function outerFunction() {
  let count = 0;
  function innerFunction() {
    count++;
    return count;
  }
  return innerFunction;
}
const inoutfun = outerFunction();

console.log(inoutfun()); // 1
console.log(inoutfun()); // 2
console.log(inoutfun()); // 3

function outFun() {
  let count = 0;
  function plusOne() {
    count++;
    return count;
  }
  function minusOne() {
    count--;
    return count;
  }
  return {
    plusOne: plusOne(),
    minusOne: minusOne(),
  };
}
const funs = outFun();

console.log(funs.plusOne); // 1
console.log(funs.minusOne); // 0

function add(a: number, b: number): number {
  return a + b;
}

function addSafe(a: number | string, b: number | string): number | string {
  if (typeof a === 'number' && typeof b === 'number') {
    return a + b;
  } else if (typeof a === 'string' && typeof b === 'string') {
    return a + b; // String concatenation 
  } else if (typeof a === 'number' && typeof b === 'string') {
    return a + parseFloat(b);
  } else if (typeof a === 'string' && typeof b === 'number') {
    return parseFloat(a) + b;
  } else {
    return NaN; //Handle other cases like null, undefined etc.
  }
}

let result1 = addSafe(10, 5); // 15
let result2 = addSafe("10", 5); // 15
let result3 = addSafe(10, "5"); // 15
let result4 = addSafe("hello", 5); // NaN
let result5 = addSafe("hello", "world"); // "helloworld"
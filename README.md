# TypeScript Type System Runtime Error

This example demonstrates a weakness in TypeScript's type system where it fails to catch a potential runtime error involving incompatible types in arithmetic operations.

The function `add` is defined to accept two numbers and return their sum. However, the code calls `add` with a string and a number.  While TypeScript won't flag this as a compile-time error, it will result in `NaN` at runtime. 

A better type system would ideally catch this kind of error during compilation.
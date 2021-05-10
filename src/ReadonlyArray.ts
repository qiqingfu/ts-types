// https://www.typescriptlang.org/docs/handbook/2/objects.html#the-readonlyarray-type

type MyReadonlyArray<T> = readonly T[]

const values: MyReadonlyArray<string> = ['a', 'b', 'c']

/*
  values[0] = "x";      // Type error
  values.push("x");     // Type error
  values.pop();         // Type error
  values.splice(1, 1);  // Type error
*/

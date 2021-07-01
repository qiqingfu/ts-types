// https://github.com/type-challenges/type-challenges/blob/master/questions/529-medium-absolute/README.md

type constraint = string | number | bigint

type toString<T extends constraint> = `${T}`

export type Absolute<T extends constraint, U = toString<T>> = U extends `-${infer R}` ? R : U

type Result = Absolute<-100>; // expected to be "100"
type Result1 = Absolute<'-200'>; // expected to be "200"
type Result2 = Absolute<300>; // expected to be "300"
type Result3 = Absolute<-400n>; // expected to be "400"
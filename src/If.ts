// https://github.com/type-challenges/type-challenges/blob/master/questions/268-easy-if/README.md

type If<C extends boolean, T, F> = C extends true ? T : F

type A = If<true, 'a', 'b'> // expected to be 'a'
type B = If<false, 'a', 'b'> // expected to be 'b'

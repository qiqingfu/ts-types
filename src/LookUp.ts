// https://github.com/type-challenges/type-challenges/blob/master/questions/62-medium-type-lookup/README.zh-CN.md
// https://github.com/type-challenges/type-challenges/issues/171

/**
 * (Cat extends {type: 'dog'} ? Cat : never) | (Dog extends {type: 'dog'} ? Dog : never)
 */
export type LookUp<T, U extends string> = T extends { type: U } ? T : never

interface Cat {
  type: 'cat'
  breeds: 'Abyssinian' | 'Shorthair' | 'Curl' | 'Bengal'
}

interface Dog {
  type: 'dog'
  breeds: 'Hound' | 'Brittany' | 'Bulldog' | 'Boxer'
  color: 'brown' | 'white' | 'black'
}

type MyDog = LookUp<Cat | Dog, 'dog'> // expected to be `Dog`

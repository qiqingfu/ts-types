/**
 * Insert a new type at the beginning of the specified collection type
 */

export type UnShift<T extends any[], R> = [R, ...T]

type arr1 = ['a', 'b', 'c', 'd']
type arr2 = [3, 2, 1]

type re1 = UnShift<arr1, 'e'> // expected to be ['e' ,'a', 'b', 'c', 'd']
type re2 = UnShift<arr2, 0> // expected to be [0 ,3, 2, 1]

/**
 * Add the given type to the end of the existing type collection
 */
export type Push<T extends any[], R> = [...T, R]

type arr1 = ['a', 'b', 'c', 'd']
type arr2 = [3, 2, 1]

type re1 = Push<arr1, 'e'> // expected to be ['a', 'b', 'c', 'd', 'e']
type re2 = Push<arr2, 0> // expected to be [3, 2, 1, 0]

// https://github.com/type-challenges/type-challenges/blob/master/questions/15-medium-last/README.zh-CN.md
// reference

/**
 * 一开始的实现想法是怎么能得到 元组的长度 - 1 的值
 */
export type Last<T extends any[]> = T extends [any, ...(infer L)] ? T[L['length']] : never

type arr1 = ['a', 'b', 'c']
type arr2 = [3, 2, 1]

type tail1 = Last<arr1> // expected to be 'c'
type tail2 = Last<arr2> // expected to be 1

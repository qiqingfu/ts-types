// https://github.com/type-challenges/type-challenges/blob/master/questions/15-medium-last/README.zh-CN.md
// reference

/**
 * 开始的实现想法是怎么可以得到元组长度-1的的下标, 通过下标键入元组的最后一个元素类型
 */
export type Last<T extends any[]> = T extends [any, ...(infer L)] ? T[L['length']] : never

type arr1 = ['a', 'b', 'c']
type arr2 = [3, 2, 1]

type tail1 = Last<arr1> // expected to be 'c'
type tail2 = Last<arr2> // expected to be 1

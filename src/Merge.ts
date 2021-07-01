// https://github.com/type-challenges/type-challenges/blob/master/questions/599-medium-merge/README.md
// https://github.com/type-challenges/type-challenges/issues/608 非常棒的实现

import { MyExclude } from './Exclude'

type First = {
  a: number
  b: string
}

type Second = {
  a: string
  c: boolean
}

type FindSameKey<T, U> = keyof (T | U)

type RemoveObjectKey<T, U extends keyof T> = {
  [K in MyExclude<keyof T, U>]: T[K]
}

/**
 *  问题：将两个类型合并, 第二个类型的键覆盖第一个类型的键
 *
 * 思路:
 *   1.使用 keyof (First | Second) 找到 First 和 Second 共同的键 a
 *   2.删除 First 类型中的键值 a, 只剩下 { b: string }
 *   3.再将 First 类型 { b: string } 和 Second类型组成交叉类型
 */

export type Merge<T extends object, U extends object, P = RemoveObjectKey<T, FindSameKey<T, U>>> = {
  [K in keyof (P & U)]: (P & U)[K]
}

type Result = Merge<First, Second>
/**
 * {
 *   a: string,
 *   b: string,
 *   c: boolean
 * }
 */

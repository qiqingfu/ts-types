// 自己在项目中遇到的问题

/**
 * 思路:
 * 1. 假设这样使用 SetOptional<{a: number, b: string}, 'b'>。将 b 属性设置为可选的
 * 2. 可以使用交叉类型，应该什么和什么交叉呢?  应该是必选的和可选的进行交叉
 * 3. {a: number} & {b?: string} 的交叉结果为 {a: number, b?: string}
 * 4. 因此先排除掉所有可选的属性，其次再排除掉所有必选的属性。
 */
import { MyExtract } from './Extract'
import { MyExclude } from './Exclude'

export type SetOptional<T, U extends keyof T> = {
  [P in MyExclude<keyof T, U>]: T[P]
} &
  {
    [P in MyExtract<keyof T, U>]?: T[P]
  }

type A = {
  a: number
  b: string
}

type Result = SetOptional<A, 'b'>

// Result Type
/**
 * {
 *   a: number,
 *   b?: string
 * }
 */

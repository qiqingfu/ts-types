// https://github.com/type-challenges/type-challenges/blob/master/questions/296-medium-permutation/README.md
// https://github.com/type-challenges/type-challenges/issues/614

import { MyExclude } from './Exclude'

type Permutation<T, K = T> = [T] extends [never]
  ? []
  : K extends K
  ? [K, ...Permutation<MyExclude<T, K>>]
  : never

/**
 *   详细步骤, 条件判断 extends 遵循乘法分配律
 *
 *   T = 'A' | 'B' | 'C'   K = 'A' | 'B' | 'C'
 *   K extends K 触发分布式行为
 *
 *   ('A' extends 'A' | 'B' | 'C')     [step-1]
 * | ('B' extends 'A' | 'B' | 'C')     [step-2]
 * | ('C' extends 'A' | 'B' | 'C')     [step-3]
 *
 *   ['A', ...Permutation<'B' | 'C'>]
 *
 *   ('B' extends 'B' | 'C')
 * | ('C' extends 'B' | 'C')
 *
 * ['B', 'C'] | ['C', 'B']
 * ['A', ...[['B', 'C'] | ['C', 'B']]]  ==> ['A', 'B', 'C'] | ['A', 'C', 'B']
 */

type perm = Permutation<'A' | 'B' | 'C'> // ['A', 'B', 'C'] | ['A', 'C', 'B'] | ['B', 'A', 'C'] | ['B', 'C', 'A'] | ['C', 'A', 'B'] | ['C', 'B', 'A']

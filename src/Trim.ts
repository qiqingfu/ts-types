// https://github.com/type-challenges/type-challenges/blob/master/questions/106-medium-trimleft/README.md
// https://www.typescriptlang.org/docs/handbook/release-notes/typescript-4-1.html#template-literal-types

type Space = ' ' | '\n' | '\t'

export type TrimLeft<T extends string> = T extends `${Space}${infer R}` ? TrimLeft<R> : T

/**
 * step:
 *  '  Hello World  '
 * 1. R -> '  Hello World '
 * 2. R -> '  Hello World'
 * 3. '  Hello World' 不符合 T extends `${infer R}${Space}` 条件判断, 则直接返回 T 类型
 */
export type TrimRight<T extends string> = T extends `${infer R}${Space}` ? TrimRight<R> : T

/**
 * Trim 是 TrimLeft 和 TrimRight 的结合使用
 * A Better Answer: //github.com/type-challenges/type-challenges/issues/481
 */
export type Trim<T extends string> = TrimRight<TrimLeft<T>>

/**
 * test
 */
type Str = TrimLeft<'  Hello World  '> // expected to be 'Hello World  '

type Str1 = TrimRight<'  Hello World  '> // expected to be '  Hello World'

type Str2 = Trim<'  Hello World  '> // expected to be 'Hello World'

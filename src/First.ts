import { MyExtract } from './Extract'

/**
 * 实现方式之一
 */
type First<T> = T[MyExtract<keyof T, '0'>]

/**
 * 另一种实现方式, 借助 infer
 * https://www.typescriptlang.org/docs/handbook/release-notes/typescript-2-8.html#type-inference-in-conditional-types
 */

type _First<T extends any[]> = T extends [infer U, ...any[]] ? U : never

type head1 = First<['a', 'b', 'c']> // expected to be 'a'
type head2 = First<[3, 2, 1]> // expected to be 3
type head3 = First<[]> // expected to be never

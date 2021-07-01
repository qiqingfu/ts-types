// https://github.com/type-challenges/type-challenges/blob/master/questions/531-medium-string-to-union/README.md

/**
 * Notes: 联合类型
 *   有重复的联合类型成员时, 将重复的值去重
 * 
 * type U = 1 | 2 | 3 | 1 | 2
 *      U = 1 | 2 | 3
 */

/**
 * 思路:
 * 肯定是需要把 '123' 依次拆开的
 * 问题是, 怎么拆? 通过 infer 类型推断
 * 拆除第一个和后面一组, 进行递归拆分
 */

/**
 * 初版实现
 */
/*
export type StringToUnion<T extends string> = T extends "" 
? never 
: T extends `${infer A}${infer B}` 
  ? A | StringToUnion<B> 
  : T
*/

/**
 * 优化版实现
 */
export type StringToUnion<T extends string> = T extends `${infer First}${infer Following}`
  ? First | StringToUnion<Following>
  : never

type Result1 = StringToUnion<'12312'>; // expected to be "1" | "2" | "3"
type Result2 = StringToUnion<'hello, world'>; // expected to be "h" | "e" | "l" | "o" | "," | " " | "w" | "r" | "d"
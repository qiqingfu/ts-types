// https://github.com/type-challenges/type-challenges/blob/master/questions/610-medium-camelcase/README.md
// Uppercase

/**
 * 实现思路
 *  1. 通过条件类型和 infer 推断
 *  2. 以 - 作为分隔, 推断出三个值。- 前面为一组值A, -后面的一个字符为一组值A, 和剩余的一组值 C
 *  3. 通过 TypeScript 提供的 Uppercase 将字符串中的每个字符转换为大写版本, 将 B 转换为大写
 *  4. 将 ABC 拼接起来再次传入 CamelCase 递归替换
 */

export type CamelCase<T extends string> = T extends `${infer A}-${infer B}${infer C}` 
? CamelCase<`${A}${Uppercase<B>}${C}`> 
: T

type Result = CamelCase<'for-bar-baz'>
// forBarBaz
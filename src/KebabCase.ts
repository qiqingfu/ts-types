/**
 * 思路：
 *  1.
 */
export type KebabCase<T extends string> = T

type Result = KebabCase<'FooBarBaz'>

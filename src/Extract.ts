// https://www.typescriptlang.org/docs/handbook/utility-types.html#extracttype-union

export type MyExtract<T, U> = T extends U ? T : never

/**
 * 条件类型遵循分配率
 *
 * ("a" extends "a" | "f") |
 * ("b" extends "a" | "f") |
 * ("c" extends "a" | "f")
 *
 *  ↓ 等同 ↓
 */
type T0 = MyExtract<'a' | 'b' | 'c', 'a' | 'f'>
// type T0 = "a"

type T1 = MyExtract<string | number | (() => void), Function>
// type T1 = () => void

// https://www.typescriptlang.org/docs/handbook/utility-types.html#excludetype-excludedunion

/**
 * 与 Extract 使用相反
 */
export type MyExclude<T, U> = T extends U ? never : T

type T0 = MyExclude<'a' | 'b' | 'c', 'a'>
// type T0 = "b" | "c"

type T1 = MyExclude<'a' | 'b' | 'c', 'a' | 'b'>
// type T1 = "c"

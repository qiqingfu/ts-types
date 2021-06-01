// https://github.com/type-challenges/type-challenges/blob/master/questions/191-medium-append-argument/README.zh-CN.md

/**
 * infer 推荐类型 Fn 的不定形参组成的数组类型 R, 和 Fn 的返回值类型 T
 */
export type AppendArgument<Fn, A> = Fn extends (...args: infer R) => infer T
  ? (...args: [...R, A]) => T
  : never

// Test cases
type Fn = (a: number, b: string) => number
type Result = AppendArgument<Fn, boolean>
// 期望是 (a: number, b: string, x: boolean) => number

type Fn1<T, U> = (fn: (...args: T[]) => U) => U[]
type Result1 = AppendArgument<Fn1<string, number>, boolean>
// 期望是 (args_0: (...args: string[]) => number, args_1: boolean) => number[]

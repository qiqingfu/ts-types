/**
 * 获取函数参数类型, 返回值是根据参数顺序组成的数组类型
 */

export type ParamType<T extends (...args: any) => any> = T extends (...args: infer R) => any
  ? R
  : never

type Fn = (x: string, y: number, c?: boolean) => any

type Result = ParamType<Fn> // [x: string, y: number, c?: boolean | undefined]

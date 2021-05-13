// https://www.typescriptlang.org/docs/handbook/utility-types.html#omittype-keys
// https://github.com/type-challenges/type-challenges/blob/master/questions/3-medium-omit/README.zh-CN.md

import { MyExclude } from './Exclude'

/**
 * 1. MyOmit 第二个泛型 U 组成的联合类型, 要约束为 T 类型的属性名(key)
 * 2. keyof T 获取T所有属性名(key)组成的联合类型, 通过 MyExclude 过滤掉部分 keyof T 组成的联合类型
 * 3. in, 对剩余的 keyof T 类型遍历, P 为每次遍历出的成员类型
 */
export type MyOmit<T, U extends keyof T> = {
  [P in MyExclude<keyof T, U>]: T[P]
}

interface Todo {
  title: string
  description: string
  completed: boolean
}

type TodoPreview = MyOmit<Todo, 'description' | 'title'>

const todo: TodoPreview = {
  completed: false
}

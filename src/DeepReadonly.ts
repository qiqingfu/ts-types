// https://github.com/type-challenges/type-challenges/blob/master/questions/9-medium-deep-readonly/README.zh-CN.md

import { MyRecord } from './Record'

/**
 * 通过 TypeScript 条件判断,  分别处理键入的对象、函数和普通类型
 */
type DeepReadonly<T extends object> = {
  readonly [P in keyof T]: T extends MyRecord<any, any>
    ? T[P] extends Function
      ? T[P]
      : DeepReadonly<T[P]>
    : T[P]
}

type X = {
  x: { a: number; b: string }
  y: string
}

const todo: DeepReadonly<X> = {
  x: {
    a: 1,
    b: 'hi'
  },
  y: 'bye'
}

// todo.y = 'hi'  无法分配到 "y" ，因为它是只读属性。

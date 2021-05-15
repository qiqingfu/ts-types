// https://github.com/type-challenges/type-challenges/blob/master/questions/12-medium-chainable-options/README.zh-CN.md

import { MyRecord } from './Record'

type Chainable<T = {}> = {
  option<K extends string | number | symbol, V>(key: K, value: V): Chainable<T & MyRecord<K, V>>
  get(): { [K in keyof T]: T[K] }
}

declare const config: Chainable

const result = config
  .option('foo', 123)
  .option('name', 'type-challenges')
  .option('bar', { value: 'Hello World' })
  .get()

// 期望 result 的类型是：
// interface Result {
//   foo: number
//   name: string
//   bar: {
//     value: string
//   }
// }

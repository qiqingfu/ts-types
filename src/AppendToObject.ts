// https://github.com/type-challenges/type-challenges/blob/master/questions/527-medium-append-to-object/README.md

/**
 * TypeScript 涉及的技术点
 *   - 索引类型查询 keyof
 *   - 索引类型查询联合类型 keyof (A | B) 规则
 *   - extends 条件类型
 *   - T[P] 索引访问类型
 */
type AppendToObject<T, K extends keyof any, V> = {
  [P in keyof T | K]: P extends keyof T ? T[P] : V
}

type Test = { id: '1' }
type result = AppendToObject<Test, 'value', 4> // expected to be { id: '1', value: 4 }

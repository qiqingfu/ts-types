// https://github.com/type-challenges/type-challenges/blob/master/questions/459-medium-flatten/README.md

/**
 * 步骤
 * 1.首先检查 T 是不是数组类型
 *   不是 → [T]
 *   是
 *   ↓
 * 2.T 是否为空
 * 3.检查 T 中参数的个数
 *   一个参数 → 递归检查该值是不是数组类型
 *   多个参数
 *     ↓
 *   分别处理第一个参数和其他剩余参数
 */
export type Flatten<T> = T extends any[]
  ? T extends []
    ? []
    : T extends [infer F]
    ? [...Flatten<F>]
    : T extends [infer F, ...(infer U)]
    ? [...Flatten<F>, ...Flatten<U>]
    : never
  : [T]

type flatten = Flatten<[1, 2, [3, 4], [[5]]]> // [1, 2, 3, 4, 5]
type flatten1 = Flatten<[1, 2]> // [1, 2]
type flatten2 = Flatten<1> // [1]

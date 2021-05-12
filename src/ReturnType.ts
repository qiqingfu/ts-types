// https://www.typescriptlang.org/docs/handbook/utility-types.html#returntypetype
// https://github.com/type-challenges/type-challenges/blob/master/questions/2-medium-return-type/README.zh-CN.md

/**
 * MyReturnType 类型工具的用途就是获取一个函数类型的返回值类型
 * 那么, T 泛型类型就期望是一个函数, 因此要加上 extends 进行约束
 */
type MyReturnType<T extends Function> = T extends (...args: any[]) => infer R ? R : never

const fn = (v: boolean) => (v ? 1 : 2)

type a = MyReturnType<typeof fn> // 应推导出 "1 | 2"

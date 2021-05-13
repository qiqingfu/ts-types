// https://www.typescriptlang.org/docs/handbook/utility-types.html#readonlytype
// https://github.com/type-challenges/type-challenges/blob/master/questions/8-medium-readonly-2/README.zh-CN.md#readonly-2---

/**
 * 对 Readonly 的实现升级
 */
export type MyReadonly<T, U extends keyof T> = T &
  {
    readonly [P in U]: T[P]
  }

interface Todo {
  title: string
  description: string
  completed: boolean
}

const todo: MyReadonly<Todo, 'title' | 'description'> = {
  title: 'Hey',
  description: 'foobar',
  completed: false
}

// todo.title = "Hello" // Error: cannot reassign a readonly property
// todo.description = "barFoo" // Error: cannot reassign a readonly property
// todo.completed = true // OK

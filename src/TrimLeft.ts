// https://github.com/type-challenges/type-challenges/blob/master/questions/106-medium-trimleft/README.md
// https://www.typescriptlang.org/docs/handbook/release-notes/typescript-4-1.html#template-literal-types

type Space = ' ' | '\n' | '\t'

export type TrimLeft<T extends string> = T extends `${Space}${infer R}` ? TrimLeft<R> : T

type Str = TrimLeft<'  Hello World  '> // expected to be 'Hello World  '

// https://www.typescriptlang.org/docs/handbook/utility-types.html#recordkeystype

export type MyRecord<T extends string | number | symbol, U> = {
  [P in T]: U
}

interface CatInfo {
  age: number
  breed: string
}

type CatName = 'miffy' | 'boris' | 'mordred'

const cats: Record<CatName, CatInfo> = {
  miffy: { age: 10, breed: 'Persian' },
  boris: { age: 5, breed: 'Maine Coon' },
  mordred: { age: 16, breed: 'British Shorthair' }
}

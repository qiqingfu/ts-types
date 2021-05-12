// https://github.com/type-challenges/type-challenges/blob/master/questions/533-easy-concat/README.md

type ArrayType = any[]
type Concat<T extends ArrayType, R extends ArrayType> = [...T, ...R]

type Result = Concat<[1, 2, 3], [4, 5, 6]> // expected to be [1, 2, 3, 4, 5, 6]

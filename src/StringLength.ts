// https://github.com/type-challenges/type-challenges/blob/master/questions/298-medium-length-of-string/README.md

type StringLength<T extends string, U extends string[] = []> = T extends `${infer A}${infer B}`
    ? StringLength<B, [A, ...U]>
    : U['length']

type len = StringLength<'hello'> // 5
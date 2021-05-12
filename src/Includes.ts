// https://github.com/type-challenges/type-challenges/blob/master/questions/898-easy-includes/README.md

type Includes<T extends any[], U> = U extends T[number] ? true : false

type isPillarMen = Includes<['Kars', 'Esidisi', 'Wamuu', 'Santana'], 'Dio'> // expected to be `false`
type isSantana = Includes<['Kars', 'Esidisi', 'Wamuu', 'Santana'], 'Santana'> // expected to be `true`

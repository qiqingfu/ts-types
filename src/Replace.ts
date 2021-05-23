// https://github.com/type-challenges/type-challenges/blob/master/questions/116-medium-replace/README.md

/**
 * Key points: the condition type and the Infer keyword
 */
type Replace<S extends string, From extends string, To extends string> = From extends '' 
? S 
: S extends `${infer T}${From}${infer R}` 
  ? `${T}${To}${R}` 
  : S 

type replaced1 = Replace<'types are fun!', 'fun', 'awesome'> // expected to be 'types are awesome!'
type replaced2 = Replace<'very good', 'good', 'well'> // expected to be 'very well'
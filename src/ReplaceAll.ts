// https:// github.com/type-challenges/type-challenges/blob/master/questions/119-medium-replaceall/README.md

export type ReplaceAll<S extends string, From extends string, To extends string> = From extends ''
  ? S
  : S extends `${infer A}${From}${infer B}`
    ? `${A}${To}${ReplaceAll<B, From, To>}`
    : S

/**
 * 递归处理步骤(以replaced1为例)
 * 
 * 1:                                                                    递推 ↑  'dbcdbc'
 *  A = ''  From = 'a'  B = 'bcabc'                                      
 * 
 * 2:                                                                    递推 ↑  'bcdbc'
 *  A = 'bc' From = 'a' B = 'bc'                                         
 * 
 * 3: bc 不符合 extends `${infer A}${a}${infer B}`, 直接返回 'bc'          递推 ↑  'bc'
 * 
 */

type replaced1 = ReplaceAll<'abcabc', 'a', 'd'> // expected to be 'dbcbdc'
type replaced2 = ReplaceAll<'a', 'a', 'a'> // expected to be 'a'
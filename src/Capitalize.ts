// https://github.com/type-challenges/type-challenges/blob/master/questions/110-medium-capitalize/README.md
import { Trim } from "./Trim"

type LettersMapping = {
  'a': 'A'
  'b': 'B'
  'c': 'C'
  'd': 'D'
  'e': 'E'
  'f': 'F'
  'g': 'G'
  'h': 'H'
  'i': 'I'
  'j': 'J'
  'k': 'K'
  'l': 'L'
  'm': 'M'
  'n': 'N'
  'o': 'O'
  'p': 'P'
  'q': 'Q'
  'r': 'R'
  's': 'S'
  't': 'T'
  'u': 'U'
  'v': 'V'
  'w': 'W'
  'x': 'X'
  'y': 'Y'
  'z': 'Z'
}

/**
 * 1. 去除 T类型的前后空白
 * 2. infer 关键字推断, F -> 'h', U -> 'ello world'
 * 3. 条件判断, F 字符是 a-z 联合类型的子类型
 * 4. 通过键入的方式, 取出小写字母类型对应的大写字母类型
 * 5. 与 U 字母做拼接
 */
export type MyCapitalize<T extends string> = Trim<T> extends `${infer F}${infer U}` 
? F extends keyof LettersMapping 
  ? `${LettersMapping[F]}${U}`
  : T 
: T

type capitalized = MyCapitalize<'hello world'> // expected to be 'Hello world'
type capitalized1 = MyCapitalize<' very Good'> // expected to be 'Very Good'
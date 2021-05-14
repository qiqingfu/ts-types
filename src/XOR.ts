// https://stackoverflow.com/questions/42123407/does-typescript-support-mutually-exclusive-types

import { MyExclude } from './Exclude'

type Without<T, U> = {
  [P in MyExclude<keyof T, keyof U>]?: never
}

type XOR<T, U> = T | U extends object ? (Without<T, U> & U) | (Without<U, T> & T) : T | U

/**
 * (Without<T, U> & U) | (Without<U, T> & T)
 *
 * Without<{name: string, age: number}, {job: string; age: number}> & {job: string; age: number}
 * Exclude<'name' | 'age', 'job' | 'age'> -> {name: never} & {job: string; age: number} -> {name: never, job: string; age: number}
 *
 * Without<{job: string; age: number}, {name: string, age: number}> & {name: string, age: number}
 * Exclude<'job' | 'age', 'name' | 'age'> {job: never} & {name: string, age: number} -> {job: never, name: string, age: number}
 *
 * value: {name: never, job: string; age: number} | {job: never, name: string, age: number}
 *
 */

interface Person {
  name: string
  age: number
}
interface Pet {
  job: string
  age: number
}
function getOrigin(value: XOR<Person, Pet>) {
  /* ... */
}

getOrigin({}) // Error
getOrigin({ name: 'Jack', age: 24 }) // OK
getOrigin({ job: 'WEB', age: 24 }) // OK
getOrigin({ name: 'NICKEN', age: 24, job: 'WEB' }) // Error

import { MyExclude } from './Exclude'

type Exclusive<T, U> = MyExclude<T, U> | MyExclude<U, T>

type A = Exclusive<1 | 2 | 3, 2 | 3 | 4>
// Initial type: 1 | 4

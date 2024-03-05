/**
 * This file contains code adapted from the React Spectrum project.
 *
 * Copyright (c) [year(s)], Adobe Inc. and other contributors.
 * All rights reserved.
 *
 * This source code is licensed under the Apache License, Version 2.0
 * found in the LICENSE.txt file at the root directory of this source tree.
 */

/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
/* eslint-disable @typescript-eslint/ban-types */

import {chain} from './chain'

type Props = Record<string, any>

type PropsArg = Props | null | undefined

type TupleTypes<T> = {[P in keyof T]: T[P]} extends Record<number, infer V>
  ? NullToObject<V>
  : never
type NullToObject<T> = T extends null | undefined ? {} : T
// eslint-disable-next-line no-undef, @typescript-eslint/no-unused-vars
type UnionToIntersection<U> = (U extends any ? (k: U) => void : never) extends (
  k: infer I,
) => void
  ? I
  : never

export default function mergeProps<T extends PropsArg[]>(
  ...args: T
): UnionToIntersection<TupleTypes<T>> {
  // Start with a base clone of the first argument. This is a lot faster than starting
  // with an empty object and adding properties as we go.
  const result: Props = {...args[0]}
  for (let i = 1; i < args.length; i++) {
    const props = args[i]
    for (const key in props) {
      const a = result[key]
      const b = props[key]

      // Chain events
      if (
        typeof a === 'function' &&
        typeof b === 'function' &&
        // This is a lot faster than a regex.
        key.startsWith('o') &&
        key[1] === 'n' &&
        key.charCodeAt(2) >= /* 'A' */ 65 &&
        key.charCodeAt(2) <= /* 'Z' */ 90
      ) {
        result[key] = chain(a, b)

        // Merge classnames, sometimes classNames are empty string which eval to false, so we just need to do a type check
      } else if (
        (key === 'className' || key === 'UNSAFE_className') &&
        typeof a === 'string' &&
        typeof b === 'string'
      ) {
        result[key] = [a, b].filter(Boolean).join(' ')
      } else {
        result[key] = b !== undefined ? b : a
      }
    }
  }

  return result as UnionToIntersection<TupleTypes<T>>
}

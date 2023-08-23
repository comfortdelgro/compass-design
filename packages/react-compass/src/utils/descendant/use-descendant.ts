/**
 * This file contains code adapted from the Chakra UI project.
 *
 * Copyright (c) [year(s)], Adobe Inc. and other contributors.
 * All rights reserved.
 *
 * This source code is licensed under the Apache License, Version 2.0
 * found in the LICENSE.txt file at the root directory of this source tree.
 */

import {useRef, useState} from 'react'
import {createContext} from './create-context'
import {DescendantOptions, DescendantsManager} from './descendant'
import {cast, useSafeLayoutEffect} from './utils'

export type ReactRef<T> = React.RefCallback<T> | React.MutableRefObject<T>

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export function assignRef<T = any>(
  ref: ReactRef<T> | null | undefined,
  value: T,
) {
  if (ref == null) return

  if (typeof ref === 'function') {
    ref(value)
    return
  }

  try {
    ref.current = value
  } catch (error) {
    // eslint-disable-next-line @typescript-eslint/no-base-to-string
    throw new Error(`Cannot assign value '${value}' to ref '${ref}'`)
  }
}

export function mergeRefs<T>(...refs: Array<ReactRef<T> | null | undefined>) {
  return (node: T | null) => {
    refs.forEach((ref) => {
      assignRef(ref, node)
    })
  }
}

/**
 * @internal
 * React hook that initializes the DescendantsManager
 */
function useDescendants<
  T extends HTMLElement = HTMLElement,
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  K extends Record<string, any> = object,
>() {
  const descendants = useRef(new DescendantsManager<T, K>())
  useSafeLayoutEffect(() => {
    return () => descendants.current.destroy()
  })
  return descendants.current
}

export type UseDescendantsReturn = ReturnType<typeof useDescendants>

/* -------------------------------------------------------------------------------------------------
 * Descendants context to be used in component-land.
  - Mount the `DescendantsContextProvider` at the root of the component
  - Call `useDescendantsContext` anywhere you need access to the descendants information

  NB:  I recommend using `createDescendantContext` below
 * -----------------------------------------------------------------------------------------------*/

const [DescendantsContextProvider, useDescendantsContext] =
  createContext<UseDescendantsReturn>({
    name: 'DescendantsProvider',
    errorMessage:
      'useDescendantsContext must be used within DescendantsProvider',
  })

/**
 * @internal
 * This hook provides information a descendant such as:
 * - Its index compared to other descendants
 * - ref callback to register the descendant
 * - Its enabled index compared to other enabled descendants
 */
function useDescendant<
  T extends HTMLElement = HTMLElement,
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  K extends Record<string, any> = object,
>(options?: DescendantOptions<K>) {
  const descendants = useDescendantsContext()

  const [index, setIndex] = useState(-1)
  const ref = useRef<T>(null)

  useSafeLayoutEffect(() => {
    return () => {
      if (!ref.current) return
      descendants.unregister(ref.current)
    }
  }, [])

  useSafeLayoutEffect(() => {
    if (!ref.current) return
    const dataIndex = Number(ref.current.dataset['index'])
    if (index != dataIndex && !Number.isNaN(dataIndex)) {
      setIndex(dataIndex)
    }
  })

  const refCallback = options
    ? cast<React.RefCallback<T>>(descendants.register(options))
    : cast<React.RefCallback<T>>(descendants.register)

  return {
    descendants,
    index,
    enabledIndex: descendants.enabledIndexOf(ref.current),
    register: mergeRefs(refCallback, ref),
  }
}

/* -------------------------------------------------------------------------------------------------
 * Function that provides strongly typed versions of the context provider and hooks above.
   To be used in component-land
 * -----------------------------------------------------------------------------------------------*/

export function createDescendantContext<
  T extends HTMLElement = HTMLElement,
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  K extends Record<string, any> = object,
>() {
  type ContextProviderType = React.Provider<DescendantsManager<T, K>>
  const ContextProvider = cast<ContextProviderType>(DescendantsContextProvider)

  const _useDescendantsContext = () =>
    cast<DescendantsManager<T, K>>(useDescendantsContext())

  const _useDescendant = (options?: DescendantOptions<K>) =>
    useDescendant<T, K>(options)

  const _useDescendants = () => useDescendants<T, K>()

  return [
    // context provider
    ContextProvider,
    // call this when you need to read from context
    _useDescendantsContext,
    // descendants state information, to be called and passed to `ContextProvider`
    _useDescendants,
    // descendant index information
    _useDescendant,
  ] as const
}

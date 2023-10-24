/* eslint-disable react-refresh/only-export-components */
/**
 * This file contains code adapted from the React Spectrum project.
 *
 * Copyright (c) [year(s)], Adobe Inc. and other contributors.
 * All rights reserved.
 *
 * This source code is licensed under the Apache License, Version 2.0
 * found in the LICENSE.txt file at the root directory of this source tree.
 */

/* eslint-disable @typescript-eslint/no-unsafe-argument */
/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */

import React, {
  MutableRefObject,
  ReactNode,
  RefObject,
  useContext,
  useEffect,
  useRef,
} from 'react'
import mergeProps from '../mergeProps'
import {
  DOMAttributes,
  FocusableDOMProps,
  FocusableElement,
  FocusableProps,
} from '../types'
import useFocus from '../useFocus'
import {focusWithoutScrolling} from './focusWithoutScrolling'
import {useKeyboard} from './useKeyboard'
import {useSyncRef} from './useSyncRef'

export interface FocusableOptions extends FocusableProps, FocusableDOMProps {
  isDisabled?: boolean
}

export interface FocusableProviderProps extends DOMAttributes {
  children?: ReactNode
}

interface FocusableContextValue extends FocusableProviderProps {
  ref?: MutableRefObject<FocusableElement>
}

const FocusableContext = React.createContext<FocusableContextValue | null>(null)

function useFocusableContext(
  ref: RefObject<FocusableElement>,
): FocusableContextValue {
  const context = useContext(FocusableContext) || {}
  useSyncRef(context, ref)

  // eslint-disable-next-line
  let {ref: _, ...otherProps} = context
  return otherProps
}

function FocusableProvider(
  props: FocusableProviderProps,
  ref: RefObject<FocusableElement>,
) {
  const {children, ...otherProps} = props
  const context: FocusableContextValue = {
    ...otherProps,
    ref: ref as any,
  }

  return (
    <FocusableContext.Provider value={context}>
      {children}
    </FocusableContext.Provider>
  )
}

const _FocusableProvider = React.forwardRef(FocusableProvider as any)
export {_FocusableProvider as FocusableProvider}

export interface FocusableAria {
  focusableProps: DOMAttributes
}

export default function useFocusable(
  props: FocusableOptions,
  domRef: RefObject<FocusableElement>,
): FocusableAria {
  const {focusProps} = useFocus(props)
  const {keyboardProps} = useKeyboard(props)
  const interactions = mergeProps(focusProps, keyboardProps)
  const domProps = useFocusableContext(domRef)
  const interactionProps = props.isDisabled ? {} : domProps
  const autoFocusRef = useRef(props.autoFocus)

  useEffect(() => {
    if (autoFocusRef.current && domRef.current) {
      focusWithoutScrolling(domRef.current)
    }
    autoFocusRef.current = false
  }, [domRef])

  return {
    focusableProps: mergeProps(
      {
        ...interactions,
        tabIndex:
          props.excludeFromTabOrder && !props.isDisabled ? -1 : undefined,
      },
      interactionProps,
    ),
  }
}

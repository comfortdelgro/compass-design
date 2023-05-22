/**
 * This file contains code adapted from the React Spectrum project.
 *
 * Copyright (c) 2018, Adobe Inc. and other contributors.
 * All rights reserved.
 *
 * This source code is licensed under the Apache License, Version 2.0
 * found in the LICENSE.txt file at the root directory of this source tree.
 */

import {useContext} from 'react'
import {PressResponderContext} from '../contexts/PressResponderContext'
import {PressHookProps} from '../types'
import {useSyncRef} from './useSyncRef'

export function usePressResponderContext(
  props: PressHookProps,
): PressHookProps {
  const context = useContext(PressResponderContext)
  if (context) {
    // eslint-disable-next-line @typescript-eslint/unbound-method
    const {register, ...contextProps} = context
    props = {...contextProps, ...props} as PressHookProps
    register()
  }
  useSyncRef(context, props.ref)

  return props
}

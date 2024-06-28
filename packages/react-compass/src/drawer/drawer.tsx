'use client'

import {forwardRef} from 'react'
import DrawerDefault from './drawer-default'
import DrawerMobile from './drawer-mobile'
import type {DrawerProps, DrawerRef} from './types'

const DrawerComposable = forwardRef<DrawerRef, DrawerProps>((props, ref) => {
  if (props.variant === 'mobile') {
    return <DrawerMobile ref={ref} {...props} />
  }

  return <DrawerDefault ref={ref} {...props} />
})

export default DrawerComposable

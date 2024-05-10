'use client'

import {forwardRef} from 'react'
import Drawer from './drawer'
import DrawerMobile from './drawer-mobile'
import {DrawerProps, DrawerRef} from './types'

const DrawerVariants = forwardRef<DrawerRef, DrawerProps>((props, ref) => {
  if (props.variant === 'mobile') {
    return <DrawerMobile ref={ref} {...props} />
  }

  return <Drawer ref={ref} {...props} />
})

export default DrawerVariants

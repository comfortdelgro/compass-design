'use client'

import {forwardRef} from 'react'
import DrawerDefault from './drawer-default'
import DrawerFooter from './drawer-footer'
import DrawerHeader from './drawer-header'
import DrawerMobile from './drawer-mobile'
import type {DrawerProps, DrawerRef} from './types'

const Drawer = forwardRef<DrawerRef, DrawerProps>((props, ref) => {
  if (props.variant === 'mobile') {
    return <DrawerMobile ref={ref} {...props} />
  }

  return <DrawerDefault ref={ref} {...props} />
})

export default Drawer as typeof Drawer & {
  Header: typeof DrawerHeader
  Footer: typeof DrawerFooter
}

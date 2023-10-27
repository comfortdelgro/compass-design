import React from 'react'
import {createPortal} from 'react-dom'

interface PortalProps {
  open: boolean
  children: React.ReactNode
}

const Portal = ({children, open = false}: PortalProps) => {
  if (!open) {
    return null
  }

  return createPortal(children, document.body)
}

export default Portal

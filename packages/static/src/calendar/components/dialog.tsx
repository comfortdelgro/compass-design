import {AriaDialogProps, useDialog} from '@react-aria/dialog'
import React from 'react'
import {useDOMRef} from '../../utils/use-dom-ref'
import styles from './styles/dialog.module.css'

interface Props extends AriaDialogProps {
  children?: React.ReactNode
  title?: string
}

const Dialog = React.forwardRef<HTMLDivElement, Props>((props, ref) => {
  const {children, title} = props

  const dialogRef = useDOMRef(ref)

  const {dialogProps, titleProps} = useDialog(props, dialogRef)

  return (
    <div className={styles.dialog} {...dialogProps} ref={dialogRef}>
      {title && (
        <h3 {...titleProps} style={{marginTop: 0}}>
          {title}
        </h3>
      )}
      {children}
    </div>
  )
})

export default Dialog

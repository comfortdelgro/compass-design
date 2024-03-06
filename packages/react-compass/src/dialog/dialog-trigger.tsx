import React from 'react'
import Portal from '../portal'
import CssInjection from '../utils/objectToCss/CssInjection'
import {pickChild} from '../utils/pick-child'
import {useDOMRef} from '../utils/use-dom-ref'
import Dialog from './dialog'
import styles from './styles/dialog.module.css'

interface Props {
  children?: React.ReactNode
  isOpen?: boolean
  handleClose?: () => void
  id?: string
  variant?: 'confirmation' | 'alert'
  css?: unknown
}

export type DialogTriggerProps = Props &
  Omit<React.HTMLAttributes<HTMLDivElement>, keyof Props>

const DialogTrigger = React.forwardRef<HTMLDivElement, DialogTriggerProps>(
  (props, ref) => {
    const {
      // StyledComponentProps
      css = {},
      // children
      children,
      // ComponentProps
      isOpen = false,
      handleClose,
      id,
      // VariantProps
      variant = 'confirmation',
      className,
      // HTMLDiv Props
      ...htmlProps
    } = props

    const {child: DialogElement} = pickChild<typeof Dialog>(children, Dialog)

    const dialogRef = useDOMRef<HTMLDivElement>(ref)
    const dialogWrapperRef = useDOMRef<HTMLDivElement>(null)

    const handleClickBackdrop = (e: MouseEvent) => {
      e.stopPropagation()
      e.preventDefault()
      handleClose?.()
    }

    const classNames = [styles.wrapper, className, 'cdg-dialog-wrapper']
      .filter(Boolean)
      .join(' ')

    return (
      <Portal open={isOpen}>
        <CssInjection css={css}>
          <div
            ref={dialogWrapperRef}
            onClick={(e) => handleClickBackdrop?.(e as unknown as MouseEvent)}
            className={classNames}
            {...htmlProps}
          >
            {DialogElement &&
              React.cloneElement(DialogElement as unknown as JSX.Element, {
                ref: dialogRef,
                variant: variant,
                triggerId: id,
                handleClose: () => handleClose?.(),
              })}
          </div>
        </CssInjection>
      </Portal>
    )
  },
)

export default DialogTrigger

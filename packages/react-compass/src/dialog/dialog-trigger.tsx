import React from 'react'
import Portal from '../portal'
import {CSS, CssInjection} from '../utils/objectToCss'
import {pickChild} from '../utils/pick-child'
import {classNames} from '../utils/string'
import {useDOMRef} from '../utils/use-dom-ref'
import Dialog from './dialog'
import styles from './styles/dialog.module.css'

interface Props {
  children?: React.ReactNode
  isOpen?: boolean
  handleClose?: () => void
  id?: string
  variant?: 'confirmation' | 'alert'
  css?: CSS
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

    const {child: DialogElement} = pickChild(children, Dialog)

    const dialogRef = useDOMRef<HTMLDivElement>(ref)
    const dialogWrapperRef = useDOMRef<HTMLDivElement>(null)

    const handleClickBackdrop = (e: MouseEvent) => {
      e.stopPropagation()
      e.preventDefault()
      handleClose?.()
    }

    const rootClasses = classNames(
      styles.wrapper,
      className,
      'cdg-dialog-trigger',
    )

    return (
      <Portal open={isOpen}>
        <CssInjection css={css}>
          <div
            {...htmlProps}
            ref={dialogWrapperRef}
            className={rootClasses}
            onClick={(e) => handleClickBackdrop?.(e as unknown as MouseEvent)}
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

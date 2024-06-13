import React from 'react'
import Portal from '../portal'
import {CSS, CssInjection} from '../utils/objectToCss'
import {pickChild} from '../utils/pick-child'
import {classNames} from '../utils/string'
import {useDOMRef} from '../utils/use-dom-ref'
import Modal from './modal'
import styles from './styles/modal.module.css'

interface Props {
  children?: React.ReactNode
  isOpen?: boolean
  handleClose?: () => void
  size?: 'sm' | 'md' | 'lg'
  id?: string
  css?: CSS
}

export type ModalTriggerProps = Props &
  Omit<React.HTMLAttributes<HTMLDivElement>, keyof Props>

const ModalTrigger = React.forwardRef<HTMLDivElement, ModalTriggerProps>(
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
      size = 'md',
      className,
      // HTMLDiv Props
      ...htmlProps
    } = props

    const modalRef = useDOMRef<HTMLDivElement>(ref)
    const modalWrapperRef = useDOMRef<HTMLDivElement>(null)
    const {child: ModalElement} = pickChild(children, Modal)

    const handleClickBackdrop = (e: MouseEvent) => {
      e.stopPropagation()
      e.preventDefault()
      handleClose?.()
    }

    const rootClasses = classNames(
      styles.wrapper,
      className,
      'cdg-modal-wrapper',
    )

    return (
      <Portal open={isOpen}>
        <CssInjection css={css}>
          <div
            {...htmlProps}
            ref={modalWrapperRef}
            className={rootClasses}
            onClick={(e) => handleClickBackdrop?.(e as unknown as MouseEvent)}
          >
            {ModalElement &&
              React.cloneElement(ModalElement as unknown as JSX.Element, {
                onClose: () => handleClose?.(),
                ref: modalRef,
                size: size,
                handleClose: () => handleClose?.(),
                triggerId: id,
              })}
          </div>
        </CssInjection>
      </Portal>
    )
  },
)

export default ModalTrigger

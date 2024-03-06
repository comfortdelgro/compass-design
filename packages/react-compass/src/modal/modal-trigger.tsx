import React from 'react'
import Portal from '../portal'
import CssInjection from '../utils/objectToCss/CssInjection'
import {pickChild} from '../utils/pick-child'
import {useDOMRef} from '../utils/use-dom-ref'
import Modal from './modal'
import styles from './styles/modal.module.css'

interface Props {
  children?: React.ReactNode
  isOpen?: boolean
  handleClose?: () => void
  size?: 'sm' | 'md' | 'lg'
  id?: string
  css?: unknown
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
    const {child: ModalElement} = pickChild<typeof Modal>(children, Modal)

    const handleClickBackdrop = (e: MouseEvent) => {
      e.stopPropagation()
      e.preventDefault()
      handleClose?.()
    }

    const classNames = [className, 'cdg-modal-wrapper', styles.wrapper]
      .filter(Boolean)
      .join(' ')

    return (
      <Portal open={isOpen}>
        <CssInjection css={css}>
          <div
            ref={modalWrapperRef}
            onClick={(e) => handleClickBackdrop?.(e as unknown as MouseEvent)}
            className={classNames}
            {...htmlProps}
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

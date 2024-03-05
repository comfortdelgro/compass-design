import React from 'react'
import {useDOMRef} from '../utils/use-dom-ref'
import styles from './styles/accordion-title.module.css'

interface Props {
  css?: unknown
  children?: React.ReactNode
}

interface CustomComponentProps {
  className?: string
}

export type AccordionExpandIconProps = Props &
  Omit<React.HTMLAttributes<HTMLDivElement>, keyof Props>

const AccordionExpandIcon = React.forwardRef<
  HTMLDivElement,
  AccordionExpandIconProps
>((props: AccordionExpandIconProps, ref) => {
  const {children, css = {}} = props

  const expandRef = useDOMRef<HTMLDivElement>(ref)

  const renderExpandIcon = () => {
    if (React.isValidElement(children)) {
      return React.cloneElement(children, {
        className: styles.accordionChevronIcon,
        ref: expandRef,
        css: css,
      } as CustomComponentProps)
    }
    return (
      <svg viewBox='0 0 512 512' className={styles.accordionChevronIcon}>
        <path
          fill='currentColor'
          d='M233.4 406.6c12.5 12.5 32.8 12.5 45.3 0l192-192c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L256 338.7 86.6 169.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l192 192z'
        />
      </svg>
    )
  }

  return <>{renderExpandIcon()}</>
})

export default AccordionExpandIcon

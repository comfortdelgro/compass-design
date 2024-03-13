import React from 'react'
import CssInjection from '../utils/objectToCss/CssInjection'
import {useDOMRef} from '../utils/use-dom-ref'
import styles from './styles/accordion-table.module.css'

interface Props {
  css?: unknown
  children: React.ReactNode
}

export type AccordionTableProps = Props &
  Omit<React.HTMLAttributes<HTMLDivElement>, keyof Props>

const AccordionTable = React.forwardRef<HTMLDivElement, AccordionTableProps>(
  (props, ref) => {
    const {children, css = {}, className, ...htmlProps} = props

    const accordionTableRef = useDOMRef<HTMLDivElement>(ref)

    const rootClasses = [
      styles.accordionTable,
      className,
      'cdg-accordion-table',
    ]
      .filter(Boolean)
      .join(' ')

    return (
      <CssInjection css={css} childrenRef={accordionTableRef}>
        <div
          {...htmlProps}
          className={rootClasses}
          ref={accordionTableRef}
        >
          {children}
        </div>
      </CssInjection>
    )
  },
)

export default AccordionTable

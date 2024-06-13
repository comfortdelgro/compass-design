import React from 'react'
import {CSS, CssInjection} from '../utils/objectToCss'
import {classNames} from '../utils/string'
import {useDOMRef} from '../utils/use-dom-ref'
import styles from './styles/accordion-table.module.css'

interface Props {
  css?: CSS
  children: React.ReactNode
}

export type AccordionTableProps = Props &
  Omit<React.HTMLAttributes<HTMLDivElement>, keyof Props>

const AccordionTable = React.forwardRef<HTMLDivElement, AccordionTableProps>(
  (props, ref) => {
    const {children, css = {}, className, ...htmlProps} = props

    const accordionTableRef = useDOMRef<HTMLDivElement>(ref)

    const rootClasses = classNames(
      styles.accordionTable,
      className,
      'cdg-accordion-table',
    )

    return (
      <CssInjection css={css} childrenRef={accordionTableRef}>
        <div {...htmlProps} className={rootClasses} ref={accordionTableRef}>
          {children}
        </div>
      </CssInjection>
    )
  },
)

export default AccordionTable

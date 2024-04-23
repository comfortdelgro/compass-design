import React from 'react'
import Transitions from '../../transitions'
import {CSS, CssInjection} from '../../utils/objectToCss'
import {useDOMRef} from '../../utils/use-dom-ref'
import styles from '../styles/table-expandable-row.module.css'

interface Props {
  css?: CSS
  colSpan: number
  isExpanded: boolean
}

export type ExpandableRowProps = Props &
  Omit<React.HTMLAttributes<HTMLTableRowElement>, keyof Props>

const ExpandableRow = React.forwardRef<HTMLTableRowElement, ExpandableRowProps>(
  (props, ref) => {
    const {colSpan, className, isExpanded, children, css = {}} = props

    const rowRef = useDOMRef<HTMLTableRowElement>(ref)

    const rootClasses = [
      styles.cdgTableExpandableRow,
      className,
      'cdg-table-expandable-cell',
    ]
      .filter(Boolean)
      .join(' ')

    return (
      <CssInjection css={css}>
        <tr ref={rowRef} className={rootClasses}>
          <td colSpan={colSpan}>
            <Transitions effect='collapse' show={isExpanded} speed={0.5}>
              {children}
            </Transitions>
          </td>
        </tr>
      </CssInjection>
    )
  },
)
export default ExpandableRow

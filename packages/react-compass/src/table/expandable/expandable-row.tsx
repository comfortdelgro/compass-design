import React from 'react'
import Transitions from '../../transitions'
import CssInjection from '../../utils/objectToCss/CssInjection'
import {useDOMRef} from '../../utils/use-dom-ref'
import styles from './expandable-row.module.css'

interface Props {
  isExpanded: boolean
  children: React.ReactNode
  colSpan: number
  css?: unknown
}

export type ExpandableRowProps = Props &
  Omit<React.HTMLAttributes<HTMLTableRowElement>, keyof Props>

const ExpandableRow = React.forwardRef<HTMLTableRowElement, ExpandableRowProps>(
  (props, ref) => {
    const {colSpan, isExpanded, children, css = {}} = props

    const rowRef = useDOMRef<HTMLTableRowElement>(ref)

    return (
      <CssInjection css={css}>
        <tr ref={rowRef} className={styles.cdgTableExpandableRow}>
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

import React from 'react'
import Transitions from '../../transitions'
import {useDOMRef} from '../../utils/use-dom-ref'
import {StyledExpandableRow} from './ExpandableRow.styles'

interface Props {
  isExpanded: boolean
  children: React.ReactNode
  colSpan: number
}

export type ExpandableRowProps = Props &
  Omit<React.HTMLAttributes<HTMLTableRowElement>, keyof Props>

export const ExpandableRow = React.forwardRef<
  HTMLTableRowElement,
  ExpandableRowProps
>((props, ref) => {
  const {colSpan, isExpanded, children} = props

  const rowRef = useDOMRef<HTMLTableRowElement>(ref)

  return (
    <StyledExpandableRow ref={rowRef}>
      <td colSpan={colSpan}>
        <Transitions
          className='cdg-transition'
          effect='collapse'
          show={isExpanded}
          speed={0.5}
        >
          {children}
        </Transitions>
      </td>
    </StyledExpandableRow>
  )
})

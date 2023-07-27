import React from 'react'
import Transitions from '../../transitions'
import {useDOMRef} from '../../utils/use-dom-ref'
import {StyledExpandableRow} from './ExpandableRow.styles'

interface Props {
  colSpan: number
  isExpanded: boolean
  children: React.ReactNode
}

export type ExpandableRowProps = Props &
  Omit<React.HTMLAttributes<HTMLTableRowElement>, keyof Props>

export const ExpandableRow = React.forwardRef<
  HTMLTableRowElement,
  ExpandableRowProps
>((props, ref) => {
  const {colSpan, isExpanded, children} = props

  const rowRef = useDOMRef<HTMLTableRowElement>(ref)
  React.useEffect(() => {
    console.log('isExpaned', isExpanded)
  }, [isExpanded])
  return (
    <Transitions effect='collapse' show={isExpanded} speed={0.5}>
      <StyledExpandableRow ref={rowRef}>
        <td colSpan={colSpan}>{children}</td>
      </StyledExpandableRow>
    </Transitions>
  )
})

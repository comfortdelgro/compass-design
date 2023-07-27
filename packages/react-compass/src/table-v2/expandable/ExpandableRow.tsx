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
  const [childrenHeight, setChildrenHeight] = React.useState<number>(1000)

  React.useEffect(() => {
    if (isExpanded) {
      // Measure the height of the children content
      const tdElement = rowRef.current?.querySelector('td')
      if (tdElement) {
        const height = tdElement.clientHeight
        setChildrenHeight(height)
      }
    }
  }, [isExpanded])

  return (
    <Transitions
      className='cdg-transition'
      effect='collapse'
      show={isExpanded}
      speed={0.5}
      collapsedSize={`${childrenHeight}px`}
    >
      <StyledExpandableRow ref={rowRef}>
        <td colSpan={colSpan}>{children}</td>
      </StyledExpandableRow>
    </Transitions>
  )
})

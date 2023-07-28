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
  const [childrenHeight, setChildrenHeight] = React.useState<number>(1000)

  React.useEffect(() => {
    if (isExpanded) {
      const element = rowRef.current?.querySelector('.cdg-transition > div')
      if (element) {
        setChildrenHeight(element.clientHeight)
      }
    }
  }, [isExpanded])

  return (
    <StyledExpandableRow ref={rowRef}>
      <td colSpan={colSpan}>
        <Transitions
          className='cdg-transition'
          effect='collapse'
          show={isExpanded}
          speed={0.5}
          collapsedSize={`${childrenHeight}px`}
        >
          {children}
        </Transitions>
      </td>
    </StyledExpandableRow>
  )
})

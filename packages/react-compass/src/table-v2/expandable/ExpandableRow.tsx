import React from 'react'
import Transitions from '../../transitions'
import {useDOMRef} from '../../utils/use-dom-ref'
import {StyledExpandableRow} from './ExpandableRow.styles'

interface Props {
  isExpanded: boolean
  children: React.ReactNode
}

export type ExpandableRowProps = Props &
  Omit<React.HTMLAttributes<HTMLDivElement>, keyof Props>

export const ExpandableRow = React.forwardRef<
  HTMLDivElement,
  ExpandableRowProps
>((props, ref) => {
  const {isExpanded, children} = props

  const rowRef = useDOMRef<HTMLDivElement>(ref)
  const [childrenHeight, setChildrenHeight] = React.useState<number>(1000)

  React.useEffect(() => {
    if (isExpanded) {
      const element = rowRef.current
      if (element) {
        const height = element.clientHeight
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
      <StyledExpandableRow ref={rowRef}>{children}</StyledExpandableRow>
    </Transitions>
  )
})

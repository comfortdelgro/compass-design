import {Transition} from '@headlessui/react'
import React from 'react'
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
  const classNames = {
    enter: 'enter',
    enterFrom: 'enterFrom',
    enterTo: 'enterTo',
    leave: 'leave',
    leaveFrom: 'leaveFrom',
    leaveTo: 'leaveTo',
  }
  const rowRef = useDOMRef<HTMLTableRowElement>(ref)
  return (
    <Transition
      ref={rowRef}
      as={StyledExpandableRow}
      show={isExpanded}
      {...classNames}
    >
      <td colSpan={colSpan}>{children}</td>
    </Transition>
  )
})

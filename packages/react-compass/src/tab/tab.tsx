import {AriaTabListProps} from '@react-aria/tabs'
import {TabListProps, useTabListState} from '@react-stately/tabs'
import React from 'react'
import {StyledComponentProps} from '../utils/stitches.types'
import {useDOMRef} from '../utils/use-dom-ref'

interface Props<T = object>
  extends TabListProps<T>,
    AriaTabListProps<T>,
    StyledComponentProps {}

export type TabProps<T = object> = Props<T>

const Tab = React.forwardRef<HTMLDivElement, TabProps>((props, ref) => {
  const {
    // StyledComponentProps
    css = {},
    // ComponentProps
    // AriaTabProps
    ...ariaSafeProps
  } = props

  const linkRef = useDOMRef<HTMLDivElement>(ref)
  const state = useTabListState(props)

  console.log(css, linkRef, state)
  return (
    // <StyledTab css={css} ref={ref} {...variantProps}>
    //   {children}
    // </StyledTab>
    <div>asdasdasd</div>
  )
})

export default Tab

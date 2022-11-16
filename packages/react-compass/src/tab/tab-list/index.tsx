import React, {useContext, useEffect} from 'react'
import type {StyledComponentProps} from '../../utils/stitches.types'
import {TabContext, TabProps} from '../tab'
import {StyledTabList, TabListVariantProps} from './index.styles'

interface Props extends StyledComponentProps {
  className?: string
  children: React.ReactNode
}

export type TabListProps = Props & TabListVariantProps

const TabList = React.forwardRef<HTMLDivElement, TabListProps>((props, ref) => {
  const {children, ...ariaSafeProps} = props
  const context = useContext(TabContext)
  useEffect(() => {
    const array = React.Children.toArray(children)
    if (array.length > 0 && !context?.selectedTab) {
      for (const child of array) {
        const item: React.ReactElement<TabProps> = React.cloneElement(
          child as React.ReactElement<TabProps>,
          {},
        )
        if (
          item.props.value &&
          !item.props.disabled &&
          !context?.props?.disabledKeys?.includes(item.props.value)
        ) {
          context?.setSelectedTab?.(item.props.value)
          break
        }
      }
    }
  }, [])
  return (
    <StyledTabList
      {...ariaSafeProps}
      ref={ref}
      orientation={context?.props.orientation ?? 'horizontal'}
    >
      {children}
    </StyledTabList>
  )
})

export default TabList

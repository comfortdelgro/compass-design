import React, {useContext, useEffect} from 'react'
import type {StyledComponentProps} from '../../utils/stitches.types'
import {TabContext} from '../tab'
import {TabItemProps} from '../tab-item'
import {StyledTabList, TabListVariantProps} from './index.styles'

interface Props extends StyledComponentProps {
  className?: string
  children: React.ReactNode

  'aria-label'?: string
  'aria-labelledby'?: string
  'aria-describedby'?: string
  'aria-details'?: string
  id?: string
}

export type TabListProps = Props & TabListVariantProps

const TabList = React.forwardRef<HTMLDivElement, TabListProps>((props, ref) => {
  const {children, ...ariaSafeProps} = props
  const context = useContext(TabContext)
  useEffect(() => {
    const array = React.Children.toArray(children)
    if (array.length > 0 && !context?.selectedTab) {
      for (const child of array) {
        const item: React.ReactElement<TabItemProps> = React.cloneElement(
          child as React.ReactElement<TabItemProps>,
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
      variant={context?.props.variant ?? 'rounded'}
    >
      {children}
    </StyledTabList>
  )
})

export default TabList

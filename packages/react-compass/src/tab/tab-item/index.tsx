import React, {Key, useContext} from 'react'
import type {StyledComponentProps} from '../../utils/stitches.types'
import {TabContext} from '../tab'
import {StyledTabItem, TabItemVariantProps} from './index.styles'

interface Props extends StyledComponentProps {
  className?: string
  children: React.ReactNode
  value: Key
  key?: Key
  isDisabled?: boolean
  icon?: 'none' | 'left' | 'right' | 'top'

  'aria-label'?: string
  'aria-labelledby'?: string
  'aria-describedby'?: string
  'aria-details'?: string
  id?: string
}

export type TabItemProps = Props & TabItemVariantProps

const TabItem = React.forwardRef<HTMLDivElement, TabItemProps>((props, ref) => {
  const {
    children,
    value,
    disabled = false,
    icon = 'none',
    ...ariaSafeProps
  } = props
  const context = useContext(TabContext)
  const disabledState =
    disabled || context?.props?.disabledKeys?.includes(value)
  console.log(context?.props)
  const onClick = () => {
    if (!disabledState && !context?.props?.isDisabled) {
      context?.setSelectedTab?.(value)
    }
  }

  return (
    <StyledTabItem
      {...ariaSafeProps}
      ref={ref}
      onClick={onClick}
      icon={icon}
      disabled={!!disabledState}
      active={context?.selectedTab === value}
      variant={context?.props?.variant ?? 'rounded'}
    >
      {children}
      {icon !== 'none' && (
        <div className='icon'>{disabled ? <DisableIcon /> : <TickIcon />}</div>
      )}
    </StyledTabItem>
  )
})

const DisableIcon = () => (
  <svg width='10' height='2' viewBox='0 0 10 2' fill='none'>
    <path
      d='M8.87822 1.83335H1.12182C0.732011 1.83335 0.416687 1.46044 0.416687 0.99976C0.416687 0.539083 0.732011 0.166687 1.12182 0.166687H8.87822C9.26803 0.166687 9.58335 0.539083 9.58335 0.99976C9.58335 1.46044 9.26825 1.83335 8.87822 1.83335Z'
      fill='white'
    />
  </svg>
)

const TickIcon = () => (
  <svg width='10' height='8' viewBox='0 0 10 8'>
    <path
      d='M9.39146 0.862272C9.64724 1.12272 9.64724 1.5436 9.39146 1.80404L4.15307 7.13796C3.89729 7.3984 3.48395 7.3984 3.22817 7.13796L0.6084 4.471C0.352701 4.21056 0.352701 3.78968 0.6084 3.52923C0.86414 3.26879 1.27871 3.26879 1.53449 3.52923L3.6722 5.72322L8.46655 0.862272C8.72233 0.601411 9.13568 0.601411 9.39146 0.862272Z'
      fill='currentColor'
    />
  </svg>
)

export default TabItem

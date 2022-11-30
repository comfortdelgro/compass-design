import {AriaTabProps, useTab} from '@react-aria/tabs'
import {TabListState} from '@react-stately/tabs'
import React from 'react'
import {useDOMRef} from '../../utils/use-dom-ref'
import {Icon, Node, Variant} from '../types'
import {StyledTab} from './index.styles'

interface TabProps<T> extends AriaTabProps {
  item: Node<T>
  variant: Variant | undefined
  icon: Icon | undefined
  state: TabListState<T>
}

const Tab = React.forwardRef<HTMLDivElement, TabProps<object>>(
  ({item, state, isDisabled, variant = 'rounded', icon = 'none'}, ref) => {
    const {key, rendered} = item
    const tabRef = useDOMRef<HTMLDivElement>(ref)
    const {tabProps} = useTab({key}, state, tabRef)

    const disabledState = isDisabled || state?.disabledKeys?.has(key)

    return (
      <StyledTab
        {...tabProps}
        ref={tabRef}
        icon={icon}
        disabled={!!disabledState}
        active={state.selectedItem?.key === key}
        variant={variant}
        className='tab-item-wrapper'
      >
        {rendered}
        {icon !== 'none' && (
          <div className='icon'>
            {disabledState ? <DisableIcon /> : <TickIcon />}
          </div>
        )}
      </StyledTab>
    )
  },
)

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

export default Tab

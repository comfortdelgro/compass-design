import {AriaTabListProps, useTabList} from '@react-aria/tabs'
import {Item as CollectionItem} from '@react-stately/collections'
import {TabListProps, useTabListState} from '@react-stately/tabs'
import React from 'react'
import {StyledComponentProps} from '../utils/stitches.types'
import {useDOMRef} from '../utils/use-dom-ref'
import Tab from './tab'
import TabPanel from './tab-panel'
import TabsPaneless from './tabs-paneless'
import {StyledTabs, StyledWrapper} from './tabs.styles'
import {Icon, Variant} from './types'

interface Props<T = object>
  extends TabListProps<T>,
    AriaTabListProps<T>,
    StyledComponentProps {
  variant?: Variant
  icon?: Icon
}

export type TabsProps<T = object> = Props<T>

const Tabs = React.forwardRef<HTMLDivElement, TabsProps>((props, ref) => {
  const {css = {}} = props

  const tabRef = useDOMRef<HTMLDivElement>(ref)
  const state = useTabListState(props)
  const {tabListProps} = useTabList(props, state, tabRef)

  return (
    <StyledWrapper>
      <StyledTabs
        ref={tabRef}
        {...tabListProps}
        css={css}
        orientation={props.orientation ?? 'horizontal'}
        variant={props.variant ?? 'rounded'}
      >
        {[...state.collection].map((item) => (
          <Tab
            key={item.key}
            item={item}
            state={state}
            icon={props.icon}
            variant={props.variant}
          />
        ))}
      </StyledTabs>
      <TabPanel key={state.selectedItem?.key} state={state} />
    </StyledWrapper>
  )
})

export default Tabs as typeof Tabs & {
  Item: typeof CollectionItem
  Paneless: typeof TabsPaneless
}

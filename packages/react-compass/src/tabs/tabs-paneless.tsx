import {AriaTabListProps, useTabList} from '@react-aria/tabs'
import {Item as CollectionItem} from '@react-stately/collections'
import {TabListProps, useTabListState} from '@react-stately/tabs'
import React, {Key} from 'react'
import {StyledComponentProps} from '../utils/stitches.types'
import {useDOMRef} from '../utils/use-dom-ref'
import Tab from './tab'
import {StyledTabs} from './tabs.styles'
import {Icon, Variant} from './types'

interface ItemProps {
  key: Key
  title: string
}

type TLProps = Omit<
  TabListProps<ItemProps>,
  'selectedKey' | 'onSelectionChange' | 'items' | 'children'
>

interface Props extends TLProps, StyledComponentProps {
  items: ItemProps[]
  selectedKey: Key | null
  onSelectionChange: (key: Key) => void
  variant?: Variant
  icon?: Icon
}

export type TabsProps = Props

const TabsPaneless = React.forwardRef<HTMLDivElement, TabsProps>(
  (props, ref) => {
    return (
      <Tabs ref={ref} {...props}>
        {[...props.items].map((item) => (
          <CollectionItem key={item.key} title={item.title}>
            {item.key}
          </CollectionItem>
        ))}
      </Tabs>
    )
  },
)

interface PreTabsProps<T = object>
  extends TabListProps<T>,
    AriaTabListProps<T>,
    StyledComponentProps {
  variant?: Variant
  icon?: Icon
}

const Tabs = React.forwardRef<HTMLDivElement, PreTabsProps>((props, ref) => {
  const {css = {}} = props
  const tabRef = useDOMRef<HTMLDivElement>(ref)
  const state = useTabListState(props)
  const {tabListProps} = useTabList(props, state, tabRef)

  return (
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
  )
})

export default TabsPaneless

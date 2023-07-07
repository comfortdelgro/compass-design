import React from 'react'
import {StyledComponentProps} from '../utils/stitches.types'
import {useDOMRef} from '../utils/use-dom-ref'
import TabItem from './item'
import Tab from './tab'
import TabPanel from './tab-panel'
import TabsPaneless from './tabs-paneless'
import {StyledTabs, StyledWrapper} from './tabs.styles'
import {Icon, useTab, Variant} from './utils'

interface Props extends StyledComponentProps {
  id?: string
  icon?: Icon
  variant?: Variant
  textColor?: string
  hidePanel?: boolean
  isDisabled?: boolean
  indicatorColor?: string
  selectedKey?: React.Key
  disabledKeys?: React.Key[]
  children: React.ReactNode[]
  defaultSelectedKey?: React.Key
  orientation?: 'horizontal' | 'vertical'
  keyboardActivation?: 'automatic' | 'manual'
  onSelectionChange?: (key: React.Key) => void
  'aria-label'?: string
  'aria-labelledby'?: string
  'aria-describedby'?: string
  'aria-details'?: string
}

export type TabsProps = Props &
  Omit<React.HTMLAttributes<HTMLDivElement>, keyof Props>

const Tabs = React.forwardRef<HTMLDivElement, TabsProps>((props, ref) => {
  const {
    textColor = '#0142AF',
    indicatorColor = '#0142AF',
    orientation = 'horizontal',
    variant = 'rounded',
    children,
    isDisabled = false,
    hidePanel = false,
    disabledKeys = [],
    selectedKey,
    defaultSelectedKey,
    css = {},
    ...delegated
  } = props

  const tabRef = useDOMRef<HTMLDivElement>(ref)
  const {collection, currentKey, setCurrentKey, focusKey} = useTab(
    tabRef,
    children,
    defaultSelectedKey,
    selectedKey,
    disabledKeys,
  )

  const selectedItem = collection.find((item) => {
    return item.key === currentKey
  })

  const onSelect = (key: React.Key) => {
    setCurrentKey(key)
  }

  React.useEffect(() => {
    if (currentKey) props.onSelectionChange?.(currentKey)
  }, [currentKey])

  return (
    <StyledWrapper>
      <StyledTabs
        ref={tabRef}
        css={css}
        orientation={orientation}
        variant={variant}
        {...delegated}
        tabIndex={1}
      >
        {[...collection].map((item) => (
          <Tab
            item={item}
            key={item.key}
            icon={props.icon}
            variant={props.variant}
            focusKey={focusKey}
            textColor={textColor}
            currentKey={currentKey}
            isDisabled={isDisabled}
            disabledKeys={disabledKeys}
            indicatorColor={indicatorColor}
            onSelect={onSelect}
          />
        ))}
      </StyledTabs>
      {!hidePanel && (
        <TabPanel key={selectedItem?.key} selectedItem={selectedItem} />
      )}
    </StyledWrapper>
  )
})

export default Tabs as typeof Tabs & {
  Item: typeof TabItem
  Paneless: typeof TabsPaneless
}

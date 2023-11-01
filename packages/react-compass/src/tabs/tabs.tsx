import {useId} from '@floating-ui/react'
import React from 'react'
import {
  KeyboardNavigationProvider,
  useKeyboardNavigation,
  useKeyboardNavigationState,
} from '../utils/hooks'
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
    onKeyDown: onKeyDownProps,
    ...delegated
  } = props

  const tabRef = useDOMRef<HTMLDivElement>(ref)
  const {collection, currentKey, setCurrentKey} = useTab(
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

  const {onKeyDown, nextFocus, prevFocus} = useKeyboardNavigation()

  const handleKeyDown = (e: React.KeyboardEvent<HTMLDivElement>) => {
    onKeyDown?.<HTMLDivElement>({
      ArrowLeft: (e) => {
        e.preventDefault()
        orientation === 'horizontal' && prevFocus?.()
      },
      ArrowRight: (e) => {
        e.preventDefault()
        console.log('go right')
        orientation === 'horizontal' && nextFocus?.()
      },
      ArrowUp: (e) => {
        e.preventDefault()
        orientation === 'vertical' && prevFocus?.()
      },
      ArrowDown: (e) => {
        e.preventDefault()
        orientation === 'vertical' && nextFocus?.()
      },
    })(e)

    onKeyDownProps?.(e)
  }

  const id = useId()

  const tabPanelId = `${id}_${selectedItem?.key}`

  return (
    <StyledWrapper>
      <StyledTabs
        ref={tabRef}
        css={css}
        orientation={orientation}
        variant={variant}
        onKeyDown={handleKeyDown}
        role='tablist'
        aria-orientation={orientation}
        {...delegated}
      >
        {[...collection].map((item) => (
          <Tab
            key={item.key}
            icon={props.icon}
            variant={props.variant}
            disabledKeys={disabledKeys}
            currentKey={currentKey}
            textColor={textColor}
            indicatorColor={indicatorColor}
            item={item}
            isDisabled={isDisabled}
            onSelect={onSelect}
            id={`${id}_${item.key}`}
          />
        ))}
      </StyledTabs>
      {!hidePanel && (
        <TabPanel
          aria-labelledby={tabPanelId}
          key={selectedItem?.key}
          selectedItem={selectedItem}
        />
      )}
    </StyledWrapper>
  )
})

export const TabsContextWrapper = React.forwardRef<HTMLDivElement, TabsProps>(
  (props, ref) => {
    const {provider} = useKeyboardNavigationState()

    return (
      <KeyboardNavigationProvider {...provider}>
        <Tabs {...props} ref={ref} />
      </KeyboardNavigationProvider>
    )
  },
)

export default TabsContextWrapper as typeof Tabs & {
  Item: typeof TabItem
  Paneless: typeof TabsPaneless
}

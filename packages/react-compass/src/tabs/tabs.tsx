import {useId} from '@floating-ui/react'
import React from 'react'
import {
  KeyboardNavigationProvider,
  useKeyboardNavigation,
  useKeyboardNavigationState,
} from '../utils/hooks'
import CssInjection from '../utils/objectToCss/CssInjection'
import {useDOMRef} from '../utils/use-dom-ref'
import TabItem from './item'
import styles from './styles/tabs.module.css'
import Tab from './tab'
import TabPanel from './tab-panel'
import TabsPaneless from './tabs-paneless'
import {Icon, Variant, useTab} from './utils'

interface Props {
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
  css?: unknown
  className?: string
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
    className = '',
    onKeyDown: onKeyDownProps,
    ...htmlProps
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
    <div className={`cdg-tab-wrapper ${styles.wrapper} ${className}`}>
      <CssInjection css={css} childrenRef={tabRef}>
        <div
          ref={tabRef}
          className={`cdg-tabs ${styles.tabs} ${styles[`${orientation}`]} ${
            styles[`${variant}`]
          } ${
            styles[
              variant +
                `${orientation.charAt(0).toUpperCase() + orientation.slice(1)}`
            ]
          }`}
          onKeyDown={handleKeyDown}
          role='tablist'
          aria-orientation={orientation}
          {...htmlProps}
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
        </div>
        {!hidePanel && (
          <TabPanel
            aria-labelledby={tabPanelId}
            key={selectedItem?.key}
            selectedItem={selectedItem}
          />
        )}
      </CssInjection>
    </div>
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

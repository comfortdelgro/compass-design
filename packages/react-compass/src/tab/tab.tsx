import React, {Key, useEffect, useState} from 'react'
import type {StyledComponentProps} from '../utils/stitches.types'
import type TabItem from './tab-item'
import type TabList from './tab-list'
import type TabPanel from './tab-panel'

interface TabContext {
  selectedTab: Key | undefined
  setSelectedTab: (tab: Key) => void
  props: TabProps
}

export const TabContext = React.createContext<TabContext | null>(null)

export type TabProps = Props

interface Props extends StyledComponentProps {
  className?: string
  items?: Iterable<object>
  disabledKeys?: Key[]
  children?: React.ReactNode
  variant?: 'rounded' | 'simple'
  orientation?: 'horizontal' | 'vertical'
  onChange?: (key: Key) => void
  selectedKey?: Key
  defaultSelectedKey?: Key
}

const Tab = React.forwardRef<HTMLDivElement, TabProps>((props, ref) => {
  const {
    selectedKey,
    defaultSelectedKey,
    children,
    onChange,
    ...ariaSafeProps
  } = props

  const [selectedTab, setSelectedTab] = useState<Key | undefined>(
    selectedKey ?? defaultSelectedKey,
  )

  useEffect(() => {
    if (selectedKey) handleChange(selectedKey)
  }, [selectedKey])

  const handleChange = (e: Key) => {
    onChange?.(e)
    setSelectedTab(e)
  }

  return (
    <TabContext.Provider
      value={{props, selectedTab, setSelectedTab: handleChange}}
    >
      <div {...ariaSafeProps} ref={ref}>
        {children}
      </div>
    </TabContext.Provider>
  )
})

export default Tab as typeof Tab & {List: typeof TabList} & {
  Panel: typeof TabPanel
} & {Item: typeof TabItem}

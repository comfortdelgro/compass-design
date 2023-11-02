import {useMergeRefs} from '@floating-ui/react'
import React, {HTMLAttributes} from 'react'
import {
  useKeyboardNavigation,
  useKeyboardNavigationState,
} from '../../utils/hooks'
import CssInjection from '../../utils/objectToCss/CssInjection'
import {useDOMRef} from '../../utils/use-dom-ref'
import {TabItemProps} from '../item'
import styles from '../styles/tab.module.css'
import {Icon, Variant} from '../utils'

interface Props {
  textColor: string
  isDisabled: boolean
  key: React.Key | null
  indicatorColor: string
  icon: Icon | undefined
  disabledKeys: React.Key[]
  variant: Variant | undefined
  currentKey: React.Key | undefined
  item: React.DetailedReactHTMLElement<TabItemProps, HTMLElement>
  onSelect: (key: React.Key) => void
  css?: unknown
}

type TabProps = Props & Omit<HTMLAttributes<HTMLDivElement>, keyof Props>

const Tab = React.forwardRef<HTMLDivElement, TabProps>(
  (
    {
      item,
      isDisabled,
      textColor,
      currentKey,
      indicatorColor,
      disabledKeys,
      variant = 'rounded',
      icon = 'none',
      id,
      onSelect,
      css = {},
      ...htmlProps
    },
    ref,
  ) => {
    const {title} = item.props
    const tabRef = useDOMRef<HTMLDivElement>(ref)
    const isSelected = React.useMemo(
      () => currentKey === item.key,
      [currentKey],
    )
    const isDisabledItem = React.useMemo(
      () => (item.key ? [...disabledKeys].includes(item.key) : false),
      [disabledKeys],
    )
    const disabledState = isDisabled || isDisabledItem

    const handleSelect = () => {
      if (item.key && !disabledState) onSelect(item.key)
    }

    const handleKeyDown = (event: React.KeyboardEvent<HTMLDivElement>) => {
      const key = event.key
      if (key === 'Enter' || key === ' ') {
        event.preventDefault()
        handleSelect()
      }
    }

    const {useDescendant} = useKeyboardNavigationState()
    const {index, register} = useDescendant({disabled: disabledState})
    const {onFocus} = useKeyboardNavigation()

    const handleOnFocus = () => {
      onFocus?.(index)()
    }

    const mergeRef = useMergeRefs([tabRef, register])
    const tabClassName = [
      `cdg-tab-item-wrapper`,
      styles.tab,
      styles[`icon${icon.charAt(0).toUpperCase() + icon.slice(1)}`],
      styles[`${variant}`],
      styles[`active${isSelected ? 'True' : 'False'}`],
      styles[`disabled${!!disabledState ? 'True' : 'False'}`],
      styles[variant + `Disabled${!!disabledState ? 'True' : 'False'}`],
      styles[variant + `Active${!!isSelected ? 'True' : 'False'}`],
    ]
      .filter(Boolean)
      .join(' ')

    const tabIconClassName = [
      `cdg-tab-icon`,
      styles.icon,
      styles[`icon${icon.charAt(0).toUpperCase() + icon.slice(1)}Icon`],
      variant && styles[variant + `Icon`],
      variant &&
        disabledState &&
        styles[variant + `Disabled${!!disabledState ? 'True' : 'False'}Icon`],
      variant &&
        isSelected &&
        styles[variant + `Active${!!isSelected ? 'True' : 'False'}Icon`],
    ]
      .filter(Boolean)
      .join(' ')

    // legacy, users are advised to use className styling for customization
    const customCss = {
      [styles.simple]: {
        '&:focus-visible': {
          boxShadow: `0px -2px ${indicatorColor}`,
          color: `${textColor}`,
        },
        '&:hover': {
          color: `${textColor}`,
        },
      },
      [styles.h5]: {
        '&:focus-visible': {
          boxShadow: `0px -2px ${indicatorColor}`,
        },
      },
      [styles.simpleActiveTrue]: {
        borderBottom: `${indicatorColor} 2px solid`,
        color: `${textColor}`,
      },
      [styles.simpleActiveTrueIcon]: {
        backgroundColor: `${textColor}`,
        '& path': {
          fill: `${textColor}`,
        },
      },
      [styles.h5ActiveTrueIcon]: {
        backgroundColor: `${textColor}`,
      },
      [styles.rounded]: {
        color: `${textColor}`,
      },
      [styles.icon]: {
        backgroundColor: `${textColor}`,
      },
      [styles.activeTrue]: {
        backgroundColor: `${textColor}`,
      },
      ...(css as Object),
    }

    return (
      <CssInjection css={customCss} childrenRef={mergeRef}>
        <div
          className={tabClassName}
          id={id}
          ref={mergeRef}
          tabIndex={isSelected && !disabledState ? 0 : -1}
          onClick={handleSelect}
          onKeyDown={handleKeyDown}
          onFocus={handleOnFocus}
          role='tab'
          aria-selected={isSelected}
          {...htmlProps}
        >
          {title}
          {icon !== 'none' && (
            <div className={`${tabIconClassName}`}>
              {disabledState ? <DisableIcon /> : <TickIcon />}
            </div>
          )}
        </div>
      </CssInjection>
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

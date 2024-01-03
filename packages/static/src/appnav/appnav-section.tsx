import {isNil} from 'lodash'
import React, {HTMLAttributes, useCallback} from 'react'
import Badge from '../badge'
import CssInjection from '../utils/objectToCss/CssInjection'
import {useDOMRef} from '../utils/use-dom-ref'
import styles from './styles/appnav.module.css'

interface Props {
  css?: unknown
  isActive?: boolean
  inactiveIcon: React.ReactNode
  activeIcon: React.ReactNode
  hasBadge?: boolean
  label: string
  index?: number
  onChange?: (index: number) => void
}

export type AppNavSectionProps = Props &
  Omit<HTMLAttributes<HTMLButtonElement>, keyof Props>

export const AppNavSection = React.forwardRef<
  HTMLButtonElement,
  AppNavSectionProps
>((props, ref) => {
  const itemRef = useDOMRef(ref)
  const {
    isActive = false,
    inactiveIcon,
    activeIcon,
    hasBadge = false,
    onChange,
    index,
    label,
    css = {},
    ...delegated
  } = props

  const handleClick = useCallback(() => {
    if (!isNil(onChange) && !isNil(index)) {
      onChange(index)
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  const rootClasses = [
    styles.appNavSection,
    isActive ? styles.isActive : styles.isInactive,
    'cdg-appnav-section',
  ]
    .filter(Boolean)
    .join(' ')

  return (
    <CssInjection css={css} childrenRef={itemRef}>
      <button
        type='button'
        ref={itemRef}
        className={rootClasses}
        onClick={handleClick}
        tabIndex={0}
        {...delegated}
      >
        <div className={styles.icon}>
          {hasBadge && (
            <Badge
              label=''
              css={{
                width: 'var(--cdg-spacing-2)',
                height: 'var(--cdg-spacing-2)',
                backgroundColor: 'var(--cdg-color-danger)',
                padding: 0,
                borderRadius: '50%',
                position: 'absolute',
                right: '-15px',
                top: 0,
              }}
            />
          )}
          {isActive ? activeIcon : inactiveIcon}
        </div>
        <span>{label}</span>
      </button>
    </CssInjection>
  )
})

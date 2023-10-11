import {isNil} from 'lodash'
import React, {HTMLAttributes, useCallback} from 'react'
import Badge from '../badge'
import {StyledComponentProps} from '../utils/stitches.types'
import {useDOMRef} from '../utils/use-dom-ref'
import {StyledAppNavSection} from './appnav.styles'

interface Props extends StyledComponentProps {
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
  }, [])

  return (
    <StyledAppNavSection
      type='button'
      ref={itemRef}
      isActive={isActive}
      css={css}
      onClick={handleClick}
      tabIndex={0}
      {...delegated}
    >
      <div className='icon'>
        {hasBadge && (
          <Badge
            label=''
            css={{
              width: '$2',
              height: '$2',
              backgroundColor: '$danger',
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
    </StyledAppNavSection>
  )
})

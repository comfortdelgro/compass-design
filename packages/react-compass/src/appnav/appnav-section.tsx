import React, {HTMLAttributes} from 'react'
import Badge from '../badge'
import {StyledComponentProps} from '../utils/stitches.types'
import {useDOMRef} from '../utils/use-dom-ref'
import {StyledAppNavSection} from './appnav.styles'

interface Props extends StyledComponentProps {
  active?: boolean
  icon: React.ReactNode
  hasBadge?: boolean
  label: string
  value?: number
  onChange?: (value: number) => void
}

export type AppNavSectionProps = Props &
  Omit<HTMLAttributes<HTMLButtonElement>, keyof Props>

export const AppNavSection = React.forwardRef<
  HTMLButtonElement,
  AppNavSectionProps
>((props, ref) => {
  const itemRef = useDOMRef(ref)
  const {
    active = false,
    icon = <DefaultIcon />,
    hasBadge = false,
    onChange,
    value,
    label,
    css = {},
    ...delegated
  } = props

  const handleClick = () => {
    if (onChange !== undefined && value !== undefined) {
      onChange(value)
    }
  }
  return (
    <StyledAppNavSection
      type='button'
      ref={itemRef}
      active={active}
      css={css}
      onClick={handleClick}
      tabIndex={0}
      {...delegated}
    >
      {hasBadge && (
        <Badge
          label=''
          css={{
            width: '8px',
            height: '8px',
            backgroundColor: '$danger',
            padding: 0,
            borderRadius: '50%',
            position: 'absolute',
            right: 0,
            top: 0,
          }}
        />
      )}
      {icon}
      <span>{label}</span>
    </StyledAppNavSection>
  )
})

const DefaultIcon = () => (
  <svg viewBox='0 0 512 512'>
    <path
      fill='currentColor'
      d='M464 256A208 208 0 1 0 48 256a208 208 0 1 0 416 0zM0 256a256 256 0 1 1 512 0A256 256 0 1 1 0 256zm169.8-90.7c7.9-22.3 29.1-37.3 52.8-37.3h58.3c34.9 0 63.1 28.3 63.1 63.1c0 22.6-12.1 43.5-31.7 54.8L280 264.4c-.2 13-10.9 23.6-24 23.6c-13.3 0-24-10.7-24-24V250.5c0-8.6 4.6-16.5 12.1-20.8l44.3-25.4c4.7-2.7 7.6-7.7 7.6-13.1c0-8.4-6.8-15.1-15.1-15.1H222.6c-3.4 0-6.4 2.1-7.5 5.3l-.4 1.2c-4.4 12.5-18.2 19-30.6 14.6s-19-18.2-14.6-30.6l.4-1.2zM224 352a32 32 0 1 1 64 0 32 32 0 1 1 -64 0z'
    />
  </svg>
)

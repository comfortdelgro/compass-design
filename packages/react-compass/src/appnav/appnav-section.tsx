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
  <svg
    aria-hidden='true'
    // focusable='false'
    // data-prefix='fas'
    // data-icon='house'
    // class='svg-inline--fa fa-house '
    role='img'
    xmlns='http://www.w3.org/2000/svg'
    viewBox='0 0 576 512'
  >
    <path
      fill='currentColor'
      d='M575.8 255.5c0 18-15 32.1-32 32.1h-32l.7 160.2c0 2.7-.2 5.4-.5 8.1V472c0 22.1-17.9 40-40 40H456c-1.1 0-2.2 0-3.3-.1c-1.4 .1-2.8 .1-4.2 .1H416 392c-22.1 0-40-17.9-40-40V448 384c0-17.7-14.3-32-32-32H256c-17.7 0-32 14.3-32 32v64 24c0 22.1-17.9 40-40 40H160 128.1c-1.5 0-3-.1-4.5-.2c-1.2 .1-2.4 .2-3.6 .2H104c-22.1 0-40-17.9-40-40V360c0-.9 0-1.9 .1-2.8V287.6H32c-18 0-32-14-32-32.1c0-9 3-17 10-24L266.4 8c7-7 15-8 22-8s15 2 21 7L564.8 231.5c8 7 12 15 11 24z'
    ></path>
  </svg>
)

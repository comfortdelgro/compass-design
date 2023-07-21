import React from 'react'
import {pickChild} from '../utils/pick-child'
import {StyledComponentProps} from '../utils/stitches.types'
import {useDOMRef} from '../utils/use-dom-ref'
import DropdownMultilevelSubmenu from './dropdown-multilevel-submenu'
import {StyledDropdownMultilevelItem} from './dropdown-multilevel.styles'

interface Props extends StyledComponentProps {
  children?: React.ReactNode
}

const ArrowRightIcon = () => (
  <svg
    viewBox='0 0 16 17'
    fill='none'
    xmlns='http://www.w3.org/2000/svg'
    className='cdg-arrow-right-icon'
  >
    <path
      d='M5.14268 15.5C4.85025 15.5 4.55768 15.3861 4.33482 15.1582C3.88839 14.7025 3.88839 13.9643 4.33482 13.5086L9.24268 8.50046L4.33482 3.49141C3.88839 3.03571 3.88839 2.29747 4.33482 1.84177C4.78125 1.38608 5.50446 1.38608 5.95089 1.84177L11.6652 7.67473C12.1116 8.13043 12.1116 8.86866 11.6652 9.32436L5.95089 15.1573C5.72768 15.387 5.43518 15.5 5.14268 15.5Z'
      fill='currentColor'
    />
  </svg>
)

export type DropdownMultilevelItemProps = Props &
  Omit<React.HTMLAttributes<HTMLLIElement>, keyof Props>

const DropdownMultilevelItem = React.forwardRef<
  HTMLLIElement,
  DropdownMultilevelItemProps
>((props, ref) => {
  const {children, css = {}, ...delegated} = props

  const {child} = pickChild<typeof DropdownMultilevelSubmenu>(
    children,
    DropdownMultilevelSubmenu,
  )
  const DropdownMultilevelItemRef = useDOMRef<HTMLLIElement>(ref)

  return (
    <StyledDropdownMultilevelItem
      css={css}
      ref={DropdownMultilevelItemRef}
      tabIndex={1}
      {...delegated}
    >
      {children}
      {!!child && <ArrowRightIcon />}
    </StyledDropdownMultilevelItem>
  )
})

export default DropdownMultilevelItem

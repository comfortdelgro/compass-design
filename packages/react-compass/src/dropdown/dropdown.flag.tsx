import React from 'react'
import {StyledComponentProps} from '../utils/stitches.types'
import Dropdown, {DropdownProps} from './dropdown'
import {DropdownVariantProps} from './dropdown.styles'
import {countries} from './flags'
import DropdownItem from './item'

interface P extends DropdownProps, StyledComponentProps {
  flagKeyType?: 'alpha-2' | 'alpha-3' | 'name' | 'country-code'
  onFlagChange?: (p: string) => void
}

type Props = Omit<P, 'children'>

export type DropdownFlagProps = Props & DropdownVariantProps

const DropdownFlag = React.forwardRef<HTMLDivElement, DropdownFlagProps>(
  (props, ref) => {
    return (
      <PreDropdown ref={ref} {...props}>
        {countries.map((item) => (
          <DropdownItem key={item[props.flagKeyType ?? 'alpha-3']}>
            {item.name}
          </DropdownItem>
        ))}
      </PreDropdown>
    )
  },
)

const PreDropdown = React.forwardRef<HTMLDivElement, DropdownProps>(
  (props, ref) => {
    return (
      <Dropdown {...props} ref={ref} type='flag'>
        {props.children}
      </Dropdown>
    )
  },
)

export default DropdownFlag

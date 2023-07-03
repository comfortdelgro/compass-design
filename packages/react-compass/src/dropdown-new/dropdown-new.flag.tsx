import React from 'react'
import {StyledComponentProps} from '../utils/stitches.types'
import DropdownNew, {DropdownProps} from './dropdown-new'
import DropdownNewItem from './dropdown-new-item'
import {DropdownVariantProps} from './dropdown-new.styles'
import {countries} from './flags'

interface P extends DropdownProps, StyledComponentProps {
  flagKeyType?: 'alpha-2' | 'alpha-3' | 'name' | 'country-code'
  onCountryChange?: (p: {
    name: string
    'alpha-2': string
    'alpha-3': string
    'country-code': string
    'phone-code': string
  }) => void
}

type Props = Omit<P, 'children'>

export type DropdownFlagProps = Props & DropdownVariantProps

const DropdownFlag = React.forwardRef<HTMLDivElement, DropdownFlagProps>(
  (props, ref) => {
    return (
      <DropdownNew {...props} ref={ref} type='flag'>
        {countries.map((country) => (
          <DropdownNewItem
            key={country['alpha-3']}
            value={country['alpha-3']}
            flagName={country['alpha-2']}
          >
            {country.name}
          </DropdownNewItem>
        ))}
      </DropdownNew>
    )
  },
)

export default DropdownFlag

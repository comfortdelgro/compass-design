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
    const {flagKeyType, onSelectionChange, onCountryChange, ...delegated} =
      props

    const handleCountryChange = React.useCallback(
      (c: React.Key) => {
        const country = countries.find((item) => item['alpha-3'] === c)
        if (country) {
          if (flagKeyType) {
            onSelectionChange?.(country[flagKeyType])
          }
          onCountryChange?.(country)
        }
      },
      [flagKeyType, onSelectionChange, onCountryChange],
    )

    return (
      <DropdownNew
        ref={ref}
        type='flag'
        onSelectionChange={handleCountryChange}
        {...delegated}
      >
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

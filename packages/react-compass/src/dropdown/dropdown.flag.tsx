import React from 'react'
import Dropdown, {DropdownProps} from '.'
import {StyledComponentProps} from '../utils/stitches.types'
import {DropdownVariantProps} from './dropdown.styles'
import {countries} from './flags'
import DropdownItem from './item'

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
    const {flagKeyType = 'alpha-3', selectedKey, defaultSelectedKey} = props

    const [selected, setSelected] = React.useState<React.Key | undefined>(
      defaultSelectedKey,
    )

    React.useEffect(() => {
      const getAlpha3FromKey = (key: React.Key) => {
        const selected = countries.find(
          (item) =>
            item.name === key ||
            item['alpha-2'] === key ||
            item['alpha-3'] === key ||
            item['phone-code'] === key ||
            item['country-code'] === key,
        )
        if (selected) {
          return selected['alpha-3']
        }
        return undefined
      }

      if (selectedKey) {
        setSelected(getAlpha3FromKey(selectedKey))
      }
    }, [selectedKey])

    const handleCountryChange = (c: React.Key) => {
      const country = countries.find((item) => item['alpha-3'] === c)
      if (country) {
        props.onSelectionChange?.(country[flagKeyType])
        props.onCountryChange?.(country)
      }
    }

    const valueProps = {
      ...(selected ? {selectedKey: selected} : {}),
    }

    return (
      <PreDropdown
        ref={ref}
        {...props}
        {...valueProps}
        onSelectionChange={handleCountryChange}
      >
        {countries.map((item) => (
          <DropdownItem key={item['alpha-3']}>{item.name}</DropdownItem>
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

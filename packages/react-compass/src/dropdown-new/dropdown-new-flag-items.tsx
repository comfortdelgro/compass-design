import React from 'react'
import DropdownNewItem from './dropdown-new-item'
import {countries} from './flags'

export default function DropdownNewFlagItems() {
  return (
    <>
      {countries.map((country) => (
        <DropdownNewItem
          key={country['alpha-3']}
          value={country['alpha-3']}
          flagName={country['alpha-2']}
        >
          {country.name}
        </DropdownNewItem>
      ))}
    </>
  )
}

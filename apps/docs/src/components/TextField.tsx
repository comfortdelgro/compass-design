import Textfield from '@comfortdelgro/react-compass/textfield'
import React from 'react'

export const Controlled = () => {
  const [value, setValue] = React.useState('')
  return (
    <>
      <Textfield
        placeholder='Pick a number from 1 - 100'
        value={value}
        onChange={(value) => {
          const valueAsNumber = Number(value)
          if ((valueAsNumber >= 0 && valueAsNumber <= 100) || value === '') {
            setValue(value as string)
          }
          return
        }}
      />
    </>
  )
}

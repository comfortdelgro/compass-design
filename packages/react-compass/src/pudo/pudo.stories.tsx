import React, {useState} from 'react'
import Pudo from './pudo'
import {PudoItemProps} from './pudo-item'

type PudoItemKeys = 'pickUp' | 'des1' | 'des2'
const pudoItems: Array<PudoItemProps<PudoItemKeys>> = [
  {name: 'pickUp', value: ''},
  {name: 'des1', value: ''},
  {name: 'des2', value: ''},
]

export function Default() {
  const initFormValues = pudoItems.reduce(
    (obj, {name, value}) => ({...obj, [name]: value}),
    {},
  ) as Record<PudoItemKeys, string>

  const [formValues, setFormValues] =
    useState<Record<PudoItemKeys, string>>(initFormValues)

  return (
    <>
      <h4>PUDO</h4>

      <div>
        Form values:
        <pre>{JSON.stringify(formValues, null, 2)}</pre>
      </div>

      <Pudo
        items={pudoItems}
        onValuesChange={(values) => setFormValues(values)}
      />
    </>
  )
}

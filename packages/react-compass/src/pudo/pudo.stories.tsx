import React, {useState} from 'react'
import Pudo from './pudo'

const pudoItem = [
  {name: 'pickUp', value: ''},
  {name: 'des1', value: ''},
  {name: 'des2', value: ''},
] as const

type PudoItemKeys = (typeof pudoItem)[number]['name']

export function Default() {
  const initFormValues = pudoItem.reduce(
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
        items={pudoItem}
        onValuesChange={(values) => setFormValues(values)}
      />
    </>
  )
}

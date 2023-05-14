import React from 'react'
import {Column} from '../utils'
import Pagination from './index'

export const Variants = () => {
  return (
    <Column>
      <h3>1. Total pages prop</h3>
      <Pagination total={1000000000} />
      <h3>2. Current page prop</h3>
      <Pagination total={1000000000} page={3} />
      <h3>3. OnChange prop</h3>
      <Pagination
        total={1000000000}
        onChange={(page) => {
          console.log(page)
        }}
      />
    </Column>
  )
}

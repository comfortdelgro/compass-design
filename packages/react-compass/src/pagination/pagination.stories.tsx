import React, {useState} from 'react'
import {Column} from '../utils'
import Pagination from './index'

export const Variants = () => {
  const [page, setPage] = useState(1)
  return (
    <Column>
      <h3>1. Total pages prop</h3>
      <Pagination total={1000000000} />
      <h3>2. Current page prop</h3>
      <Pagination total={1000000000} page={3} />
      <h3>3. OnChange prop</h3>
      <Pagination page={page} total={100} onChange={(page) => setPage(page)}>
        <Pagination.ItemsCounting
          totalItem={100}
          page={page}
        ></Pagination.ItemsCounting>
      </Pagination>
    </Column>
  )
}

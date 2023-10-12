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
      <Pagination
        rowsOptions={[5, 10, 15, 20]}
        rowsPerPage={5}
        onRowsPerPageChange={(rows) => {
          console.log(rows)
        }}
        page={page}
        total={10}
        onChange={(page) => setPage(page)}
        count={100}
      ></Pagination>
    </Column>
  )
}

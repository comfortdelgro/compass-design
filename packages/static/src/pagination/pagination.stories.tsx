'use client'

import type {Meta} from '@storybook/react'
import {useState} from 'react'
import Pagination from './index'

const style: {
  display: string
  flexDirection: 'column' | 'row'
  alignItems: string
  justifyContent: string
  height: string
  width: string
  padding: string
} = {
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
  height: '100%',
  width: '100%',
  padding: '3rem',
}

export const Variants = () => {
  const [page, setPage] = useState(1)
  return (
    <div style={{...style}}>
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
    </div>
  )
}

const meta = {
  title: 'Example/Pagination',
  component: Variants,
  tags: ['autodocs'],
  parameters: {
    layout: 'fullscreen',
  },
} satisfies Meta<typeof Variants>

export default meta

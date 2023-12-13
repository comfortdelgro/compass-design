'use client'

import React from 'react'
import styles from '../styles/pagination.module.css'

export type Props = React.HTMLAttributes<HTMLDivElement>

const ItemCounting: React.FC<{
  count: number
  page: number
  rowsPerPage: number
}> = ({count, page, rowsPerPage}) => {
  const start = (page - 1) * rowsPerPage + 1
  const end = Math.min(page * rowsPerPage, count)
  return (
    <div
      className={styles.paginationItemCounting}
    >{`${start} - ${end} of ${count}`}</div>
  )
}

export default ItemCounting

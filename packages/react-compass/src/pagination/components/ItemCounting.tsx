'use client'

import React from 'react'
import {classNames} from '../../utils/string'
import styles from '../styles/pagination.module.css'

export type ItemCountingProps = React.HTMLAttributes<HTMLDivElement>

const ItemCounting: React.FC<{
  count: number
  page: number
  rowsPerPage: number
}> = ({count, page, rowsPerPage}) => {
  const start = (page - 1) * rowsPerPage + 1
  const end = Math.min(page * rowsPerPage, count)
  return (
    <div
      className={classNames(
        styles.paginationItemCounting,
        'cdg-pagination-item-counting',
      )}
    >{`${start} - ${end} of ${count}`}</div>
  )
}

export default ItemCounting

'use client'

import React from 'react'
import Dropdown from '../../dropdown'
import {classNames} from '../../utils/string'
import styles from '../styles/pagination.module.css'

export type RowsCountingProps = React.HTMLAttributes<HTMLDivElement>

const RowsCounting: React.FC<{
  rowsPerPage: number
  rowsOptions: number[]
  onRowsPerPageChange: (newValue: number) => void | undefined
}> = ({rowsPerPage, onRowsPerPageChange, rowsOptions}) => {
  return (
    <div
      className={classNames(
        styles.paginationRowsCounting,
        'cdg-pagination-row-counting',
      )}
    >
      <span>Rows per page:</span>
      <Dropdown.Select
        style={{width: '138px', gap: '4px'}}
        defaultValue={rowsPerPage.toString()}
        onValueChange={(k) => onRowsPerPageChange?.(Number(k))}
      >
        {rowsOptions.map((option, index) => (
          <Dropdown.Item key={index} value={option.toString()}>
            {`${option} rows`}
          </Dropdown.Item>
        ))}
      </Dropdown.Select>
    </div>
  )
}

export default RowsCounting

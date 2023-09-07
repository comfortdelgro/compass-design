import React, {ForwardedRef, forwardRef} from 'react'
import type {StyledComponentProps} from '../utils/stitches.types'
import {StyledPaginationItemCounting} from './pagination-itemCounting.styles'
import {PaginationVariantProps} from './pagination.styles'

interface Props extends StyledComponentProps {
  totalItem?: number
  page?: number
}

export type ItemCountingProps = Props &
  PaginationVariantProps &
  Omit<React.HTMLAttributes<HTMLDivElement>, keyof Props>

const ItemCounting = forwardRef<HTMLDivElement, ItemCountingProps>(
  (props, ref: ForwardedRef<HTMLDivElement>) => {
    const {page = 0, totalItem = 0, css = {}} = props
    return (
      <StyledPaginationItemCounting css={css} ref={ref}>
        {(page - 1) * 10 + 1} - {(page - 1) * 10 + 10} of {totalItem}
      </StyledPaginationItemCounting>
    )
  },
)

export default ItemCounting

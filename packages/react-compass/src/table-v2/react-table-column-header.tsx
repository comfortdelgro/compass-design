import {flexRender, Header, SortDirection} from '@tanstack/react-table'
import React from 'react'
import {useDOMRef} from '../utils/use-dom-ref'
import {
  StyledReactTableColumnHeader,
  StyledReactTableColumnHeaderContent,
} from './react-table-column-header.styles'
import ReactTableResizer from './react-table-resizer'
interface Props<TData, TValue> {
  headerProps: Header<TData, TValue>
}

export type ColumnHeaderProps<TData = any, TValue = unknown> = Props<
  TData,
  TValue
> &
  Omit<React.HTMLAttributes<HTMLDivElement>, keyof Props<TData, TValue>>

const ReactTableColumnHeader = React.forwardRef<
  HTMLTableCellElement,
  ColumnHeaderProps
>(({headerProps}, ref) => {
  const enableResizing = headerProps?.column?.columnDef?.enableResizing
  const tableRowRef = useDOMRef<HTMLTableCellElement>(ref)

  return (
    <StyledReactTableColumnHeader
      ref={tableRowRef}
      key={headerProps.id}
      colSpan={headerProps.colSpan}
      onClick={headerProps.column.getToggleSortingHandler()}
      css={{
        width: headerProps.getSize(),
      }}
    >
      {headerProps.isPlaceholder ? null : (
        <StyledReactTableColumnHeaderContent
          canSort={headerProps.column.getCanSort()}
        >
          {flexRender(
            headerProps.column.columnDef.header,
            headerProps.getContext(),
          )}
          {{
            asc: <ArrowUpIcon />,
            desc: <ArrowDownIcon />,
          }[headerProps.column.getIsSorted() as SortDirection] ?? null}
        </StyledReactTableColumnHeaderContent>
      )}
      {enableResizing && (
        <ReactTableResizer resizeHandler={headerProps.getResizeHandler()} />
      )}
    </StyledReactTableColumnHeader>
  )
})

const ArrowDownIcon = () => (
  <svg width='12' height='13' viewBox='0 0 32 32'>
    <g fill='currentColor'>
      <path d='M15.9989 24C15.3734 24 14.7477 23.7582 14.271 23.2746L2.04944 10.8936C1.09463 9.92634 1.09463 8.35938 2.04944 7.39211C3.00425 6.42485 4.55105 6.42485 5.50586 7.39211L15.9989 18.0262L26.4941 7.39405C27.449 6.42679 28.9957 6.42679 29.9506 7.39405C30.9054 8.36131 30.9054 9.92827 29.9506 10.8955L17.729 23.2765C17.2516 23.7601 16.6252 24 15.9989 24Z'></path>
    </g>
  </svg>
)
const ArrowUpIcon = () => (
  <svg width='12' height='13' viewBox='0 0 32 32'>
    <g fill='currentColor'>
      <path d='M16.0011 6.66667C16.6266 6.66667 17.2523 6.90849 17.729 7.39212L29.9506 19.7731C30.9054 20.7403 30.9054 22.3073 29.9506 23.2746C28.9957 24.2418 27.4489 24.2418 26.4941 23.2746L16.0011 12.6405L5.50586 23.2726C4.55104 24.2399 3.00425 24.2399 2.04944 23.2726C1.09463 22.3054 1.09463 20.7384 2.04944 19.7711L14.271 7.39018C14.7484 6.90655 15.3748 6.66667 16.0011 6.66667Z'></path>
    </g>
  </svg>
)
export default ReactTableColumnHeader

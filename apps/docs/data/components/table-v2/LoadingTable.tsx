import {
  Pagination,
  ReactTable,
  TableV2Options,
} from '@comfortdelgro/react-compass-old'
import {
  TableV2CellContext,
  TableV2ColumnDef,
  TableV2HeaderContext,
} from '@comfortdelgro/react-compass-old/table-v2'
import React, {useState} from 'react'

const TableWithLoading: React.FC = () => {
  const options: TableV2Options<any> = {
    enableSorting: true,
    enableMultiSort: true,
    columnResizeMode: 'onChange',
    manualSorting: true,
  }
  const [page, setPage] = useState(1)

  const TableHeader = ({table}: any) => {
    return (
      <ReactTable.CheckboxCell
        {...{
          checked: table.getIsAllRowsSelected(),
          indeterminate: table.getIsSomeRowsSelected(),
          onChange: table.getToggleAllRowsSelectedHandler(),
        }}
      />
    )
  }

  const TableHeaderCell = ({row}: any) => {
    return (
      <div className='px-1'>
        <ReactTable.CheckboxCell
          {...{
            disabled: !row.getCanSelect(),
            checked: row.getIsSelected(),
            indeterminate: row.getIsSomeSelected(),
            onChange: row.getToggleSelectedHandler(),
          }}
        />
      </div>
    )
  }

  const columns = React.useMemo<Array<TableV2ColumnDef<any>>>(
    () => [
      {
        id: 'select',
        header: ({table}) => <TableHeader table={table} />,
        cell: ({row}) => <TableHeaderCell row={row} />,
      },
      {
        id: 'name',
        header: () => <div style={{textAlign: 'center'}}>Name</div>,
        footer: (props: TableV2HeaderContext<any, unknown>) => props.column.id,
        enableGrouping: false,
        columns: [
          {
            accessorKey: 'firstName',
            cell: (info: TableV2CellContext<any, unknown>) =>
              info.getValue<string>(),
            header: () => <span>First Name</span>,
            footer: (props: TableV2HeaderContext<any, unknown>) =>
              props.column.id,
            sortDescriptor: 'asc',
          },
          {
            id: 'lastName',
            cell: (info: TableV2CellContext<any, unknown>) =>
              info.getValue<string>(),
            header: () => <span>Last Name</span>,
          },
        ],
      },
      {
        id: 'otherInfo',
        header: () => <div style={{textAlign: 'center'}}>Other info</div>,
        footer: (props: TableV2HeaderContext<any, unknown>) => props.column.id,
        enableGrouping: false,
        columns: [
          {
            accessorKey: 'age',
            header: () => 'Age',
            footer: (info: TableV2HeaderContext<any, unknown>) =>
              info.column.id,
          },
          {
            accessorKey: 'visits',
            header: () => <span>Visits</span>,
            footer: (info: TableV2HeaderContext<any, unknown>) =>
              info.column.id,
          },
          {
            accessorKey: 'status',
            header: 'Status',
            footer: (info: TableV2HeaderContext<any, unknown>) =>
              info.column.id,
          },
          {
            accessorKey: 'progress',
            header: 'Profile Progress',
            cell: (info: TableV2CellContext<any, unknown>) =>
              info.getValue<string>(),
            footer: (info: TableV2HeaderContext<any, unknown>) =>
              info.column.id,
          },
        ],
      },
    ],
    [],
  )

  return (
    <div>
      <ReactTable data={[]} columns={columns} options={options} isLoading>
        <ReactTable.Footer
          css={{
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'space-between',
          }}
        >
          <div>{/* Todo: Dropdown */}</div>
          <div
            style={{
              display: 'flex',
              flexDirection: 'row',
              alignItems: 'center',
              gap: '0.5rem',
            }}
          >
            <div
              style={{
                fontWeight: '600',
              }}
            >
              {(page - 1) * 10 + 1} - {(page - 1) * 10 + 10} of 100
            </div>
            <Pagination
              page={page}
              onChange={(page: number) => setPage(page)}
              total={10}
            />
          </div>
        </ReactTable.Footer>
      </ReactTable>
    </div>
  )
}

export default TableWithLoading

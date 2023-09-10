import {Pagination, Table} from '@comfortdelgro/react-compass'
import {
  TableCellContext,
  TableColumnDef,
  TableHeaderContext,
  TableOptions,
} from '@comfortdelgro/react-compass/table'
import React, {useState} from 'react'

const TableWithLoading: React.FC = () => {
  const options: TableOptions<any> = {
    enableSorting: true,
    enableMultiSort: true,
    columnResizeMode: 'onChange',
    manualSorting: true,
  }
  const [page, setPage] = useState(1)

  const TableHeader = ({table}: any) => {
    return (
      <Table.CheckboxCell
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
        <Table.CheckboxCell
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

  const columns = React.useMemo<Array<TableColumnDef<any>>>(
    () => [
      {
        id: 'select',
        header: ({table}) => <TableHeader table={table} />,
        cell: ({row}) => <TableHeaderCell row={row} />,
      },
      {
        id: 'name',
        header: () => <div style={{textAlign: 'center'}}>Name</div>,
        footer: (props: TableHeaderContext<any, unknown>) => props.column.id,
        enableGrouping: false,
        columns: [
          {
            accessorKey: 'firstName',
            cell: (info: TableCellContext<any, unknown>) =>
              info.getValue<string>(),
            header: () => <span>First Name</span>,
            footer: (props: TableHeaderContext<any, unknown>) =>
              props.column.id,
            sortDescriptor: 'asc',
          },
          {
            id: 'lastName',
            cell: (info: TableCellContext<any, unknown>) =>
              info.getValue<string>(),
            header: () => <span>Last Name</span>,
          },
        ],
      },
      {
        id: 'otherInfo',
        header: () => <div style={{textAlign: 'center'}}>Other info</div>,
        footer: (props: TableHeaderContext<any, unknown>) => props.column.id,
        enableGrouping: false,
        columns: [
          {
            accessorKey: 'age',
            header: () => 'Age',
            footer: (info: TableHeaderContext<any, unknown>) => info.column.id,
          },
          {
            accessorKey: 'visits',
            header: () => <span>Visits</span>,
            footer: (info: TableHeaderContext<any, unknown>) => info.column.id,
          },
          {
            accessorKey: 'status',
            header: 'Status',
            footer: (info: TableHeaderContext<any, unknown>) => info.column.id,
          },
          {
            accessorKey: 'progress',
            header: 'Profile Progress',
            cell: (info: TableCellContext<any, unknown>) =>
              info.getValue<string>(),
            footer: (info: TableHeaderContext<any, unknown>) => info.column.id,
          },
        ],
      },
    ],
    [],
  )

  return (
    <div>
      <Table data={[]} columns={columns} options={options} isLoading>
        <Table.Footer
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
        </Table.Footer>
      </Table>
    </div>
  )
}

export default TableWithLoading

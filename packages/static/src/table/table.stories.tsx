import {
  faDashboard,
  faFileLines,
  faTrashAlt,
} from '@fortawesome/free-solid-svg-icons'
import {Meta} from '@storybook/react'
import React, {useState} from 'react'
import Table, {TableColumnDef, TableSortingState} from '.'
import {Button, Icon, Pagination, SearchField} from '..'
import {Person, makeData} from './makeData'
import {OptionType} from './table'
export const Basic: React.FC = () => {
  const [page, setPage] = useState(1)
  const [data, setData] = useState<Person[]>(() => makeData(10))
  const options: OptionType<Person> = {
    enableSorting: true,
    enableMultiSort: true,
    columnResizeMode: 'onChange',
    manualSorting: false,
    enableRowSelection: (row) => row.original.age > 30,
  }

  // eslint-disable-next-line @typescript-eslint/no-empty-function
  const onSorting = (sortingField: TableSortingState) => {
    console.log(sortingField)
  }
  // eslint-disable-next-line @typescript-eslint/no-empty-function
  const onChangeRowSelection = (rowSelection: unknown) => {
    console.log(rowSelection)
  }

  const columns = React.useMemo<Array<TableColumnDef<Person>>>(
    () => [
      {
        id: 'select',
        header: ({table}) => {
          return (
            <div
              style={{
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
              }}
            >
              <Table.CheckboxCell
                checked={table.getIsAllRowsSelected()}
                indeterminate={table.getIsSomeRowsSelected()}
                onChange={table.getToggleAllRowsSelectedHandler()}
              />
            </div>
          )
        },
        cell: ({row}) => (
          <div
            style={{
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
            }}
          >
            <Table.CheckboxCell
              disabled={!row.getCanSelect()}
              checked={row.getIsSelected()}
              indeterminate={row.getIsSomeSelected()}
              onChange={row.getToggleSelectedHandler()}
            />
          </div>
        ),
      },
      {
        id: 'name',
        header: () => <div style={{textAlign: 'center'}}>Name</div>,
        footer: (props) => props.column.id,
        enableGrouping: false,
        columns: [
          {
            accessorKey: 'firstName',
            cell: (info) => info.getValue<string>(),
            header: () => <span>First Name</span>,
            footer: (props) => props.column.id,
            enableResizing: false,
            enableGrouping: false,
            enableColumnFilter: true,
            sortDescriptor: 'asc',
            // meta: {
            //   editable: true,
            //   updateData: (rowIndex: number, id: string, value: unknown) => {
            //     setData((old: Person[]) =>
            //       old.map((row, index) => {
            //         if (index === rowIndex) {
            //           return {
            //             ...old[rowIndex],
            //             [id]: value,
            //           } as Person
            //         }
            //         return row
            //       }),
            //     )
            //   },
            // },
          },
          {
            accessorFn: (row) => row.lastName,
            id: 'lastName',
            cell: (info) => info.getValue<string>(),
            header: () => <span>Last Name</span>,
            footer: (props) => props.column.id,
            enableColumnFilter: false,
            enableGrouping: false,
            enableResizing: true,
          },
        ],
      },
      {
        id: 'otherInfo',
        header: () => <div style={{textAlign: 'center'}}>Other info</div>,
        footer: (props) => props.column.id,
        enableGrouping: false,
        columns: [
          {
            accessorKey: 'age',
            header: () => 'Age',
            enableColumnFilter: true,
            enableGrouping: false,
            footer: (info) => info.column.id,
          },
          {
            accessorKey: 'visits',
            header: () => <span>Visits</span>,
            enableColumnFilter: false,
            enableGrouping: false,
            footer: (info) => info.column.id,
          },
          {
            accessorKey: 'status',
            header: 'Status',
            enableColumnFilter: false,
            enableGrouping: false,
            footer: (info) => info.column.id,
          },
          {
            accessorKey: 'progress',
            header: 'Profile Progress',
            cell: (info) => info.getValue<string>(),
            enableColumnFilter: false,
            enableGrouping: false,
            footer: (info) => info.column.id,
          },
        ],
      },
    ],
    [],
  )
  return (
    <Table
      data={data}
      columns={columns}
      options={options}
      onManualSorting={onSorting}
      onChangeRowSelection={onChangeRowSelection}
    >
      <Table.Toolbar
        css={{
          display: 'flex',
          flexDirection: 'row',
          justifyContent: 'space-between',
        }}
      >
        <SearchField placeholder='Search' />

        <div
          style={{
            display: 'flex',
            flexDirection: 'row',
            alignItems: 'center',
            gap: '0.5rem',
          }}
        >
          <Button variant='primary'>Button</Button>
          <Button variant='secondary'>Button</Button>
          <Button variant='ghost' aria-label='Delete'>
            <Icon icon={faTrashAlt} />
          </Button>
          <Button variant='ghost' aria-label='Dashboard'>
            <Icon icon={faDashboard} />
          </Button>
          <Button variant='ghost'>
            <Icon icon={faFileLines} aria-label='File' />
          </Button>
        </div>
      </Table.Toolbar>
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
            onChange={(page) => setPage(page)}
            total={10}
          />
        </div>
      </Table.Footer>
    </Table>
  )
}

const meta = {
  title: 'Example/Table',
  component: Basic,
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/react/writing-docs/autodocs
  tags: ['autodocs'],
  parameters: {
    // More on how to position stories at: https://storybook.js.org/docs/react/configure/story-layout
    layout: 'fullscreen',
  },
} satisfies Meta<typeof Basic>

export default meta

import {
  faDashboard,
  faFileLines,
  faTrashAlt,
} from '@fortawesome/free-solid-svg-icons'

import {
  Button,
  Icon,
  Pagination,
  ReactTable,
  ReactTableOptions,
  SearchField,
} from '@comfortdelgro/react-compass'
import {ColumnConfig, StateSorting} from '@comfortdelgro/react-compass/table-v2'
import React, {useState} from 'react'

export type Person = {
  firstName: string
  lastName: string
  age: number
  visits: number
  progress: number
  status: string
  createdAt: Date
  subRows?: Person[] | null
}

const range = (len: number) => {
  const arr = []
  for (let i = 0; i < len; i++) {
    arr.push(i)
  }
  return arr
}
const makeid = (length: number) => {
  let result = ''
  const characters =
    'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789'
  const charactersLength = characters.length
  for (let i = 0; i < length; i++) {
    result += characters.charAt(Math.floor(Math.random() * charactersLength))
  }
  return result
}
const getRandomDate = (startDate: Date, endDate: Date) => {
  const minValue = startDate.getTime()
  const maxValue = endDate.getTime()
  const timestamp = Math.floor(
    Math.random() * (maxValue - minValue + 1) + minValue,
  )
  return new Date(timestamp)
}

const newPerson = (): Person => {
  return {
    firstName: makeid(5),
    lastName: makeid(5),
    age: Math.floor(Math.random() * 40),
    visits: Math.floor(Math.random() * 1000),
    progress: Math.floor(Math.random() * 100),
    createdAt: getRandomDate(new Date(2020, 0, 1), new Date(2029, 11, 31)),
    status: ['relationship', 'complicated', 'single'][
      Math.floor(
        Math.random() * ['relationship', 'complicated', 'single'].length,
      )
    ]!,
  }
}

export function makeData(...lens: number[]) {
  const makeDataLevel = (depth = 0): Person[] => {
    const len = lens[depth]!
    return range(len).map((d): Person => {
      return {
        ...newPerson(),
        subRows: lens[depth + 1] ? makeDataLevel(depth + 1) : null,
      }
    })
  }

  return makeDataLevel()
}

export const ReactTableStory: React.FC = () => {
  const [page, setPage] = useState(1)
  const [data, setData] = React.useState(() => makeData(10))
  const options: ReactTableOptions<Person> = {
    enableSorting: true,
    enableMultiSort: true,
    columnResizeMode: 'onChange',
    manualSorting: true,
    enableRowSelection: (row: any) => row.original.age > 30,
  }
  const onSorting = (sortingField: StateSorting) => {}

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

  const columns = React.useMemo<Array<ColumnConfig<Person>>>(
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
              <ReactTable.CheckboxCell
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
            <ReactTable.CheckboxCell
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
            enableResizing: true,
            enableGrouping: false,
            sortDescriptor: 'asc',
            meta: {
              editable: true,
              updateData: (rowIndex: number, id: string, value: any) => {
                setData((old: Person[]) =>
                  old.map((row, index) => {
                    if (index === rowIndex) {
                      return {
                        ...old[rowIndex],
                        [id]: value,
                      } as Person
                    }
                    return row
                  }),
                )
              },
            },
          },
          {
            accessorFn: (row) => row.lastName,
            id: 'lastName',
            cell: (info) => info.getValue<string>(),
            header: () => <span>Last Name</span>,
            footer: (props) => props.column.id,
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
            footer: (info) => info.column.id,
          },
          {
            accessorKey: 'visits',
            header: () => <span>Visits</span>,
            footer: (info) => info.column.id,
          },
          {
            accessorKey: 'status',
            header: 'Status',
            footer: (info) => info.column.id,
          },
          {
            accessorKey: 'progress',
            header: 'Profile Progress',
            cell: (info) => info.getValue<string>(),
            footer: (info) => info.column.id,
          },
        ],
      },
    ],
    [],
  )

  return (
    <div>
      <ReactTable
        data={data}
        columns={columns}
        options={options}
        onManualSorting={onSorting}
      >
        <ReactTable.Toolbar
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
            <Button variant='ghost'>
              <Icon icon={faTrashAlt} />
            </Button>
            <Button variant='ghost'>
              <Icon icon={faDashboard} />
            </Button>
            <Button variant='ghost'>
              <Icon icon={faFileLines} />
            </Button>
          </div>
        </ReactTable.Toolbar>
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
              onChange={(page) => setPage(page)}
              total={10}
            />
          </div>
        </ReactTable.Footer>
      </ReactTable>
    </div>
  )
}

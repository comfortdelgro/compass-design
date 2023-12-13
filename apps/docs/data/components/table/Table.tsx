import {
  faDashboard,
  faFileLines,
  faTrashAlt,
} from '@fortawesome/free-solid-svg-icons'

import {
  Button,
  Icon,
  Pagination,
  SearchField,
  Table,
  TableCellContext,
  TableColumnDef,
  TableHeaderContext,
  TableOptions,
  TableSortingState,
} from '@comfortdelgro/react-compass'
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
export type LimitRequestStatus = {
  id: string
  accountName: string
  code: string
  requestLimit: number
  status: string
  progress?: Progress[] | null
}
export type Progress = {
  id: string
  remarks: string
  createdAt: Date
}

const range = (len: number) => {
  const arr = []
  for (let i = 0; i < len; i++) {
    arr.push(i)
  }
  return arr
}

const getRandomDate = (startDate: Date, endDate: Date) => {
  const minValue = startDate.getTime()
  const maxValue = endDate.getTime()
  const timestamp = Math.floor(
    Math.random() * (maxValue - minValue + 1) + minValue,
  )
  return new Date(timestamp)
}

function generateFullName(type: string) {
  const firstNames = [
    'James',
    'Mary',
    'John',
    'Patricia',
    'Robert',
    'Jennifer',
    'Michael',
    'Linda',
    'William',
    'Elizabeth',
    'David',
    'Susan',
    'Joseph',
    'Jessica',
    'Charles',
    'Sarah',
    'Thomas',
    'Karen',
    'Daniel',
    'Nancy',
    'Matthew',
    'Lisa',
    'Anthony',
    'Margaret',
    'Donald',
    'Betty',
    'Steven',
    'Sandra',
    'Paul',
    'Ashley',
  ]

  const lastNames = [
    'Smith',
    'Johnson',
    'Williams',
    'Jones',
    'Brown',
    'Davis',
    'Miller',
    'Wilson',
    'Moore',
    'Taylor',
    'Anderson',
    'Thomas',
    'Jackson',
    'White',
    'Harris',
    'Martin',
    'Thompson',
    'Garcia',
    'Martinez',
    'Robinson',
    'Clark',
    'Rodriguez',
    'Lewis',
    'Lee',
    'Walker',
    'Hall',
    'Allen',
    'Young',
    'King',
  ]
  if (type === 'firstName')
    return `${firstNames[Math.floor(Math.random() * firstNames.length)]}`

  return `${lastNames[Math.floor(Math.random() * lastNames.length)]}`
}

const newPerson = (): Person => {
  return {
    firstName: generateFullName('firstName'),
    lastName: generateFullName('lastName'),
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

const TableFullFeature: React.FC = () => {
  const [page, setPage] = useState(1)
  const [data, setData] = React.useState(() => makeData(10))
  const options: TableOptions<Person> = {
    enableSorting: true,
    enableMultiSort: true,
    columnResizeMode: 'onChange',
    manualSorting: true,
    enableRowSelection: (row: any) => row.original.age > 30,
  }
  const onSorting = (sortingField: TableSortingState) => {}

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

  const columns = React.useMemo<Array<TableColumnDef<Person>>>(
    () => [
      {
        id: 'select',
        header: ({table}) => <TableHeader table={table} />,
        cell: ({row}) => <TableHeaderCell row={row} />,
      },
      {
        id: 'name',
        header: () => <div style={{textAlign: 'center'}}>Name</div>,
        footer: (props: TableHeaderContext<Person, unknown>) => props.column.id,
        enableGrouping: false,
        columns: [
          {
            accessorKey: 'firstName',
            cell: (info: TableCellContext<Person, unknown>) =>
              info.getValue<string>(),
            header: () => <span>First Name</span>,
            footer: (props: TableHeaderContext<Person, unknown>) =>
              props.column.id,
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
            accessorFn: (row: Person) => row.lastName,
            id: 'lastName',
            cell: (info: TableCellContext<Person, unknown>) =>
              info.getValue<string>(),
            header: () => <span>Last Name</span>,
            footer: (props: TableHeaderContext<Person, unknown>) =>
              props.column.id,
            enableResizing: true,
          },
        ],
      },
      {
        id: 'otherInfo',
        header: () => <div style={{textAlign: 'center'}}>Other info</div>,
        footer: (props: TableHeaderContext<Person, unknown>) => props.column.id,
        enableGrouping: false,
        columns: [
          {
            accessorKey: 'age',
            header: () => 'Age',
            footer: (info: TableHeaderContext<Person, unknown>) =>
              info.column.id,
          },
          {
            accessorKey: 'visits',
            header: () => <span>Visits</span>,
            footer: (info: TableHeaderContext<Person, unknown>) =>
              info.column.id,
          },
          {
            accessorKey: 'status',
            header: 'Status',
            footer: (info: TableHeaderContext<Person, unknown>) =>
              info.column.id,
          },
          {
            accessorKey: 'progress',
            header: 'Profile Progress',
            cell: (info: TableCellContext<Person, unknown>) =>
              info.getValue<string>(),
            footer: (info: TableHeaderContext<Person, unknown>) =>
              info.column.id,
          },
        ],
      },
    ],
    [],
  )

  return (
    <div>
      <Table
        data={data}
        columns={columns}
        options={options}
        onManualSorting={onSorting}
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
            <Button
              variant='primary'
              className='c-hKssGC-hYGuEl-variant-primary'
            >
              Button
            </Button>
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
              onChange={(page: number) => setPage(page)}
              total={10}
            />
          </div>
        </Table.Footer>
      </Table>
    </div>
  )
}

export default TableFullFeature

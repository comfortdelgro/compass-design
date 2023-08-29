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
  SearchField,
  TableV2Options,
} from '@comfortdelgro/react-compass'
import {
  TableV2ColumnDef,
  TableV2SortingState,
} from '@comfortdelgro/react-compass/table-v2'

import React, {useState} from 'react'
import StatusComponent from './person-status'

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

export const DataGrid: React.FC = () => {
  const [page, setPage] = useState(1)
  const [data] = React.useState(() => makeData(10))
  const options: TableV2Options<Person> = {
    enableSorting: true,
    enableMultiSort: true,
    columnResizeMode: 'onChange',
    manualSorting: true,
  }
  const onSorting = (sortingField: TableV2SortingState) => {}

  const GridHeader = ({table}: any) => {
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

  const GridHeaderCell = ({row}: any) => {
    return (
      <div className='px-1'>
        <ReactTable.CheckboxCell
          {...{
            checked: row.getIsSelected(),
            indeterminate: row.getIsSomeSelected(),
            onChange: row.getToggleSelectedHandler(),
          }}
        />
      </div>
    )
  }

  const columns = React.useMemo<Array<TableV2ColumnDef<Person>>>(
    () => [
      {
        id: 'select',
        header: ({table}) => <GridHeader table={table} />,
        cell: ({row}) => <GridHeaderCell row={row} />,
      },
      {
        id: 'name',
        header: () => <div style={{textAlign: 'center'}}>Name</div>,
        footer: (props) => props.column.id,
        columns: [
          {
            accessorKey: 'firstName',
            cell: (info) => info.getValue<string>(),
            footer: (props) => props.column.id,
            enableResizing: false,
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
            cell: (info) => (
              <StatusComponent
                status={info.getValue<string>()}
              ></StatusComponent>
            ),
            footer: (info) => info.column.id,
          },
          {
            accessorKey: 'progress',
            header: 'Profile Progress',
            cell: (info) => (
              <ReactTable.ProgressPercentage
                progress={Number(info.getValue<string>())}
              ></ReactTable.ProgressPercentage>
            ),
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

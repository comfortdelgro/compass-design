import {faChevronDown, faChevronRight} from '@fortawesome/free-solid-svg-icons'

import {
  Divider,
  Dropdown,
  Icon,
  Pagination,
  Table,
} from '@comfortdelgro/react-compass'
import {
  TableCellContext,
  TableColumnDef,
  TableHeaderContext,
  TableOptions,
} from '@comfortdelgro/react-compass/table'
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

function generateAccountName() {
  const accountNames = [
    'Miss Reilly Lemke',
    'Elizabeth Friesen',
    'Dr. Doyle Boehm',
    'Domenica Zemlak DDS',
    'Samson Bogan',
    'Thora Hilll',
    'Shannon Mann',
    'Mrs. Barry Franecki',
    'Kendrick Balistreri',
    'Daphnee Durgan',
    'Stevie Herman',
    'Salvador Koelpin',
    'Milo Torphy',
    'Amelie Halvorson',
    'Cora Weissnat IV',
    'Rey Watsica',
    'Alexandria Murray',
    'Angeline Schowalter',
    'Britney Cole',
    'Marlene Bosco',
  ]

  return `${accountNames[Math.floor(Math.random() * accountNames.length)]}`
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
const newRequestStatus = (): LimitRequestStatus => {
  return {
    id: makeid(5),
    accountName: generateAccountName(),
    code: makeid(3),
    requestLimit: Math.floor(Math.random() * 1000),
    status: ['Submited', 'Processing', 'Approval'][
      Math.floor(Math.random() * ['Submited', 'Processing', 'Approval'].length)
    ],
    progress: [
      {
        id: makeid(5),
        remarks:
          'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam eleifend iaculis sodales. Pellentesque at metus felis. Nulla fermentum ipsum nec orci laoreet, at rhoncus eros dictum.',
        createdAt: getRandomDate(new Date(2020, 0, 1), new Date(2029, 11, 31)),
      },
      {
        id: makeid(5),
        remarks:
          'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam eleifend iaculis sodales. Pellentesque at metus felis. Nulla fermentum ipsum nec orci laoreet, at rhoncus eros dictum.',
        createdAt: getRandomDate(new Date(2020, 0, 1), new Date(2029, 11, 31)),
      },
      {
        id: makeid(5),
        remarks:
          'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam eleifend iaculis sodales. Pellentesque at metus felis. Nulla fermentum ipsum nec orci laoreet, at rhoncus eros dictum.',
        createdAt: getRandomDate(new Date(2020, 0, 1), new Date(2029, 11, 31)),
      },
    ],
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
function makeRequestStatusData(...lens: number[]) {
  const makeDataLevel = (depth = 0): LimitRequestStatus[] => {
    const len = lens[depth]!
    return range(len).map((d): LimitRequestStatus => {
      return {
        ...newRequestStatus(),
      }
    })
  }

  return makeDataLevel()
}

const ExpandableColumnTable: React.FC = () => {
  const [data, setData] = React.useState(() => makeRequestStatusData(10))
  const [page, setPage] = useState(1)
  const options: TableOptions<LimitRequestStatus> = {
    enableSorting: false,
    enableMultiSort: false,
    columnResizeMode: 'onChange',
    manualSorting: false,
  }

  const columns = React.useMemo<Array<TableColumnDef<LimitRequestStatus>>>(
    () => [
      {
        id: 'expander',
        size: 40,
        header: ({table}: TableHeaderContext<LimitRequestStatus, unknown>) => (
          <>
            <button
              {...{
                onClick: table.getToggleAllRowsExpandedHandler(),
              }}
            >
              {table.getIsAllRowsExpanded() ? (
                <Icon icon={faChevronDown} />
              ) : (
                <Icon icon={faChevronRight} />
              )}
            </button>{' '}
          </>
        ),
        cell: ({row}: TableCellContext<LimitRequestStatus, unknown>) => (
          <span
            onClick={() => row.toggleExpanded()}
            style={{
              cursor: 'pointer',
              userSelect: 'none',
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
            }}
          >
            {row.getIsExpanded() ? (
              <Icon icon={faChevronDown} />
            ) : (
              <Icon icon={faChevronRight} />
            )}
          </span>
        ),
      },
      {
        id: 'accountName',
        accessorKey: 'accountName',
        header: () => <div style={{textAlign: 'center'}}>Account Name</div>,
        footer: (props: TableHeaderContext<LimitRequestStatus, unknown>) =>
          props.column.id,
      },
      {
        id: 'code',
        accessorKey: 'code',
        header: () => <div style={{textAlign: 'center'}}>Code</div>,
        footer: (props: TableHeaderContext<LimitRequestStatus, unknown>) =>
          props.column.id,
      },
      {
        id: 'requestLimit',
        accessorKey: 'requestLimit',
        header: () => (
          <div style={{textAlign: 'center'}}>New Request Limit</div>
        ),
        footer: (props: TableHeaderContext<LimitRequestStatus, unknown>) =>
          props.column.id,
      },
      {
        id: 'status',
        accessorKey: 'status',
        header: () => <div style={{textAlign: 'center'}}>Status</div>,
        footer: (props: TableHeaderContext<LimitRequestStatus, unknown>) =>
          props.column.id,
      },
    ],
    [],
  )

  const renderRowSubComponent = (rowData: LimitRequestStatus) => {
    return (
      <div
        style={{
          padding: '1em',
          display: 'flex',
          flexDirection: 'column',
          rowGap: '1em',
        }}
      >
        <h3>Current Status: {rowData.status}</h3>
        <Divider />
        {rowData.progress?.map((processItem) => {
          return (
            <>
              <p style={{fontSize: '12px'}}>{processItem.remarks}</p>
              <p style={{fontSize: '11px', fontWeight: 200, color: '#878787'}}>
                {processItem.createdAt.toDateString()}
              </p>
              <Divider />
            </>
          )
        })}
      </div>
    )
  }

  return (
    <div>
      <Table
        data={data}
        columns={columns}
        options={options}
        renderRowSubComponent={renderRowSubComponent}
      >
        <Table.Footer
          css={{
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'space-between',
          }}
        >
          <div style={{display: 'flex', alignItems: 'center'}}>
            <span style={{width: 200}}>Rows per page: </span>
            <Dropdown.Select defaultSelectedKey='10'>
              <Dropdown.Item key='10'>10 rows</Dropdown.Item>
              <Dropdown.Item key='20'>20 rows</Dropdown.Item>
              <Dropdown.Item key='50'>50 rows</Dropdown.Item>
            </Dropdown.Select>
          </div>
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

export default ExpandableColumnTable

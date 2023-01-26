import {
  faDashboard,
  faFileLines,
  faTrashAlt,
} from '@fortawesome/free-solid-svg-icons'
import {ColumnDef} from '@tanstack/react-table'
import React, {useState} from 'react'
import Button from '../button/button'
import {Icon} from '../icon'
import Pagination from '../pagination/pagination'
import SearchField from '../searchfield/searchfield'
import {makeData, Person} from './makeData'
import ReactTable from './react-table'
import ReactTableCheckboxCell from './react-table-checkbox-cell'

export const ReactTableStory: React.FC = () => {
  const [page, setPage] = useState(1)
  const [data, setData] = React.useState(() => makeData(10))

  const refreshData = () => setData(() => makeData(10))
  const columns = React.useMemo<ColumnDef<Person>[]>(
    () => [
      {
        id: 'select',
        header: ({table}) => (
          <ReactTableCheckboxCell
            {...{
              checked: table.getIsAllRowsSelected(),
              indeterminate: table.getIsSomeRowsSelected(),
              onChange: table.getToggleAllRowsSelectedHandler(),
            }}
          />
        ),
        cell: ({row}) => (
          <div className='px-1'>
            <ReactTableCheckboxCell
              {...{
                checked: row.getIsSelected(),
                indeterminate: row.getIsSomeSelected(),
                onChange: row.getToggleSelectedHandler(),
              }}
            />
          </div>
        ),
      },
      {
        accessorKey: 'firstName',
        cell: (info) => <i>{info.getValue<string>()}</i>,
        footer: (info) => info.column.id,
      },
      {
        accessorFn: (row) => row.lastName,
        id: 'lastName',
        cell: (info) => <i>{info.getValue<string>()}</i>,
        header: () => <span>Last Name</span>,
        footer: (info) => info.column.id,
      },
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
    [],
  )
  return (
    <div>
      <ReactTable selectionMode='multiple' columns={columns} data={data}>
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

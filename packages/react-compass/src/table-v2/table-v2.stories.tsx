import {
  faDashboard,
  faFileLines,
  faTrashAlt,
} from '@fortawesome/free-solid-svg-icons'

import React, {useState} from 'react'
import ReactTable, {ColumnConfig, OptionType, StateSorting} from '.'
import Button from '../button'
import {Icon} from '../icon'
import Pagination from '../pagination'
import SearchField from '../searchfield'
import {makeData, Person} from './makeData'

export const ReactTableStory: React.FC = () => {
  const [page, setPage] = useState(1)
  const [data] = useState(() => makeData(10))
  const options: OptionType = {
    enableSorting: true,
    enableMultiSort: true,
    columnResizeMode: 'onChange',

    manualSorting: false,

  }

  const onSorting = (sortingField: StateSorting) => {
    console.log('stateSorting', sortingField)
  }

  const columns = React.useMemo<Array<ColumnConfig<Person>>>(
    () => [
      {
        id: 'select',
        header: ({table}) => {
          return (
            <ReactTable.CheckboxCell
              {...{
                checked: table.getIsAllRowsSelected(),
                indeterminate: table.getIsSomeRowsSelected(),
                onChange: table.getToggleAllRowsSelectedHandler(),
              }}
            />
          )
        },
        cell: ({row}) => (
          <div className='px-1'>
            <ReactTable.CheckboxCell
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
        className='yagin'
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

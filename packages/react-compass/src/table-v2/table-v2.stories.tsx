import {
  faCar,
  faCheck,
  faChevronDown,
  faChevronRight,
  faClose,
  faDashboard,
  faFileLines,
  faPencil,
  faTrashAlt,
} from '@fortawesome/free-solid-svg-icons'

import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {CellContext, HeaderContext} from '@tanstack/react-table'
import React, {Key, MouseEvent, TouchEvent, useState} from 'react'
import ReactTable, {OptionType, TableV2ColumnDef, TableV2SortingState} from '.'
import Button from '../button'
import Divider from '../divider'
import Dropdown from '../dropdown'
import Grid from '../grid'
import {Icon} from '../icon'
import Pagination from '../pagination'
import SearchField from '../searchfield'
import TextField from '../textfield'
import {Column, Row} from '../utils'
import {useEditableCellContext} from './'
import StatusComponent from './for story/person-status'
import {
  LimitRequestStatus,
  makeData,
  makeRequestStatusData,
  Person,
} from './makeData'
import ProgressPercentage from './table-v2-progress'

export const FullFeatured: React.FC = () => {
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
  const onSorting = (sortingField: TableV2SortingState) => {}
  // eslint-disable-next-line @typescript-eslint/no-empty-function
  const onChangeRowSelection = (rowSelection: any) => {}

  const columns = React.useMemo<Array<TableV2ColumnDef<Person>>>(
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
            enableResizing: false,
            enableGrouping: false,
            enableColumnFilter: true,
            sortDescriptor: 'asc',
            meta: {
              editable: true,
              updateData: (rowIndex: number, id: string, value: unknown) => {
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
            enableColumnFilter: false,
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
    <div>
      <ReactTable
        data={data}
        columns={columns}
        options={options}
        onManualSorting={onSorting}
        onChangeRowSelection={onChangeRowSelection}
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

export const EditableTemplateCell: React.FC = () => {
  const [page, setPage] = useState(1)
  const personData = makeData(10)
  const [data, setData] = useState<Person[]>(personData)
  const [originalData] = useState<Person[]>(personData)
  const options: OptionType<Person> = {
    enableSorting: true,
    enableMultiSort: true,
    columnResizeMode: 'onChange',
    manualSorting: false,
    initialSortBy: [
      {id: 'firstName', desc: true},
      {id: 'lastName', desc: false},
    ],
    enableRowSelection: (row) => row.original.age > 30,
  }

  // eslint-disable-next-line @typescript-eslint/no-empty-function
  const onSorting = (sortingField: TableV2SortingState) => {}
  // eslint-disable-next-line @typescript-eslint/no-empty-function
  const onChangeRowSelection = (rowSelection: any) => {}

  const columns = React.useMemo<Array<TableV2ColumnDef<Person>>>(
    () => [
      {
        id: 'edit',
        size: 120,
        cell: () => (
          <div
            style={{
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
            }}
          >
            <Icon icon={faPencil} />
          </div>
        ),
        meta: {
          editable: true,
          template: <PersonTemplateCell />,
          updateData: (rowIndex: number, id: string, value: any) => {
            setData((old: Person[]) =>
              old.map((row, index) => {
                if (index === rowIndex) {
                  return {
                    ...value,
                  } as Person
                }
                return row
              }),
            )
          },
          revertData: (rowIndex: number) => {
            // if (revert) {
            setData((old) =>
              old.map((row, index) =>
                index === rowIndex ? (originalData[rowIndex] as Person) : row,
              ),
            )
          },
        },
      },
      {
        accessorKey: 'firstName',
        cell: (info) => info.getValue<string>(),
        header: () => <span>First Name</span>,
        footer: (props) => props.column.id,
        meta: {},
      },
      {
        accessorKey: 'age',
        header: () => 'Age',
        footer: (info) => info.column.id,
      },
      {
        accessorKey: 'status',
        header: 'Status',
        footer: (info) => info.column.id,
      },
    ],
    [],
  )

  return (
    <>
      <ReactTable
        data={data}
        columns={columns}
        options={options}
        onManualSorting={onSorting}
        onChangeRowSelection={onChangeRowSelection}
        id='editableTable'
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
    </>
  )
}

const PersonTemplateCell = () => {
  const cellContext = useEditableCellContext()

  const [personData, setPersonData] = useState({
    firstName: cellContext.cell.row.getValue('firstName'),
    age: cellContext.cell.row.getValue('age'),
    status: cellContext.cell.row.getValue('status'),
  })

  const handleFirstNameChange = (value: string | number) => {
    setPersonData((old) => ({
      ...old,
      firstName: value,
    }))
  }

  const handleAgeChange = (value: string | number) => {
    setPersonData((old) => ({
      ...old,
      age: value,
    }))
  }
  const handleStatusChange = (value: Key) => {
    setPersonData((old) => ({
      ...old,
      status: value as string,
    }))
  }

  const handleConfirm = (
    e: MouseEvent<HTMLButtonElement> | TouchEvent<HTMLButtonElement>,
  ) => {
    e.stopPropagation()
    cellContext.finishTemplateEditing(personData)
  }
  const handleCancel = (
    e: MouseEvent<HTMLButtonElement> | TouchEvent<HTMLButtonElement>,
  ) => {
    e.stopPropagation()
    cellContext.cancelTemplateEditing()
  }

  return (
    <Grid
      css={{
        width: document.getElementById('editableTable')?.querySelector('tr')
          ?.clientWidth,
        backgroundColor: '$background',
        position: 'absolute',
        zIndex: 2,
      }}
      alignItems='center'
      justifyContent='spaceBetween'
    >
      <Grid.Item
        xs={2}
        sm={2}
        md={2}
        lg={2}
        xl={2}
        css={{display: 'flex', justifyContent: 'center', gap: 5}}
      >
        <Button onClick={handleConfirm} size='sm'>
          <Icon icon={faCheck} />
        </Button>
        <Button onClick={handleCancel} variant='danger' size='sm'>
          <Icon icon={faClose} />
        </Button>
      </Grid.Item>
      <Grid.Item xs={3} sm={3} md={3} lg={3} xl={3}>
        <TextField
          value={personData.firstName}
          onChange={handleFirstNameChange}
        />
      </Grid.Item>
      <Grid.Item xs={3} sm={3} md={3} lg={3} xl={3}>
        <TextField
          type='number'
          value={personData.age}
          onChange={handleAgeChange}
        />
      </Grid.Item>
      <Grid.Item xs={3} sm={3} md={3} lg={3} xl={3}>
        <Dropdown.Select
          selectedKey={personData.status}
          onSelectionChange={handleStatusChange}
        >
          <Dropdown.Item key={'relationship'}>In Relationship</Dropdown.Item>
          <Dropdown.Item key={'complicated'}>Complicated</Dropdown.Item>
          <Dropdown.Item key={'single'}>Single</Dropdown.Item>
        </Dropdown.Select>
      </Grid.Item>
    </Grid>
  )
}

export const ExpandableRow: React.FC = () => {
  const [data, setData] = React.useState(() => makeRequestStatusData(10))
  const [page, setPage] = useState(1)
  const options: OptionType<LimitRequestStatus> = {
    enableSorting: false,
    enableMultiSort: false,
    columnResizeMode: 'onChange',
    manualSorting: false,
  }

  const columns = React.useMemo<Array<TableV2ColumnDef<LimitRequestStatus>>>(
    () => [
      {
        id: 'expander',
        size: 40,
        header: ({table}: HeaderContext<LimitRequestStatus, unknown>) => (
          <span
            onClick={table.getToggleAllRowsExpandedHandler()}
            style={{
              cursor: 'pointer',
              userSelect: 'none',
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
            }}
          >
            {table.getIsAllRowsExpanded() ? (
              <Icon icon={faChevronDown} />
            ) : (
              <Icon icon={faChevronRight} />
            )}
          </span>
        ),
        cell: ({row}: CellContext<LimitRequestStatus, unknown>) => (
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
        footer: (props: HeaderContext<LimitRequestStatus, unknown>) =>
          props.column.id,
      },
      {
        id: 'code',
        accessorKey: 'code',

        header: () => <div style={{textAlign: 'center'}}>Code</div>,
        footer: (props: HeaderContext<LimitRequestStatus, unknown>) =>
          props.column.id,
      },
      {
        id: 'requestLimit',
        accessorKey: 'requestLimit',

        header: () => (
          <div style={{textAlign: 'center'}}>New Request Limit</div>
        ),
        footer: (props: HeaderContext<LimitRequestStatus, unknown>) =>
          props.column.id,
      },
      {
        id: 'status',
        size: 280,

        accessorKey: 'status',
        header: () => <div style={{textAlign: 'center'}}>Status</div>,
        footer: (props: HeaderContext<LimitRequestStatus, unknown>) =>
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
      <ReactTable
        data={data}
        columns={columns}
        options={options}
        renderRowSubComponent={renderRowSubComponent}
        css={{
          width: '65rem',
          table: {
            width: 'unset',
          },
        }}
      >
        <ReactTable.Footer
          css={{
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'space-between',
          }}
        >
          <div style={{display: 'flex', alignItems: 'center'}}>
            <span style={{width: 250}}>Rows per page: </span>
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
        </ReactTable.Footer>
      </ReactTable>
    </div>
  )
}

export const EmptyState: React.FC = () => {
  const [page, setPage] = useState(1)
  const [data] = useState<Person[]>(() => [])
  const options: OptionType<Person> = {
    enableSorting: true,
    enableMultiSort: true,
    columnResizeMode: 'onChange',
    manualSorting: false,
    initialSortBy: [
      {id: 'firstName', desc: true},
      {id: 'lastName', desc: false},
    ],
  }

  const columns = React.useMemo<Array<TableV2ColumnDef<Person>>>(
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
                {...{
                  checked: table.getIsAllRowsSelected(),
                  indeterminate: table.getIsSomeRowsSelected(),
                  onChange: table.getToggleAllRowsSelectedHandler(),
                }}
              />
            </div>
          )
        },
        enableGrouping: false,
        cell: ({row}) => (
          <div
            style={{
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
            }}
          >
            <ReactTable.CheckboxCell
              {...{
                disabled: !row.getCanSelect(),
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
        enableGrouping: false,
        columns: [
          {
            accessorKey: 'firstName',
            cell: (info) => info.getValue<string>(),
            footer: (props) => props.column.id,
            enableResizing: false,
            editable: true,
            sortDescriptor: 'asc',
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
              <ProgressPercentage
                progress={Number(info.getValue<string>())}
              ></ProgressPercentage>
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
      <ReactTable data={data} columns={columns} options={options}>
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

export const Loading: React.FC = () => {
  const [page, setPage] = useState(1)
  const [data] = useState<Person[]>(() => [])
  const options: OptionType<Person> = {
    enableSorting: true,
    enableMultiSort: true,
    columnResizeMode: 'onChange',
    manualSorting: false,
    initialSortBy: [
      {id: 'firstName', desc: true},
      {id: 'lastName', desc: false},
    ],
  }

  const columns = React.useMemo<Array<TableV2ColumnDef<Person>>>(
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
                {...{
                  checked: table.getIsAllRowsSelected(),
                  indeterminate: table.getIsSomeRowsSelected(),
                  onChange: table.getToggleAllRowsSelectedHandler(),
                }}
              />
            </div>
          )
        },
        enableGrouping: false,
        cell: ({row}) => (
          <div
            style={{
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
            }}
          >
            <ReactTable.CheckboxCell
              {...{
                disabled: !row.getCanSelect(),
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
        enableGrouping: false,
        columns: [
          {
            accessorKey: 'firstName',
            cell: (info) => info.getValue<string>(),
            footer: (props) => props.column.id,
            enableResizing: false,
            editable: true,
            sortDescriptor: 'asc',
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
              <ProgressPercentage
                progress={Number(info.getValue<string>())}
              ></ProgressPercentage>
            ),
            footer: (info) => info.column.id,
          },
        ],
      },
    ],
    [],
  )

  return (
    <>
      <Column>
        <h3>1. Default loading indicator</h3>
        <ReactTable data={data} columns={columns} options={options} isLoading>
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
      </Column>
      <br />
      <Column>
        <h3>2. Customized loading indicator</h3>
        <ReactTable
          data={data}
          columns={columns}
          options={options}
          isLoading
          loadingIndicator={
            <FontAwesomeIcon icon={faCar} size='4x' color='gray' />
          }
        >
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
      </Column>
    </>
  )
}
export const DataGrid: React.FC = () => {
  const [page, setPage] = useState(1)
  const [data] = useState<Person[]>(() => makeData(10))
  const options: OptionType<Person> = {
    enableSorting: true,
    enableMultiSort: true,
    columnResizeMode: 'onChange',
    manualSorting: false,
    initialSortBy: [
      {id: 'firstName', desc: true},
      {id: 'lastName', desc: false},
    ],
  }

  const onSorting = (sortingField: TableV2SortingState) => {
    console.log('stateSorting', sortingField)
  }
  const onChangeRowSelection = (rowSelection: Person[]) => {
    console.log('stateSelectedRows', rowSelection)
  }

  const columns = React.useMemo<Array<TableV2ColumnDef<Person>>>(
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
                {...{
                  checked: table.getIsAllRowsSelected(),
                  indeterminate: table.getIsSomeRowsSelected(),
                  onChange: table.getToggleAllRowsSelectedHandler(),
                }}
              />
            </div>
          )
        },
        enableGrouping: false,
        cell: ({row}) => (
          <div
            style={{
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
            }}
          >
            <ReactTable.CheckboxCell
              {...{
                disabled: !row.getCanSelect(),
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
        enableGrouping: false,
        columns: [
          {
            accessorKey: 'firstName',
            cell: (info) => info.getValue<string>(),
            footer: (props) => props.column.id,
            enableResizing: false,
            editable: true,
            sortDescriptor: 'asc',
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
              <ProgressPercentage
                progress={Number(info.getValue<string>())}
              ></ProgressPercentage>
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
        onChangeRowSelection={onChangeRowSelection}
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

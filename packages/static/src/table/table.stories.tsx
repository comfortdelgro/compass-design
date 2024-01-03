import {
  faCheck,
  faChevronDown,
  faChevronRight,
  faClose,
  faDashboard,
  faFileLines,
  faPencil,
  faTrashAlt,
} from '@fortawesome/free-solid-svg-icons'
import { Meta } from '@storybook/react'
import React, { Key, MouseEvent, TouchEvent, useState } from 'react'
import Table, {
  TableCellContext,
  TableColumnDef,
  TableHeaderContext,
  TableSortingState,
  useEditableCellContext,
  TableColumnFiltersState,
} from '.'
import {
  Button,
  Dropdown,
  Grid,
  Icon,
  Pagination,
  SearchField,
  Spinner,
  TextField,
} from '..'
import StatusComponent from './for story/person-status'
import {
  LimitRequestStatus,
  Person,
  makeData,
  makeRequestStatusData,
} from './makeData'
import { OptionType } from './table'
import ProgressPercentage from './table-progress'
export const Basic: React.FC = () => {
  const [page, setPage] = useState(1)
  const [data, setData] = useState<Person[]>(() => makeData(10))
  const options: OptionType<Person> = {
    enableSorting: true,
    enableMultiSort: true,
    columnResizeMode: 'onChange',
    manualSorting: false,
    manualFiltering: true,
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
  const onFiltering = (filtering: TableColumnFiltersState) => {
    console.log(filtering)
  }

  const columns = React.useMemo<Array<TableColumnDef<Person>>>(
    () => [
      {
        id: 'select',
        header: ({ table }) => {
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
        cell: ({ row }) => (
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
        header: () => <div style={{ textAlign: 'center' }}>Name</div>,
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
        header: () => <div style={{ textAlign: 'center' }}>Other info</div>,
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
      onManualFilter={onFiltering}
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

export const ExpandableRow: React.FC = () => {
  const [data, setData] = React.useState(() => makeRequestStatusData(10))
  const [page, setPage] = useState(1)
  const options: OptionType<LimitRequestStatus> = {
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
        header: ({ table }: TableHeaderContext<LimitRequestStatus, unknown>) => (
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
        cell: ({ row }: TableCellContext<LimitRequestStatus, unknown>) => (
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
        header: () => <div style={{ textAlign: 'center' }}>Account Name</div>,
        footer: (props: TableHeaderContext<LimitRequestStatus, unknown>) =>
          props.column.id,
      },
      {
        id: 'code',
        accessorKey: 'code',

        header: () => <div style={{ textAlign: 'center' }}>Code</div>,
        footer: (props: TableHeaderContext<LimitRequestStatus, unknown>) =>
          props.column.id,
      },
      {
        id: 'requestLimit',
        accessorKey: 'requestLimit',

        header: () => (
          <div style={{ textAlign: 'center' }}>New Request Limit</div>
        ),
        footer: (props: TableHeaderContext<LimitRequestStatus, unknown>) =>
          props.column.id,
      },
      {
        id: 'status',
        size: 280,

        accessorKey: 'status',
        header: () => <div style={{ textAlign: 'center' }}>Status</div>,
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
        {/* <Divider /> */}
        <hr />
        {rowData.progress?.map((processItem) => {
          return (
            <>
              <p style={{ fontSize: '12px' }}>{processItem.remarks}</p>
              <p style={{ fontSize: '11px', fontWeight: 200, color: '#878787' }}>
                {processItem.createdAt.toDateString()}
              </p>
              {/* <Divider /> */}
              <hr />
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
        css={{
          width: '65rem',
          table: {
            width: 'unset',
          },
        }}
      >
        <Table.Footer
          css={{
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'space-between',
          }}
        >
          <div style={{ display: 'flex', alignItems: 'center' }}>
            <span style={{ width: 250 }}>Rows per page: </span>
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

export const EmptyState: React.FC = () => {
  const [page, setPage] = useState(1)
  const [data] = useState<Person[]>(() => [])
  const options: OptionType<Person> = {
    enableSorting: true,
    enableMultiSort: true,
    columnResizeMode: 'onChange',
    manualSorting: false,
    initialSortBy: [
      { id: 'firstName', desc: true },
      { id: 'lastName', desc: false },
    ],
  }

  const columns = React.useMemo<Array<TableColumnDef<Person>>>(
    () => [
      {
        id: 'select',
        header: ({ table }) => {
          return (
            <div
              style={{
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
              }}
            >
              <Table.CheckboxCell
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
        cell: ({ row }) => (
          <div
            style={{
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
            }}
          >
            <Table.CheckboxCell
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
        header: () => <div style={{ textAlign: 'center' }}>Name</div>,
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
        header: () => <div style={{ textAlign: 'center' }}>Other info</div>,
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
      <Table data={data} columns={columns} options={options}>
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
              onChange={(page) => setPage(page)}
              total={10}
            />
          </div>
        </Table.Footer>
      </Table>
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
      { id: 'firstName', desc: true },
      { id: 'lastName', desc: false },
    ],
  }

  const columns = React.useMemo<Array<TableColumnDef<Person>>>(
    () => [
      {
        id: 'select',
        header: ({ table }) => {
          return (
            <div
              style={{
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
              }}
            >
              <Table.CheckboxCell
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
        cell: ({ row }) => (
          <div
            style={{
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
            }}
          >
            <Table.CheckboxCell
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
        header: () => <div style={{ textAlign: 'center' }}>Name</div>,
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
        header: () => <div style={{ textAlign: 'center' }}>Other info</div>,
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
      <h3>1. Default loading indicator</h3>
      <Table data={data} columns={columns} options={options} isLoading>
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
      <br />
      <h3>2. Customized loading indicator</h3>
      <Table
        data={data}
        columns={columns}
        options={options}
        isLoading
        loadingIndicator={<Spinner />}
      >
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
    </>
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
    enableRowSelection: (row) => row.original.age > 30,
  }

  // eslint-disable-next-line @typescript-eslint/no-empty-function
  const onSorting = (sortingField: TableSortingState) => { }
  // eslint-disable-next-line @typescript-eslint/no-empty-function
  const onChangeRowSelection = (rowSelection: any) => { }

  const columns = React.useMemo<Array<TableColumnDef<Person>>>(
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
          updateData: (rowIndex: number, id: string, value: object) => {
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
      <Table
        data={data}
        columns={columns}
        options={options}
        onManualSorting={onSorting}
        onChangeRowSelection={onChangeRowSelection}
        id='editableTable'
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
              onChange={(page) => setPage(page)}
              total={10}
            />
          </div>
        </Table.Footer>
      </Table>
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
        css={{ display: 'flex', justifyContent: 'center', gap: 5 }}
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
          value={personData.firstName as string}
          onChange={handleFirstNameChange}
        />
      </Grid.Item>
      <Grid.Item xs={3} sm={3} md={3} lg={3} xl={3}>
        <TextField
          type='number'
          value={personData.age as number}
          onChange={handleAgeChange}
        />
      </Grid.Item>
      <Grid.Item xs={3} sm={3} md={3} lg={3} xl={3}>
        <Dropdown.Select
          selectedKey={personData.status as string}
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

export const DataGrid: React.FC = () => {
  const [page, setPage] = useState(1)
  const [data] = useState<Person[]>(() => makeData(10))
  const options: OptionType<Person> = {
    enableSorting: true,
    enableMultiSort: true,
    columnResizeMode: 'onChange',
    manualSorting: false,
    initialSortBy: [
      { id: 'firstName', desc: true },
      { id: 'lastName', desc: false },
    ],
  }

  const onSorting = (sortingField: TableSortingState) => {
    console.log('stateSorting', sortingField)
  }
  const onChangeRowSelection = (rowSelection: Person[]) => {
    console.log('stateSelectedRows', rowSelection)
  }

  const columns = React.useMemo<Array<TableColumnDef<Person>>>(
    () => [
      {
        id: 'select',
        header: ({ table }) => {
          return (
            <div
              style={{
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
              }}
            >
              <Table.CheckboxCell
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
        cell: ({ row }) => (
          <div
            style={{
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
            }}
          >
            <Table.CheckboxCell
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
        header: () => <div style={{ textAlign: 'center' }}>Name</div>,
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
        header: () => <div style={{ textAlign: 'center' }}>Other info</div>,
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
        <Table.Footer>
          <Pagination
            rowsOptions={[5, 10, 15, 20]}
            rowsPerPage={5}
            onRowsPerPageChange={(rows) => {
              console.log(rows)
            }}
            page={page}
            total={10}
            onChange={(page) => setPage(page)}
            count={100}
          ></Pagination>
        </Table.Footer>
      </Table>
    </div>
  )
}

const meta = {
  title: 'Example/Table ',
  component: Basic,
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/react/writing-docs/autodocs
  tags: ['autodocs'],
  parameters: {
    // More on how to position stories at: https://storybook.js.org/docs/react/configure/story-layout
    layout: 'fullscreen',
  },
} satisfies Meta<typeof Basic>

export default meta
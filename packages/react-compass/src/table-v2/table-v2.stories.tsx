import {
  faCheck,
  faClose,
  faDashboard,
  faFileLines,
  faPencil,
  faTrashAlt,
} from '@fortawesome/free-solid-svg-icons'

import React, {Key, MouseEvent, TouchEvent, useState} from 'react'
import ReactTable, {ColumnConfig, OptionType, StateSorting} from '.'
import Button from '../button'
import {useEditableCellContext} from '../data-grid'
import Dropdown from '../dropdown'
import Grid from '../grid'
import {Icon} from '../icon'
import Pagination from '../pagination'
import SearchField from '../searchfield'
import TextField from '../textfield'
import {makeData, Person} from './makeData'

export const FullFeatured: React.FC = () => {
  const [page, setPage] = useState(1)
  const [data, setData] = useState<Person[]>(() => makeData(10))
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
  const onSorting = (sortingField: StateSorting) => {}
  // eslint-disable-next-line @typescript-eslint/no-empty-function
  const onChangeRowSelection = (rowSelection: any) => {}

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
            enableResizing: false,
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
  const onSorting = (sortingField: StateSorting) => {}
  // eslint-disable-next-line @typescript-eslint/no-empty-function
  const onChangeRowSelection = (rowSelection: any) => {}

  const columns = React.useMemo<Array<ColumnConfig<Person>>>(
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

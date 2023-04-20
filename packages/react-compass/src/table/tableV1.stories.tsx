/* eslint-disable @typescript-eslint/no-unnecessary-type-assertion */
/* eslint-disable @typescript-eslint/unbound-method */

import {faFile, faFileAlt} from '@fortawesome/free-regular-svg-icons'
import {
  faBlackboard,
  faDashboard,
  faFileLines,
  faTrashAlt,
} from '@fortawesome/free-solid-svg-icons'
import React, {useState} from 'react'
import Badge from '../badge/badge'
import Button from '../button/button'
import {Icon} from '../icon'
import Pagination from '../pagination/pagination'
import Popover from '../popover'
import SearchField from '../searchfield/searchfield'
import {theme} from '../theme'
import {useAsyncList} from '../utils'
import {useDOMRef} from '../utils/use-dom-ref'
import Table from './table'

export const FullFeatured: React.FC = () => {
  const columns = [
    {name: 'File Type', id: 'fileType'},
    {name: 'Name', id: 'name'},
    {name: 'Created At', id: 'created'},
    {name: 'Modified At', id: 'modified'},
    {name: 'Modified By', id: 'modifiedBy'},
    {name: 'Status', id: 'status'},
    {name: 'File Size', id: 'fileSize'},
    {name: 'Actions', id: 'actions'},
  ]

  const data = [
    {
      id: 1,
      fileType: 'docs',
      name: 'Business Report FY19',
      description: 'for year 2019',
      created: '2020-01-01',
      modified: '2020-01-01',
      modifiedBy: 'Mona Kane',
      status: 'pending',
      fileSize: '1.29 MB',
    },
    {
      id: 2,
      fileType: 'presentation',
      name: 'Presentation FY18',
      description: 'for year 2018',
      created: '2019-01-01',
      modified: '2019-01-01',
      modifiedBy: 'Dana White',
      status: 'pending',
      fileSize: '1.29 MB',
    },
    {
      id: 3,
      fileType: 'docs',
      name: 'Business Report FY22',
      description: 'for year 2022',
      created: '2022-01-01',
      modified: '2022-01-01',
      modifiedBy: 'Daniel Craig',
      status: 'pending',
      fileSize: '1.29 MB',
    },
  ]

  const SamplePopover = () => {
    return (
      <div
        className='popover-content'
        style={{
          padding: '10px',
          background: '#ffffff',
          boxShadow: '0 2px 5px rgba(0,0,0,0.2)',
          borderRadius: '5px',
          width: '300px',
          height: '200px',
        }}
      >
        My popover
      </div>
    )
  }

  const [page, setPage] = useState(1)
  const [isOpen1, setIsOpen1] = useState(false)
  const openPopover1 = () => {
    setIsOpen1(true)
  }
  const ref = useDOMRef<HTMLDivElement>(null)

  const renderCell = (item: (typeof data)[number], key: React.Key) => {
    const text = item[key as keyof typeof item]

    switch (key) {
      case 'name':
        return (
          <div>
            <div style={{fontWeight: 600}}>{text}</div>
            <div
              style={{
                fontSize: '90%',
                color: theme.colors.disabledText.value,
              }}
            >
              {item.description}
            </div>
          </div>
        )
      case 'modifiedBy':
      case 'fileSize':
        return <>{text}</>
      case 'created':
      case 'modified':
        return <>{new Date(text).toLocaleDateString()}</>
      case 'status':
        return <Badge variant='secondary' label={`${text}`} />
      case 'actions':
        return (
          <div
            ref={ref}
            className='popover-sample'
            style={{
              display: 'flex',
              flexDirection: 'row',
              alignItems: 'center',
              gap: '0.5rem',
            }}
          >
            <button onClick={() => console.log('Normal button clicked')}>
              Button
            </button>
            <Popover
              isOpen={isOpen1}
              anchor={
                <button
                  style={{
                    appearance: 'none',
                    border: 'none',
                    backgroundColor: 'transparent',
                    margin: '0px',
                    padding: '0px',
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                    cursor: 'pointer',
                  }}
                  onClick={(e) => {
                    e.stopPropagation()
                    openPopover1()
                  }}
                >
                  Popover
                </button>
              }
              attachToElement={ref.current && ref.current.parentElement}
              onClose={() => {
                setIsOpen1(false)
              }}
            >
              <SamplePopover />
            </Popover>
          </div>
        )
      case 'fileType':
        if (text === 'docs') {
          return (
            <Icon
              icon={faFileAlt}
              style={{color: theme.colors.cdgBlue.value}}
            />
          )
        } else if (text === 'presentation') {
          return (
            <Icon
              icon={faBlackboard}
              style={{color: theme.colors.danger.value}}
            />
          )
        }

        return <Icon icon={faFile} />
      default:
        return null
    }
  }

  const list = useAsyncList({
    load: () => ({items: data}),
    sort: ({items, sortDescriptor: sortd}) => {
      return {
        items: items.sort((a, b) => {
          const first = (a as Record<string, string | number>)[sortd.column!]!
          const second = (b as Record<string, string | number>)[sortd.column!]!

          let cmp =
            (parseInt(first as string) || first) <
            (parseInt(second as string) || second)
              ? -1
              : 1

          if (sortd.direction === 'descending') cmp *= -1

          return cmp
        }),
      }
    },
  })

  return (
    <div>
      <Table
        selectionMode='multiple'
        onSortChange={list.sort}
        sortDescriptor={list.sortDescriptor!}
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
        <Table.Header columns={columns}>
          {(column) => {
            if (column.id === 'fileType')
              return (
                <Table.Column key={column.id}>
                  <Icon icon={faFile} />
                </Table.Column>
              )

            return (
              <Table.Column
                key={column.id}
                allowsSorting={column.id === 'name'}
              >
                {column.name}
              </Table.Column>
            )
          }}
        </Table.Header>
        <Table.Body items={list.items}>
          {(item) => (
            <Table.Row>
              {(columnKey) => (
                <Table.Cell>{renderCell(item, columnKey)}</Table.Cell>
              )}
            </Table.Row>
          )}
        </Table.Body>
      </Table>
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
    </div>
  )
}

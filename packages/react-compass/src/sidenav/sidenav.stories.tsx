'use client'

import {
  faAmbulance,
  faBank,
  faCar,
  faChevronDown,
  faHelicopter,
  faPlane,
  faTractor,
  IconDefinition,
} from '@fortawesome/free-solid-svg-icons'
import {Meta} from '@storybook/react'
import React, {useState} from 'react'
import Avatar from '../avatar'
import Icon from '../icon'
import Sidenav from './index'
import SidenavMenu from './sidenav-menu'

const style: {
  display: string
  flexDirection: 'column' | 'row'
  alignItems: string
  justifyContent: string
  height: string
  width: string
  padding: string
} = {
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'flex-start',
  justifyContent: 'center',
  height: '100%',
  width: '100%',
  padding: '3rem',
}

const styleServiceMenuWrapper = {
  display: 'flex',
  alignItems: 'center',
  gap: '12px',
  width: '100%',
}

const styleContent = {
  padding: '10px 5px',
  background: '#E1DFDD',
  borderRadius: 4,
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
}

const styleTitleWrapper = {
  margin: 0,
  color: '#333333',
  borderRight: '0.5px solid #333333',
  fontSize: 12,
  fontFamily: 'Poppins',
  paddingRight: 3,
}

const styleDetailWrapper = {
  display: 'flex',
  'flex-direction': 'column',
  fontFamily: 'Poppins',
  justifyContent: 'center',
  marginLeft: 8,
}

const styleDetailTitleWrapper = {
  fontSize: 14,
  lineHeight: '21px',
  color: '#323130',
  margin: 0,
}

const styleDetailTimeWrapper = {
  fontSize: 12,
  lineHeight: '18px',
  'white-space': 'nowrap',
  overflow: 'hidden',
  textOverflow: 'ellipsis',
  color: '#A19F9D',
}

interface ItemBase {
  id: number
  icon: IconDefinition
  title: string
}

interface ItemType extends ItemBase {
  children?: ItemType[]
}

export const Default: React.FC = () => {
  const [currentPage, setCurrentPage] = useState(1)

  const items: ItemType[] = [
    {
      id: 1,
      icon: faCar,
      title: 'Placeholder',
      children: [
        {
          id: 11,
          title:
            'Placeholder item with a really long name that makes this menu item width over screen to test the layout',
          icon: faCar,
        },
        {id: 12, title: 'Placeholder', icon: faCar},
        {
          id: 13,
          title: 'Placeholder',
          icon: faCar,
          children: [
            {id: 11, title: 'Placeholder', icon: faCar},
            {
              id: 12,
              title: 'Placeholder',
              icon: faCar,
              children: [
                {id: 11, title: 'Placeholder', icon: faCar},
                {id: 12, title: 'Placeholder', icon: faCar},
                {
                  id: 13,
                  title: 'Placeholder',
                  icon: faCar,
                  children: [
                    {id: 11, title: 'Placeholder', icon: faCar},
                    {id: 12, title: 'Placeholder', icon: faCar},
                    {id: 13, title: 'Placeholder', icon: faCar},
                  ],
                },
              ],
            },
            {id: 13, title: 'Placeholder', icon: faCar},
          ],
        },
      ],
    },
    {id: 2, icon: faAmbulance, title: 'Placeholder'},
    {id: 3, icon: faPlane, title: 'Placeholder'},
    {id: 4, icon: faHelicopter, title: 'Placeholder'},
    {id: 5, icon: faTractor, title: 'Placeholder'},
  ]

  const handleOnClick = (
    e: React.MouseEvent<HTMLAnchorElement, MouseEvent>,
    id: number,
  ) => {
    e.preventDefault()
    setCurrentPage(id)
  }

  const CustomSizenavItem = (props: ItemType & {isMenu?: boolean}) => {
    const {id, icon, title, children, isMenu} = props
    return (
      <Sidenav.Item isActive={isMenu ? false : currentPage === id}>
        {icon ? <Icon icon={icon}></Icon> : <></>}
        {title ? (
          <span>
            {title} {children ? '→' : ''}
          </span>
        ) : (
          <></>
        )}
        {children ? (
          <SidenavMenu shouldFlip>
            {children.map((child) => {
              return (
                <CustomSizenavItem key={child.id} isMenu={true} {...child} />
              )
            })}
          </SidenavMenu>
        ) : (
          <></>
        )}
      </Sidenav.Item>
    )
  }

  return (
    <div
      style={{
        flexDirection: 'row',
        position: 'relative',
        justifyContent: 'flex-start',
        ...style,
      }}
    >
      <Sidenav
        css={{
          height: '800px',
          position: 'absolute',
          top: '0px',
          zIndex: '2',
          padding: '16px 0',
        }}
        expand={false}
        delay={200}
      >
        <Sidenav.Item css={{'&.cdg-sidenav-item': {marginBottom: '36px'}}}>
          <div style={{width: '40px'}}>
            <Avatar label='M' />
          </div>
          <h2 style={{fontSize: '24px', marginLeft: '22px', color: '#323130'}}>
            Workbench
          </h2>
        </Sidenav.Item>
        <Sidenav.Item css={{'&.cdg-sidenav-item': {marginBottom: '36px'}}}>
          <div style={styleServiceMenuWrapper}>
            <div style={styleContent}>
              <p style={styleTitleWrapper}>ZB</p>
              <Icon
                icon={faChevronDown}
                style={{width: 11, height: 7, color: '#333333', marginLeft: 0}}
              />
            </div>
            <div style={styleDetailWrapper}>
              <b style={styleDetailTitleWrapper}>Zig Biz</b>
              <span style={styleDetailTimeWrapper}>Fri 18 Nov 2:25 PM</span>
            </div>
          </div>
        </Sidenav.Item>
        <Sidenav.Divider style={{marginBottom: '8px'}} />
        {items.map((item) => {
          return (
            <a
              onClick={(e) => {
                handleOnClick(e, item.id)
              }}
              key={item.id}
              href='#'
              style={{
                color: 'inherit',
                textDecoration: 'none',
                outlineColor: '#678ECF',
              }}
            >
              <CustomSizenavItem key={item.id} {...item} />
            </a>
          )
        })}
        <Sidenav.Divider style={{margin: '8px 0'}} />
        <Sidenav.Item css={{marginTop: 'auto'}}>
          <Icon icon={faBank}></Icon>
          <span>Placeholder</span>
        </Sidenav.Item>
      </Sidenav>
    </div>
  )
}

const meta = {
  title: 'Example/Sidenav',
  component: Default,
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/react/writing-docs/autodocs
  tags: ['autodocs'],
  parameters: {
    // More on how to position stories at: https://storybook.js.org/docs/react/configure/story-layout
    layout: 'fullscreen',
  },
} satisfies Meta<typeof Default>

export default meta

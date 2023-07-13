import {Box, Modal, styled, TextField} from '@comfortdelgro/react-compass'
import {DocSearchModal, useDocSearchKeyboardEvents} from '@docsearch/react'
import {default as Link, default as NextLink} from 'next/link'
import {useRouter} from 'next/router'
import * as React from 'react'
import * as ReactDOM from 'react-dom'
import * as ReactDOMServer from 'react-dom/server'
import useLazyCSS from 'utils/useLazyCSS'

const Shortcut = styled('div', {
  fontSize: 12,
  fontWeight: 700,
  lineHeight: '20px',
  border: `1px solid $gray40`,
  backgroundColor: '#FFF',
  padding: '3px $2',
  borderRadius: 4,
})

function NewStartScreen() {
  const startScreenOptions = [
    {
      category: {
        name: 'Getting started',
      },
      items: [
        {
          name: 'Installation',
          href: '/',
        },
        {name: 'Usage', href: '/'},
      ],
    },
    {
      category: {
        name: 'Components',
      },
      items: [
        {name: 'Theming', href: '/'},
        {name: 'Z-Index', href: '/'},
      ],
    },
    {
      category: {
        name: 'Customization',
      },
      items: [
        {
          name: 'How to customize',
          href: '/ƒ',
        },
        {name: 'Theming', href: '/'},
        {
          name: 'Default theme',
          href: '/',
        },
      ],
    },
  ]
  return (
    <div className='DocSearch-NewStartScreen'>
      {startScreenOptions.map(({category, items}) => (
        <div key={category.name} className='DocSearch-NewStartScreenCategory'>
          <div className='DocSearch-NewStartScreenTitle'>{category.name}</div>
          {items.map(({name, href}) => (
            <NextLink
              key={name}
              href={href}
              className='DocSearch-NewStartScreenItem'
            >
              {name}
            </NextLink>
          ))}
        </div>
      ))}
    </div>
  )
}

function DocSearchHit(props: any) {
  const {children, hit} = props

  if (hit.pathname) {
    return (
      <Link href={hit.pathname} as={hit.as}>
        {children}
      </Link>
    )
  }

  return <Link href={hit.url}>{children}</Link>
}

export default function AppSearch(props: any) {
  useLazyCSS(
    'https://cdn.jsdelivr.net/npm/@docsearch/css@3.0.0-alpha.40/dist/style.min.css',
    '#app-search',
  )
  const searchButtonRef = React.useRef(null)
  const [isOpen, setIsOpen] = React.useState(false)
  const [initialQuery, setInitialQuery] = React.useState(undefined)
  const macOS = window.navigator.platform.toUpperCase().indexOf('MAC') >= 0
  const onOpen = React.useCallback(() => {
    setIsOpen(true)
  }, [setIsOpen])
  const router = useRouter()

  const keyboardNavigator = {
    navigate({item}: any) {
      const as =
        item.userLanguage !== 'en' ? `/${item.userLanguage}${item.as}` : item.as
      router.push(item.pathname, as)
    },
  }

  const onClose = React.useCallback(() => {
    setIsOpen(false)
  }, [setIsOpen])

  const onInput = React.useCallback(
    (event) => {
      setIsOpen(true)
      setInitialQuery(event.key)
    },
    [setIsOpen, setInitialQuery],
  )

  useDocSearchKeyboardEvents({
    isOpen,
    onOpen,
    onClose,
    onInput,
    searchButtonRef,
  })

  React.useEffect(() => {
    const addStartScreen = () => {
      const dropDown = document.querySelector('.DocSearch-Dropdown')
      const isExisting = document.querySelector('.DocSearch-NewStartScreen')
      if (dropDown && !isExisting) {
        dropDown.insertAdjacentHTML(
          'beforeend',
          ReactDOMServer.renderToStaticMarkup(<NewStartScreen />),
        )
      }
    }
    if (isOpen) {
      const modal = document.querySelector('.DocSearch-Container')
      const searchInput = document.querySelector('.DocSearch-Input')
      if (modal) {
        addStartScreen()
      }
      if (searchInput) {
        const handleInput = (event: any) => {
          const newStartScreen = document.querySelector(
            '.DocSearch-NewStartScreen',
          )
          if (newStartScreen) {
            // @ts-ignore
            newStartScreen.style.display =
              event.target.value !== '' ? 'none' : 'grid'
          }
        }
        searchInput.addEventListener('input', handleInput)
        return () => {
          searchInput.removeEventListener('input', handleInput)
        }
      }
    }
    return () => {}
  }, [isOpen])

  return (
    <>
      <Box css={{position: 'relative'}}>
        <TextField
          css={{
            height: 34,
            ':first-child': {
              height: 34,
            },
          }}
          inputRef={searchButtonRef}
          onClick={onOpen}
          placeholder='Search...'
        />
        <Shortcut style={{position: 'absolute', top: 3, right: 3}}>
          {macOS ? '⌘' : 'Ctrl+'}K
        </Shortcut>
      </Box>
      <Modal.Trigger isOpen={isOpen}>
        <Modal className='my-modal'></Modal>
      </Modal.Trigger>
      {isOpen &&
        ReactDOM.createPortal(
          <DocSearchModal
            initialQuery={initialQuery}
            appId='TZGZ85B9TB'
            apiKey='8177dfb3e2be72b241ffb8c5abafa899'
            indexName='material-ui'
            searchParameters={{
              attributesToRetrieve: [
                'hierarchy.lvl0',
                'hierarchy.lvl1',
                'hierarchy.lvl2',
                'hierarchy.lvl3',
                'hierarchy.lvl4',
                'hierarchy.lvl5',
                'hierarchy.lvl6',
                'content',
                'type',
                'url',
                // Extra
                'productId',
                'productCategoryId',
              ],
              hitsPerPage: 40,
            }}
            placeholder='Search...'
            transformItems={(items) => {
              return items.map((item) => {
                const parseUrl = document.createElement('a')
                parseUrl.href = item.url

                const canonicalPathname = '/'
                const canonicalAs = '/'

                return {
                  ...item,
                  pathname: canonicalPathname,
                  as: canonicalAs,
                }
              })
            }}
            hitComponent={DocSearchHit}
            // @ts-ignore
            initialScrollY={
              typeof window !== 'undefined' ? window.scrollY : undefined
            }
            onClose={onClose}
            navigator={keyboardNavigator}
          />,
          document.body,
        )}
    </>
  )
}

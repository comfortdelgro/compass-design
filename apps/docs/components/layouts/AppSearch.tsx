import Search from '@comfortdelgro/compass-icons/react/search'
import {
  Box,
  Button,
  Icon,
  Modal,
  SearchField,
  TextField,
  Typography,
} from '@comfortdelgro/react-compass'
import {faChevronRight} from '@fortawesome/free-solid-svg-icons'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import routes from 'constants/routes'
import {useIsTabletScreen} from 'hooks'
import {map, toLower, uniqBy} from 'lodash'
import {useRouter} from 'next/router'
import {useCallback, useEffect, useMemo, useRef, useState} from 'react'
import {getDataSearch} from 'utils'
import styles from './styles/Shortcut.module.css'

const dataSearch = getDataSearch()

export default function AppSearch(props: any) {
  const searchInputRef = useRef(null)
  const [isOpen, setIsOpen] = useState(false)
  const [keyword, setKeyword] = useState('')
  const isTabletScreen = useIsTabletScreen()
  const router = useRouter()
  const macOS = window.navigator.platform.toUpperCase().indexOf('MAC') >= 0
  const onOpen = useCallback(() => {
    setIsOpen(true)
  }, [setIsOpen])

  const onClose = () => {
    setIsOpen(false)
  }

  const handleChangeKeyword = (data: string) => {
    setKeyword(data)
  }

  const handleKeyDown = (e: KeyboardEvent) => {
    if (e.keyCode === 75 && e.metaKey) {
      setIsOpen(true)
    }
  }

  useEffect(() => {
    window.addEventListener('keydown', handleKeyDown)
    return () => {
      window.removeEventListener('keydown', handleKeyDown)
    }
  })

  useEffect(() => {
    if (isOpen && !!document) {
      setKeyword('')
      setTimeout(() => {
        const input = document.querySelector(
          '[placeholder="Enter the keyword you want to search..."]',
        )
        // @ts-ignore
        input?.focus()
      }, 200)
    }
  }, [isOpen])

  const searchRecommend = useMemo(() => {
    const keywordLower = toLower(keyword)
    const titleIncludeKeyword = dataSearch.filter((item) =>
      toLower(item.title).includes(keywordLower),
    )
    const descriptionIncludeKeyword = dataSearch.filter((item) =>
      toLower(item.description).includes(keywordLower),
    )
    const listRecommended = uniqBy(
      [...titleIncludeKeyword, ...descriptionIncludeKeyword],
      'title',
    )

    return map(listRecommended, (item) => {
      function highlight(str: string) {
        const regex = new RegExp(keyword, 'gi')
        let text = str
        text = text.replace(
          /(<span style="color: red; text-decoration: underline">|<\/span>)/gim,
          '',
        )
        return text.replace(
          regex,
          '<span style="color: red; text-decoration: underline">$&</span>',
        )
      }
      return {
        ...item,
        title: highlight(item.title),
        description: highlight(item.description ?? ''),
      }
    })
  }, [keyword])

  const handleClickItemSearch = async (pathname: string) => {
    await router.push(pathname)
    setIsOpen(false)
  }

  return (
    <>
      <Box css={{position: 'relative'}}>
        {isTabletScreen ? (
          <Button
            variant='primary'
            onClick={onOpen}
            css={{
              border: '1px solid var(--cdg-color-cdgBlue60)',
              height: 34,
              width: 34,
              borderRadius: 4,
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
            }}
          >
            <Search fill='white' />
          </Button>
        ) : (
          <>
            <TextField
              css={{
                background: 'var(--cdg-color-cdgBlue) !important',
                height: 34,
                ':first-child': {
                  borderColor: 'var(--cdg-color-cdgBlue60)',
                  height: 34,
                  overflow: 'hidden',
                },
              }}
              onClick={onOpen}
              placeholder='Search...'
            />
            <div
              className={styles.shortcut}
              style={{position: 'absolute', color: '#FFF', top: 3, right: 3}}
            >
              {macOS ? '⌘' : 'Ctrl+'}K
            </div>
          </>
        )}
      </Box>
      <Modal.Trigger isOpen={isOpen} handleClose={() => onClose?.()} size='lg'>
        <Modal>
          <Modal.Title css={{width: '100%'}}>
            <SearchField
              autoFocus={true}
              onChange={handleChangeKeyword}
              placeholder='Enter the keyword you want to search...'
              value={keyword}
              css={{
                width: '100%',
                height: 'var(--cdg-spacing-12)',
                '.cdg-searchfield-button': {
                  height: 'var(--cdg-spacing-8)',
                  width: 'var(--cdg-spacing-8)',
                },
              }}
              ref={searchInputRef}
            />
          </Modal.Title>
          {keyword === '' ? (
            <Modal.Description
              css={{
                maxHeight: '50vh',
                overflowY: 'auto',
                overflowX: 'hidden',
                display: 'grid',
                flex: 'initial',
                gridTemplateColumns: 'repeat(2, 1fr)',
                gridAutoRows: 'var(--cdg-spacing-14)',
                flexDirection: 'row',
                flexWrap: 'wrap',
                gap: 'var(--cdg-spacing-4)',
              }}
            >
              {routes.map((route) => (
                <Button
                  size='lg'
                  onClick={() =>
                    handleClickItemSearch(
                      route.pathname + route.children?.[0].pathname,
                    )
                  }
                  leftIcon={<Icon icon={route.icon ?? faChevronRight} />}
                  css={{
                    width: '100%',
                    '.cdg-button-content-children': {
                      flexGrow: 1,
                      justifyContent: 'center'
                    },
                  }}
                >
                  {route.title}
                </Button>
              ))}
            </Modal.Description>
          ) : (
            <Modal.Description
              css={{
                height: '50vh',
                overflowY: 'auto',
                overflowX: 'hidden',
                display: 'flex',
                flex: 'initial',
                flexDirection: 'column',
                gap: 'var(--cdg-spacing-4)',
              }}
            >
              {searchRecommend.map((searchItem, index) => {
                return (
                  <Button
                    size='lg'
                    variant='secondary'
                    key={searchItem.pathname}
                    onClick={() => handleClickItemSearch(searchItem.pathname)}
                    rightIcon={<FontAwesomeIcon icon={faChevronRight} />}
                    css={{
                      width: '100%',
                      '.cdg-button-content-children': {
                        flexGrow: 1,
                      },
                    }}
                  >
                    <Box
                      css={{
                        display: 'flex',
                        justifyContent: 'flex-start',
                        flexDirection: 'column',
                      }}
                    >
                      {/* @ts-ignore */}
                      <Typography.Header
                        variant='header5'
                        css={{
                          textAlign: 'left',
                          cursor: 'pointer'
                        }}
                        dangerouslySetInnerHTML={{__html: searchItem.title}}
                      />
                      {/* @ts-ignore */}
                      <Typography.Label
                        variant='label1'
                        css={{
                          textAlign: 'left',
                          color: 'var(--cdg-color-gray80)',
                          fontSize: '14px',
                          lineHeight: '1.3125rem',
                          fontWeight: 400,
                          marginTop: 'var(--cdg-spacing-gray80)',
                          cursor: 'pointer'
                        }}
                        dangerouslySetInnerHTML={{
                          __html: searchItem.description,
                        }}
                      />
                    </Box>
                  </Button>
                )
              })}
            </Modal.Description>
          )}
        </Modal>
      </Modal.Trigger>
    </>
  )
}

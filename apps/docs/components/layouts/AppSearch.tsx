import Search from '@comfortdelgro/compass-icons/react/search'
import {
  Box,
  Button,
  Column,
  Modal,
  SearchField,
  styled,
  TextField,
  Typography,
} from '@comfortdelgro/react-compass'
import {faChevronRight, faClose} from '@fortawesome/free-solid-svg-icons'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {useIsTabletScreen} from 'hooks'
import {map, replace, toLower, uniqBy} from 'lodash'
import {useRouter} from 'next/router'
import {useCallback, useEffect, useMemo, useRef, useState} from 'react'
import {getDataSearch} from 'utils'

const Shortcut = styled('div', {
  fontSize: 12,
  fontWeight: 500,
  lineHeight: '20px',
  backgroundColor: '$cdgBlue60',
  padding: '4px $2',
  borderRadius: 4,
})

const dataSearch = getDataSearch()

export default function AppSearch(props: any) {
  const searchInputRef = useRef(null)
  const firstItemRef = useRef<HTMLInputElement>(null)
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
    } else if (isOpen) {
      if (e.keyCode === 40) {
        // arrow down
        firstItemRef.current && firstItemRef.current?.focus()
      }
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
      return {
        ...item,
        title: replace(
          toLower(item.title),
          keywordLower,
          `<span style="color: var(--colors-cdgBlue80)">${keywordLower}</span>`,
        ),
        description: replace(
          toLower(item.description),
          keywordLower,
          `<span style="color: var(--colors-cdgBlue80)">${keywordLower}</span>`,
        ),
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
              border: '1px solid $cdgBlue60',
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
                background: '$cdgBlue !important',
                height: 34,
                ':first-child': {
                  borderColor: '$cdgBlue60',
                  height: 34,
                  overflow: 'hidden',
                },
              }}
              onClick={onOpen}
              placeholder='Search...'
            />
            <Shortcut style={{position: 'absolute', top: 3, right: 3}}>
              {macOS ? '⌘' : 'Ctrl+'}K
            </Shortcut>
          </>
        )}
      </Box>
      <Modal.Trigger isOpen={isOpen} handleClose={() => onClose?.()} size='lg'>
        <Modal>
          <Modal.Title>
            <Typography.Header variant='header4'>Search Box</Typography.Header>
          </Modal.Title>
          <Modal.CloseIcon>
            <FontAwesomeIcon icon={faClose} />
          </Modal.CloseIcon>
          <Modal.Description>
            <SearchField
              autoFocus={true}
              onChange={handleChangeKeyword}
              placeholder='Enter the keyword you want to search...'
              value={keyword}
              css={{width: '100%'}}
              ref={searchInputRef}
            />
            <Column
              css={{height: '50vh', overflowY: 'scroll', marginTop: '$3'}}
            >
              {searchRecommend.map((searchItem, index) => {
                return (
                  <Box
                    key={searchItem.pathname}
                    as={'button'}
                    {...(index === 0 ? {ref: firstItemRef} : {})}
                    css={{
                      background: '$gray10',
                      padding: '$3',
                      margin: 1,
                      borderRadius: 8,
                      cursor: 'pointer',
                      display: 'flex',
                      justifyContent: 'space-between',
                      alignItems: 'center',
                      '&:hover': {
                        background: '$cdgBlue10',
                      },
                    }}
                    onClick={() => handleClickItemSearch(searchItem.pathname)}
                  >
                    <Box
                      css={{
                        display: 'flex',
                        flexDirection: 'column',
                      }}
                    >
                      {/* @ts-ignore */}
                      <Typography.Header
                        variant='header5'
                        css={{textAlign: 'left', textTransform: 'capitalize'}}
                        dangerouslySetInnerHTML={{__html: searchItem.title}}
                      />
                      {/* @ts-ignore */}
                      <Typography.Label
                        variant='label1'
                        css={{
                          textAlign: 'left',
                          color: '$gray80',
                          marginTop: '$1',
                          textTransform: 'capitalize',
                        }}
                        dangerouslySetInnerHTML={{
                          __html: searchItem.description,
                        }}
                      />
                    </Box>
                    <FontAwesomeIcon icon={faChevronRight} />
                  </Box>
                )
              })}
            </Column>
          </Modal.Description>
        </Modal>
      </Modal.Trigger>
    </>
  )
}

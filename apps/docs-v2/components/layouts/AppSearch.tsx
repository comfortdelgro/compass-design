import {
  Box,
  Column,
  Modal,
  SearchField,
  styled,
  TextField,
  Typography,
} from '@comfortdelgro/react-compass'
import {faChevronRight, faClose} from '@fortawesome/free-solid-svg-icons'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {map, replace, toLower} from 'lodash'
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
  const [isOpen, setIsOpen] = useState(false)
  const [keyword, setKeyword] = useState('')
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
    const data = dataSearch.filter(
      (item) =>
        toLower(item.title).includes(keywordLower) ||
        toLower(item.description).includes(keywordLower),
    )
    return map(data, (item) => {
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
              {searchRecommend.map((searchItem) => {
                return (
                  <Box
                    as={'button'}
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

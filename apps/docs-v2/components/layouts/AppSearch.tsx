import {
  Box,
  Column,
  List,
  Modal,
  SearchField,
  styled,
  TextField,
} from '@comfortdelgro/react-compass'
import {faChevronRight} from '@fortawesome/free-solid-svg-icons'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {useCallback, useMemo, useRef, useState} from 'react'
import {getDataSearch} from 'utils'

const Shortcut = styled('div', {
  fontSize: 12,
  fontWeight: 700,
  lineHeight: '20px',
  border: `1px solid $cdgBlue40`,
  backgroundColor: '$cdgBlue20',
  padding: '3px $2',
  borderRadius: 4,
})

const dataSearch = getDataSearch()

export default function AppSearch(props: any) {
  const searchButtonRef = useRef(null)
  const [isOpen, setIsOpen] = useState(false)
  const [keyword, setKeyword] = useState('')
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

  const searchRecommend = useMemo(() => {
    return dataSearch.filter((item) => item.title.includes(keyword))
  }, [keyword])

  return (
    <>
      <Box css={{position: 'relative'}}>
        <TextField
          css={{
            background: '$cdgBlue100',
            height: 34,
            ':first-child': {
              borderColor: '$cdgBlue60',
              height: 34,
              overflow: 'hidden',
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
      <Modal.Trigger isOpen={isOpen} handleClose={() => onClose?.()} size='lg'>
        <Modal>
          <Modal.Title>Search Box</Modal.Title>
          <Modal.CloseIcon>X</Modal.CloseIcon>
          <Modal.Description>
            <SearchField
              onChange={handleChangeKeyword}
              placeholder='Search'
              value={keyword}
              css={{width: '100%'}}
            />
            <Column
              css={{height: '50vh', overflowY: 'scroll', marginTop: '$3'}}
            >
              {searchRecommend.map((searchItem) => {
                return (
                  <List
                    css={{background: '$gray20'}}
                    title={searchItem.title}
                    onClick={() => console.log('runn')}
                    description={searchItem.description}
                    rightInfo={{
                      icon: <FontAwesomeIcon icon={faChevronRight} />,
                    }}
                  />
                )
              })}
            </Column>
          </Modal.Description>
        </Modal>
      </Modal.Trigger>
    </>
  )
}

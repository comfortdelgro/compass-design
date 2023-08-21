import {Box, Modal, styled, TextField} from '@comfortdelgro/react-compass'
import {useCallback, useRef, useState} from 'react'

const Shortcut = styled('div', {
  fontSize: 12,
  fontWeight: 700,
  lineHeight: '20px',
  border: `1px solid $cdgBlue40`,
  backgroundColor: '$cdgBlue20',
  padding: '3px $2',
  borderRadius: 4,
})

export default function AppSearch(props: any) {
  const searchButtonRef = useRef(null)
  const [isOpen, setIsOpen] = useState(false)
  const macOS = window.navigator.platform.toUpperCase().indexOf('MAC') >= 0
  const onOpen = useCallback(() => {
    setIsOpen(true)
  }, [setIsOpen])

  const onClose = () => {
    setIsOpen(false)
  }

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
      <Modal.Trigger isOpen={isOpen} handleClose={() => onClose?.()}>
        <Modal>
          <Modal.Title>Search Box</Modal.Title>
          <Modal.CloseIcon>X</Modal.CloseIcon>
          <Modal.Description>Hello</Modal.Description>
        </Modal>
      </Modal.Trigger>
    </>
  )
}

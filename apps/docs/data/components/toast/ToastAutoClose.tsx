import {Icon, Toast, Button} from '@comfortdelgro/react-compass'
import {faImage, faXmark} from '@fortawesome/free-solid-svg-icons'
import React from 'react'

const AutoClose: React.FC = () => {
  const [isOpen, setIsOpen] = React.useState(false)
  return (
    <>
      <Button css={{width: '8rem'}} onPress={() => setIsOpen(true)}>
        Open toast
      </Button>
      <Toast
        isOpen={isOpen}
        handleClose={() => setIsOpen(false)}
        autoClose={1000}
      >
        <Toast.Icon>
          <Icon icon={faImage} />
        </Toast.Icon>
        <Toast.Title>My Title</Toast.Title>
        <Toast.Label>a few minutes ago</Toast.Label>
        <Toast.CloseIcon>
          <Icon icon={faXmark} />
        </Toast.CloseIcon>
        <Toast.Message>Lorem ipsum dolor, sit amet consectetur.</Toast.Message>
        <Toast.Actions>
          <Button>Take action</Button>
          <Button>Take action</Button>
        </Toast.Actions>
      </Toast>
    </>
  )
}

export default AutoClose

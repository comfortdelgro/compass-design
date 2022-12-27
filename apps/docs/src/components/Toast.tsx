import {Button, Icon, Toast} from '@comfortdelgro/react-compass'
import {faImage, faXmark} from '@fortawesome/free-solid-svg-icons'
import React from 'react'

interface props {
  variant?: 'informative' | 'neutral' | 'negative' | 'positive'
  autoClose?: number | false
}

const ToastTestComponent: React.FC<props> = ({
  variant = 'neutral',
  autoClose = false,
}: props) => {
  const [isOpen, setIsOpen] = React.useState(false)
  return (
    <>
      <Button
        css={{width: '8rem', color: 'black'}}
        onPress={() => setIsOpen(true)}
      >
        Open toast
      </Button>
      <Toast
        isOpen={isOpen}
        handleClose={() => setIsOpen(false)}
        color={variant}
        autoClose={autoClose}
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
          <Button css={{color: 'black'}}>Take action</Button>
          <Button css={{color: 'black'}}>Take action</Button>
        </Toast.Actions>
      </Toast>
    </>
  )
}

export default ToastTestComponent

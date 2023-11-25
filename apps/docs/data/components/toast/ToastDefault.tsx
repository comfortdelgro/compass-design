import {Button, Icon, Toast} from '@comfortdelgro/react-compass'
import {faImage, faXmark} from '@fortawesome/free-solid-svg-icons'
import React from 'react'

const Default: React.FC = () => {
  const [isDefaultOpen, setIsDefaultOpen] = React.useState(false)

  return (
    <div>
      <h3>Default toast</h3>
      <Button css={{width: '8rem'}} onPress={() => setIsDefaultOpen(true)}>
        Open toast
      </Button>
      <Toast isOpen={isDefaultOpen} handleClose={() => setIsDefaultOpen(false)}>
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
    </div>
  )
}

export default Default

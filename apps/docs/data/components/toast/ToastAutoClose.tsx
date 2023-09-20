import {Icon} from '@comfortdelgro/react-compass'
import Button from '@comfortdelgro/react-compass/button'
import Toast from '@comfortdelgro/react-compass/toast'
import {faImage, faXmark} from '@fortawesome/free-solid-svg-icons'
import React from 'react'

const AutoClose: React.FC = () => {
  const [isAutoCloseOpen, setIsAutoCloseOpen] = React.useState(false)
  return (
    <div>
      <h3>Auto-close toast</h3>
      <Button css={{width: '8rem'}} onPress={() => setIsAutoCloseOpen(true)}>
        Open toast
      </Button>
      <Toast
        isOpen={isAutoCloseOpen}
        handleClose={() => setIsAutoCloseOpen(false)}
        autoClose={500}
        color='informative'
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
    </div>
  )
}

export default AutoClose

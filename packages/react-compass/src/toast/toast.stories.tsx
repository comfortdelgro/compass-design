import {faImage, faXmark} from '@fortawesome/free-solid-svg-icons'
import React from 'react'
import Button from '../button/button'
import {Icon} from '../icon'
import {Column} from '../utils/components'
import Toast from './index'
import ToastActions from './toast-actions'

export const FullFeatured: React.FC = () => {
  const [isBasicOpen, setIsBasicOpen] = React.useState(false)
  const handleCloseBaic = () => {
    setIsBasicOpen(false)
  }
  return (
    <Column>
      <Button css={{width: '8rem'}} onPress={() => setIsBasicOpen(true)}>
        Open toast
      </Button>
      <Toast
        isOpen={isBasicOpen}
        handleClose={() => handleCloseBaic?.()}
        autoClose={1000}
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
        <ToastActions>
          <Button>Take action</Button>
          <Button>Take action</Button>
        </ToastActions>
      </Toast>
    </Column>
  )
}

import {
  Button,
  Icon,
  Toast,
  ToastContextProvider,
  useToast,
} from '@comfortdelgro/react-compass'
import {faImage, faXmark} from '@fortawesome/free-solid-svg-icons'
import React from 'react'

interface props {
  variant?: 'informative' | 'neutral' | 'negative' | 'positive'
  autoClose?: number | false
}

const SubService1 = () => {
  const toast = useToast()
  return (
    <>
      <Button
        variant='primary'
        css={{width: 'fit-content', color: 'black'}}
        onClick={() =>
          toast.show({
            color: 'informative',
            title: 'Lorem ipsum dolor, sit amet consectetur',
          })
        }
      >
        Open toast
      </Button>
      <Button
        variant='primary'
        css={{width: 'fit-content', color: 'black'}}
        onClick={() =>
          toast.show({
            title: 'Lorem ipsum dolor, sit amet consectetur',
            hasCloseIcon: false,
          })
        }
      >
        Open toast without close button
      </Button>
    </>
  )
}
const SubService2 = () => {
  const toast = useToast()
  return (
    <>
      <Button
        variant='primary'
        css={{width: 'fit-content', color: 'black'}}
        onClick={() =>
          toast.show({
            autoClose: false,
            message: 'Lorem ipsum dolor, sit amet consectetur.',
            icon: <Icon icon={faImage} />,
            title: 'My Title',
            actions: (
              <>
                <Button css={{width: 'fit-content', color: 'black'}}>
                  Take action
                </Button>
                <Button css={{width: 'fit-content', color: 'black'}}>
                  Take action
                </Button>
              </>
            ),
            label: 'a few minutes ago',
          })
        }
      >
        Open toast autoClose: false
      </Button>
      <Button
        variant='primary'
        css={{width: 'fit-content', color: 'black'}}
        onClick={() => toast.clearAll()}
      >
        Clear all toasts
      </Button>
    </>
  )
}
export const ToastService = () => {
  return (
    <ToastContextProvider>
      <div style={{display: 'flex', flexDirection: 'column', gap: '12px'}}>
        <SubService1 />
        <SubService2 />
      </div>
    </ToastContextProvider>
  )
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

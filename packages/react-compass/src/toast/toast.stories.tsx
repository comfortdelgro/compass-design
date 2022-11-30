import {faImage, faXmark} from '@fortawesome/free-solid-svg-icons'
import React from 'react'
import Button from '../button/button'
import {Icon} from '../icon'
import {Column} from '../utils/components'
import Toast from './index'

export const Default: React.FC = () => {
  const [isDefaultOpen, setIsDefaultOpen] = React.useState(false)

  return (
    <Column>
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
    </Column>
  )
}

export const Colors: React.FC = () => {
  const [isInformativeOpen, setIsInformativeOpen] = React.useState(false)
  const [isNeutralOpen, setIsNeutralOpen] = React.useState(false)
  const [isPositiveOpen, setIsPositiveOpen] = React.useState(false)
  const [isNegativeOpen, setIsNegativeOpen] = React.useState(false)

  return (
    <Column>
      <h3>Informative: blue</h3>
      <Button css={{width: '8rem'}} onPress={() => setIsInformativeOpen(true)}>
        Open toast
      </Button>
      <Toast
        isOpen={isInformativeOpen}
        handleClose={() => setIsInformativeOpen(false)}
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

      <h3>Neutral: white</h3>
      <Button css={{width: '8rem'}} onPress={() => setIsNeutralOpen(true)}>
        Open toast
      </Button>
      <Toast
        isOpen={isNeutralOpen}
        handleClose={() => setIsNeutralOpen(false)}
        color='neutral'
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

      <h3>Negative: red</h3>
      <Button css={{width: '8rem'}} onPress={() => setIsNegativeOpen(true)}>
        Open toast
      </Button>
      <Toast
        isOpen={isNegativeOpen}
        handleClose={() => setIsNegativeOpen(false)}
        color='negative'
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

      <h3>Positive: green</h3>
      <Button css={{width: '8rem'}} onPress={() => setIsPositiveOpen(true)}>
        Open toast
      </Button>
      <Toast
        isOpen={isPositiveOpen}
        handleClose={() => setIsPositiveOpen(false)}
        color='positive'
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
    </Column>
  )
}

export const AutoClose: React.FC = () => {
  const [isAutoCloseOpen, setIsAutoCloseOpen] = React.useState(false)
  return (
    <Column>
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
    </Column>
  )
}

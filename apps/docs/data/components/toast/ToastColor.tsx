import Button from '@comfortdelgro/react-compass-old/button'
import Icon from '@comfortdelgro/react-compass-old/icon'
import Toast from '@comfortdelgro/react-compass-old/toast'
import {faImage, faXmark} from '@fortawesome/free-solid-svg-icons'
import React from 'react'

const Colors: React.FC = () => {
  const [isInformativeOpen, setIsInformativeOpen] = React.useState(false)
  const [isNeutralOpen, setIsNeutralOpen] = React.useState(false)
  const [isPositiveOpen, setIsPositiveOpen] = React.useState(false)
  const [isNegativeOpen, setIsNegativeOpen] = React.useState(false)

  return (
    <div>
      <h3>Informative: blue</h3>
      <Button css={{width: '8rem'}} onPress={() => setIsInformativeOpen(true)}>
        Open toast
      </Button>
      <Toast
        isOpen={isInformativeOpen}
        handleClose={() => setIsInformativeOpen(false)}
        color='informative'
        anchorOrigin={{horizontal: 'left', vertical: 'top'}}
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
        anchorOrigin={{horizontal: 'right', vertical: 'top'}}
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
        anchorOrigin={{horizontal: 'left', vertical: 'bottom'}}
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
        anchorOrigin={{horizontal: 'right', vertical: 'bottom'}}
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

export default Colors

import Button from '@comfortdelgro/react-compass/button'
import Error from '@comfortdelgro/react-compass/error'
import Icon from '@comfortdelgro/react-compass/icon'
import {faBug} from '@fortawesome/free-solid-svg-icons'

export const Primary = () => {
  return (
    <Error>
      <Error.Icon>
        <Icon icon={faBug} />
      </Error.Icon>
      <Error.Title>Error: some bugs</Error.Title>
      <Error.Description>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. pariatur.
      </Error.Description>
      <Error.Action>
        <Button
          className='c-hKssGC-hYGuEl-variant-primary'
          onPress={() => {
            console.log('click ok')
          }}
        >
          OK
        </Button>
      </Error.Action>
    </Error>
  )
}

export const Secondary = () => {
  return (
    <Error variant='secondary'>
      <Error.Image>
        <Icon icon={faBug} />
      </Error.Image>
      <Error.Title>Error: some bugs</Error.Title>
      <Error.Description>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. pariatur.
      </Error.Description>
      <Error.Action>
        <Button
          className='c-hKssGC-hYGuEl-variant-primary'
          onPress={() => {
            console.log('click ok')
          }}
        >
          OK
        </Button>
      </Error.Action>
    </Error>
  )
}

export const Css = () => {
  return (
    <Error variant='primary'>
      <Error.Icon>
        <Icon icon={faBug} />
      </Error.Icon>
      <Error.Title>Error: some bugs</Error.Title>
      <Error.Description css={{color: 'red'}}>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. pariatur.
      </Error.Description>
      <Error.Action>
        <Button
          className='c-hKssGC-hYGuEl-variant-primary'
          onPress={() => {
            console.log('click ok')
          }}
        >
          OK
        </Button>
      </Error.Action>
    </Error>
  )
}

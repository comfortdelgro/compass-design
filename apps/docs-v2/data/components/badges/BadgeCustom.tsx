import {Badge} from '@comfortdelgro/react-compass'

function Customized() {
  return (
    <Badge
    label='Outline'
    color='warning'
    variant='outline'
    css={{color: 'purple', '&:hover': {backgroundColor: 'grey'}}}
  />
  )
}

export default Customized

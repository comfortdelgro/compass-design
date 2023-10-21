import {Column} from '@comfortdelgro/react-compass'
import {Chip} from '@comfortdelgro/static'
//import Chip from '@comfortdelgro/static/chip'
const Default: React.FC = () => {
  return (
    <Column>
      <h6> Basic Chip</h6>
      <Chip>Basic Chip</Chip>
      <h6>Close Button</h6>
      <Chip hasCloseButton>Close Button</Chip>
      <h6>Error</h6>
      <Chip isErrored>Errored Chip</Chip>
      <h5>Custom Styling</h5>
      <h6>
        Warning: Using 'css' prop to custom styling is not recommended for
        server components. You should use css module to custom styling instead.
      </h6>
      <Chip
        hasCloseButton
        css={{
          border: '1px solid purple',
          '&:hover': {color: '$success'},
          '& > div:first-child': {
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            '& svg': {
              height: '2rem',
              width: '2rem',
            },
          },
        }}
      >
        Custom Styling
      </Chip>
      <br />
    </Column>
  )
}

export default Default

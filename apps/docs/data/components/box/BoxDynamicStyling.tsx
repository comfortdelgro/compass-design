import {Box, Column} from '@comfortdelgro/react-compass'

const DynamicStyling: React.FC = () => {
  return (
    <Column>
      <h3>
        To style the Box component, you can use both 'css' and 'style' props.
      </h3>
      <h3>
        1. Styling with 'css' prop, giving you much more power than the regular
        'style' prop.
      </h3>
      <Box
        css={{
          backgroundColor: 'grey',
          width: '8rem',
          textAlign: 'center',
          '& p': {
            color: 'white',
          },
        }}
      >
        <p>My box</p>
      </Box>
      <h3>1. Styling with 'style' prop</h3>
      <Box
        style={{
          backgroundColor: 'grey',
          width: '8rem',
          textAlign: 'center',
          color: 'red',
        }}
      >
        <p>My box</p>
      </Box>
    </Column>
  )
}

export default DynamicStyling

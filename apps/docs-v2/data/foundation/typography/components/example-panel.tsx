import {Box, Typography} from '@comfortdelgro/react-compass'

const ExamplePanel = () => {
  const exampleText = 'Poppins Display '

  return (
    <Box
      css={{
        display: 'inline-flex',
        flexDirection: 'column',
        gap: '41px',
        padding: '22px 52px',
        borderRadius: '20px',
        backgroundColor: '$gray20',
        boxShadow:
          '0px 0.3px 0.9px rgba(0, 0, 0, 0.1), 0px 1.6px 3.6px rgba(0, 0, 0, 0.13)',
        overflow: 'auto',
        '@max_1024': {
          width: '100%',
        },
        
      }}
    >
      <Typography.Display variant='display1'>{exampleText}</Typography.Display>
      <Typography.Display variant='display2'>{exampleText}</Typography.Display>
      <Typography.Display variant='display3'>{exampleText}</Typography.Display>
    </Box>
  )
}

export default ExamplePanel

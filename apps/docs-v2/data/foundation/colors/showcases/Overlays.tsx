import {Box, theme} from '@comfortdelgro/react-compass'
import ColorBox from '../components/ColorBox'

const DemoColors = () => {
  return (
    <Box css={{display: 'flex', flexWrap: 'wrap'}}>
      <ColorBox color={theme.colors.overlayLight} />
      <ColorBox color={theme.colors.overlayDark} />
    </Box>
  )
}

export default DemoColors

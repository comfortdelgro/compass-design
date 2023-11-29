import {Box} from '@comfortdelgro/react-compass'
import {theme} from '@comfortdelgro/react-compass-old'
import ColorBox from '../components/ColorBox'

const DemoColors = () => {
  return (
    <Box css={{display: 'flex', flexWrap: 'wrap'}}>
      <ColorBox color={theme.colors.gradientOrange} gradient />
      <ColorBox color={theme.colors.gradientRainbow} gradient />
      <ColorBox color={theme.colors.gradientOrangeBlue} gradient />
    </Box>
  )
}

export default DemoColors

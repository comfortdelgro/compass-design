import {Box, lightThemeColors} from '@comfortdelgro/react-compass'
import ColorBox from '../components/ColorBox'

const DemoColors = () => {
  return (
    <Box css={{display: 'flex', flexWrap: 'wrap'}}>
      <ColorBox
        color={{
          token: 'gradientOrange',
          value: lightThemeColors.gradientOrange,
        }}
        gradient
      />
      <ColorBox
        color={{
          token: 'gradientRainbow',
          value: lightThemeColors.gradientRainbow,
        }}
        gradient
      />
      <ColorBox
        color={{
          token: 'gradientOrangeBlue',
          value: lightThemeColors.gradientOrangeBlue,
        }}
        gradient
      />
    </Box>
  )
}

export default DemoColors

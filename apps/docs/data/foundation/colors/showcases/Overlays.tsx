import {Box, lightThemeColors} from '@comfortdelgro/react-compass'
import ColorBox from '../components/ColorBox'

const DemoColors = () => {
  return (
    <Box css={{display: 'flex', flexWrap: 'wrap'}}>
      <ColorBox
        color={{token: 'overlayLight', value: lightThemeColors.overlayLight}}
      />
      <ColorBox
        color={{token: 'overlayDark', value: lightThemeColors.overlayDark}}
      />
    </Box>
  )
}

export default DemoColors

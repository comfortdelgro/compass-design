import {Box, lightThemeColors} from '@comfortdelgro/react-compass'
import ColorBox from '../components/ColorBox'

const DemoColors = () => {
  return (
    <Box css={{display: 'flex', flexWrap: 'wrap'}}>
      <ColorBox color={{token: 'cdgBlue10', value: lightThemeColors.cdgBlue10}} />
      <ColorBox color={{token: 'cdgBlue20', value: lightThemeColors.cdgBlue20}} />
      <ColorBox color={{token: 'cdgBlue40', value: lightThemeColors.cdgBlue40}} />
      <ColorBox color={{token: 'cdgBlue60', value: lightThemeColors.cdgBlue60}} />
      <ColorBox color={{token: 'cdgBlue80', value: lightThemeColors.cdgBlue80}} />
      <ColorBox color={{token: 'cdgBlue100', value: lightThemeColors.cdgBlue100}} />
      <ColorBox color={{token: 'cdgBlue120', value: lightThemeColors.cdgBlue120}} />
      <ColorBox color={{token: 'cdgBlue140', value: lightThemeColors.cdgBlue140}} />
    </Box>
  )
}

export default DemoColors

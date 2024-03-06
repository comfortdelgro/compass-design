import {Box, lightThemeColors} from '@comfortdelgro/react-compass'
import ColorBox from '../components/ColorBox'

const DemoColors = () => {
  return (
    <Box css={{display: 'flex', flexWrap: 'wrap'}}>
      <ColorBox color={{token: 'white', value: '#FFFFFF'}} />
      <ColorBox color={{token: 'gray10', value: lightThemeColors.gray10}} />
      <ColorBox color={{token: 'gray20', value: lightThemeColors.gray20}} />
      <ColorBox color={{token: 'gray30', value: lightThemeColors.gray30}} />
      <ColorBox color={{token: 'gray40', value: lightThemeColors.gray40}} />
      <ColorBox color={{token: 'gray50', value: lightThemeColors.gray50}} />
      <ColorBox color={{token: 'gray60', value: lightThemeColors.gray60}} />
      <ColorBox color={{token: 'gray70', value: lightThemeColors.gray70}} />
      <ColorBox color={{token: 'gray80', value: lightThemeColors.gray80}} />
      <ColorBox color={{token: 'gray90', value: lightThemeColors.gray90}} />
      <ColorBox color={{token: 'gray100', value: lightThemeColors.gray100}} />
      <ColorBox color={{token: 'gray110', value: lightThemeColors.gray110}} />
    </Box>
  )
}

export default DemoColors

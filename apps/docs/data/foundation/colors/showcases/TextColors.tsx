import {Box, lightThemeColors} from '@comfortdelgro/react-compass'
import ColorBox from '../components/ColorBox'

const DemoColors = () => {
  return (
    <Box css={{display: 'flex', flexWrap: 'wrap'}}>
      <ColorBox
        color={{token: 'primaryText', value: lightThemeColors.primaryText}}
      />
      <ColorBox
        color={{token: 'secondaryText', value: lightThemeColors.secondaryText}}
      />
      <ColorBox
        color={{token: 'disabledText', value: lightThemeColors.disabledText}}
      />
      <ColorBox
        color={{token: 'whiteText', value: lightThemeColors.whiteText}}
      />
    </Box>
  )
}

export default DemoColors

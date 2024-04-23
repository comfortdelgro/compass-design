import {Box, lightThemeColors} from '@comfortdelgro/react-compass'
import ColorBox from '../components/ColorBox'

const DemoColors = () => {
  return (
    <Box css={{display: 'flex', flexWrap: 'wrap'}}>
      <ColorBox
        color={{token: 'primaryBg', value: lightThemeColors.primaryBg}}
      />
      <ColorBox
        color={{token: 'secondaryBg', value: lightThemeColors.secondaryBg}}
      />
      <ColorBox color={{token: 'darkerBg', value: lightThemeColors.darkerBg}} />
    </Box>
  )
}

export default DemoColors

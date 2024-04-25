import {Box, lightThemeColors} from '@comfortdelgro/react-compass'
import ColorBox from '../components/ColorBox'

const DemoColors = () => {
  return (
    <Box css={{display: 'flex', flexWrap: 'wrap'}}>
      <ColorBox color={{token: 'divider', value: lightThemeColors.divider}} />
      <ColorBox color={{token: 'border', value: lightThemeColors.border}} />
      <ColorBox
        color={{token: 'activeBorder', value: lightThemeColors.activeBorder}}
      />
    </Box>
  )
}

export default DemoColors

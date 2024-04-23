import {Box, lightThemeColors} from '@comfortdelgro/react-compass'
import ColorBox from '../components/ColorBox'

const DemoColors = () => {
  return (
    <Box css={{display: 'flex', flexWrap: 'wrap'}}>
      <ColorBox color={{token: 'cdgBlue', value: lightThemeColors.cdgBlue}} />
      <ColorBox
        color={{token: 'typeHeading', value: lightThemeColors.typeHeading}}
      />
      <ColorBox
        color={{token: 'background', value: lightThemeColors.background}}
      />
    </Box>
  )
}

export default DemoColors

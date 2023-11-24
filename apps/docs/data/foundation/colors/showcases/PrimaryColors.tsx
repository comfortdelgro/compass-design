import {Box, theme} from '@comfortdelgro/react-compass-old'
import ColorBox from '../components/ColorBox'

const DemoColors = () => {
  return (
    <Box css={{display: 'flex', flexWrap: 'wrap'}}>
      <ColorBox color={theme.colors.cdgBlue} />
      <ColorBox color={theme.colors.typeHeading} />
      <ColorBox color={theme.colors.background} />
    </Box>
  )
}

export default DemoColors

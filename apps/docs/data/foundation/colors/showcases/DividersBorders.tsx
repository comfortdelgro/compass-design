import {Box, theme} from '@comfortdelgro/react-compass-old'
import ColorBox from '../components/ColorBox'

const DemoColors = () => {
  return (
    <Box css={{display: 'flex', flexWrap: 'wrap'}}>
      <ColorBox color={theme.colors.divider} />
      <ColorBox color={theme.colors.border} />
      <ColorBox color={theme.colors.activeBorder} />
    </Box>
  )
}

export default DemoColors

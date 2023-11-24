import {Box, theme} from '@comfortdelgro/react-compass-old'
import ColorBox from '../components/ColorBox'

const DemoColors = () => {
  return (
    <Box css={{display: 'flex', flexWrap: 'wrap'}}>
      <ColorBox color={theme.colors.primaryBg} />
      <ColorBox color={theme.colors.secondaryBg} />
      <ColorBox color={theme.colors.darkerBg} />
    </Box>
  )
}

export default DemoColors

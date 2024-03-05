import {Box} from '@comfortdelgro/react-compass'
import {theme} from '@comfortdelgro/react-compass'
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

import {Box} from '@comfortdelgro/react-compass'
import {theme} from '@comfortdelgro/react-compass-old'
import ColorBox from '../components/ColorBox'

const DemoColors = () => {
  return (
    <Box css={{display: 'flex', flexWrap: 'wrap'}}>
      <ColorBox color={theme.colors.cdgBlue10} />
      <ColorBox color={theme.colors.cdgBlue20} />
      <ColorBox color={theme.colors.cdgBlue40} />
      <ColorBox color={theme.colors.cdgBlue60} />
      <ColorBox color={theme.colors.cdgBlue80} />
      <ColorBox color={theme.colors.cdgBlue100} />
      <ColorBox color={theme.colors.cdgBlue120} />
      <ColorBox color={theme.colors.cdgBlue140} />
    </Box>
  )
}

export default DemoColors

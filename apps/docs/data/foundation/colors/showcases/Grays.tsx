import {Box} from '@comfortdelgro/react-compass'
import {theme} from '@comfortdelgro/react-compass-old'
import ColorBox from '../components/ColorBox'

const DemoColors = () => {
  return (
    <Box css={{display: 'flex', flexWrap: 'wrap'}}>
      <ColorBox color={{token: 'white', value: '#FFFFFF'}} />
      <ColorBox color={theme.colors.gray10} />
      <ColorBox color={theme.colors.gray20} />
      <ColorBox color={theme.colors.gray30} />
      <ColorBox color={theme.colors.gray40} />
      <ColorBox color={theme.colors.gray50} />
      <ColorBox color={theme.colors.gray60} />
      <ColorBox color={theme.colors.gray70} />
      <ColorBox color={theme.colors.gray80} />
      <ColorBox color={theme.colors.gray90} />
      <ColorBox color={theme.colors.gray100} />
      <ColorBox color={theme.colors.gray110} />
    </Box>
  )
}

export default DemoColors

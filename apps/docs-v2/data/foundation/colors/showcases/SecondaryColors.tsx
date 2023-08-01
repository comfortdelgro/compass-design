import {Box, theme} from '@comfortdelgro/react-compass'
import ColorBox from '../components/ColorBox'

const DemoColors = () => {
  return (
    <Box css={{display: 'flex', flexWrap: 'wrap'}}>
      <ColorBox color={theme.colors.infoBg} />
      <ColorBox color={theme.colors.dangerBg} />
      <ColorBox color={theme.colors.successBg} />
      <ColorBox color={theme.colors.severeWarningBg} />
      <ColorBox color={theme.colors.warningBg} />
      <ColorBox color={theme.colors.info} />
      <ColorBox color={theme.colors.danger} />
      <ColorBox color={theme.colors.success} />
      <ColorBox color={theme.colors.severeWarning} />
      <ColorBox color={theme.colors.warning} />
    </Box>
  )
}

export default DemoColors

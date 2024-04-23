import {Box, lightThemeColors} from '@comfortdelgro/react-compass'
import ColorBox from '../components/ColorBox'

const DemoColors = () => {
  return (
    <Box css={{display: 'flex', flexWrap: 'wrap'}}>
      <ColorBox color={{token: 'infoBg', value: lightThemeColors.infoBg}} />
      <ColorBox color={{token: 'dangerBg', value: lightThemeColors.dangerBg}} />
      <ColorBox
        color={{token: 'successBg', value: lightThemeColors.successBg}}
      />
      <ColorBox
        color={{
          token: 'severeWarningBg',
          value: lightThemeColors.severeWarningBg,
        }}
      />
      <ColorBox
        color={{token: 'warningBg', value: lightThemeColors.warningBg}}
      />
      <ColorBox color={{token: 'info', value: lightThemeColors.info}} />
      <ColorBox color={{token: 'danger', value: lightThemeColors.danger}} />
      <ColorBox color={{token: 'success', value: lightThemeColors.success}} />
      <ColorBox
        color={{token: 'severeWarning', value: lightThemeColors.severeWarning}}
      />
      <ColorBox color={{token: 'warning', value: lightThemeColors.warning}} />
    </Box>
  )
}

export default DemoColors

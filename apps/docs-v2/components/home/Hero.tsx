import {Container} from '@mui/material'
import Box from '@mui/material/Box'
import {useTheme} from '@mui/material/styles'
import Typography from '@mui/material/Typography'
import useMediaQuery from '@mui/material/useMediaQuery'
import * as React from 'react'
import GradientText from '../typography/GradientText'
import GetStartedButtons from './GetStartedButtons'

export default function Hero() {
  const frame = React.useRef<null | HTMLDivElement>(null)
  const globalTheme = useTheme()
  const isMdUp = useMediaQuery(globalTheme.breakpoints.up('md'))
  React.useEffect(() => {
    let obs: undefined | MutationObserver
    function suppressTabIndex() {
      if (frame.current && isMdUp) {
        const elements = frame.current.querySelectorAll(
          'a, button, input, textarea, select, details, [tabindex]:not([tabindex="-1"])',
        )
        elements.forEach((elm) => {
          elm.setAttribute('tabindex', '-1')
        })
      }
    }
    if (typeof MutationObserver !== 'undefined' && frame.current) {
      obs = new MutationObserver(suppressTabIndex)
      obs.observe(frame.current, {childList: true, subtree: true})
    }
    return () => {
      if (obs) {
        obs.disconnect()
      }
    }
  }, [isMdUp])
  return (
    <Container>
      <Box sx={{textAlign: {xs: 'center', md: 'left'}}}>
        <Typography variant='h1' sx={{my: 2, maxWidth: 500}}>
          <GradientText>Move faster</GradientText> with intuitive React UI tools
        </Typography>
        <Typography color='text.secondary' sx={{mb: 3, maxWidth: 500}}>
          MUI offers a comprehensive suite of UI tools to help you ship new
          features faster. Start with Material UI, our fully-loaded component
          library, or bring your own design system to our production-ready
          components.
        </Typography>
        <GetStartedButtons />
      </Box>
    </Container>
  )
}

import KeyboardArrowUpRoundedIcon from '@mui/icons-material/KeyboardArrowUpRounded'
import Box from '@mui/material/Box'
import Fab from '@mui/material/Fab'
import Fade from '@mui/material/Fade'
import {Theme} from '@mui/material/styles'
import Tooltip from '@mui/material/Tooltip'
import useScrollTrigger from '@mui/material/useScrollTrigger'
import * as React from 'react'

export default function BackToTop() {
  const [open, setOpen] = React.useState(false)

  const handleClose = () => {
    setOpen(false)
  }

  const handleOpen = () => {
    setOpen(true)
  }

  const trigger = useScrollTrigger({
    disableHysteresis: true,
    threshold: 200,
  })

  const handleClick = () => {
    const prefersReducedMotion = window.matchMedia(
      '(prefers-reduced-motion: reduce)',
    )
    const behavior = prefersReducedMotion.matches ? 'auto' : 'smooth'

    window.scrollTo({top: 0, behavior})
    setOpen(false)
  }

  return (
    <Fade in={trigger}>
      <Tooltip
        title='Scroll to top'
        open={open}
        onClose={handleClose}
        onOpen={handleOpen}
      >
        <Box
          className='mui-fixed'
          sx={{
            position: 'fixed',
            bottom: 24,
            right: 24,
            zIndex: 10,
          }}
        >
          <Fab
            sx={[
              (theme) => ({
                backgroundColor: (theme.vars || theme).palette.primary[100],
                boxShadow: `0px 4px 20px rgba(170, 180, 190, 0.3)`,
                '&:hover': {
                  backgroundColor: (theme.vars || theme).palette.primary[200],
                },
                '&:active': {
                  boxShadow: `0px 4px 20px rgba(170, 180, 190, 0.6)`,
                },
              }),
            ]}
            size='small'
            onClick={handleClick}
            data-ga-event-category='docs'
            data-ga-event-action='click-back-to-top'
          >
            <KeyboardArrowUpRoundedIcon
              sx={(theme: Theme) => ({
                color: (theme.vars || theme).palette.primary[800],
              })}
            />
          </Fab>
        </Box>
      </Tooltip>
    </Fade>
  )
}

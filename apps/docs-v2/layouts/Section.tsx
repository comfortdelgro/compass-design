import Box, {BoxProps} from '@mui/material/Box'
import Container from '@mui/material/Container'

interface SelectionProps extends BoxProps {
  bg?: 'white' | 'comfort' | 'dim' | 'gradient'
}

export default function Section(props: SelectionProps) {
  const {bg = 'white', children, sx, ...other} = props

  const map = {
    white: {
      light: 'common.white',
      dark: 'primaryDark.800',
    },
    comfort: {
      light: 'grey.50',
      dark: 'primaryDark.900',
    },
    dim: {
      light: 'primaryDark.700',
      dark: 'primaryDark.700',
    },
  }

  return (
    <Box
      {...other}
      sx={[
        (theme) => ({
          ...(bg === 'gradient'
            ? {
                background: `linear-gradient(180deg, ${
                  (theme.vars || theme).palette.grey[50]
                } 0%, #FFFFFF 100%)`,
              }
            : {
                bgcolor: map[bg].light,
              }),
          py: {xs: 4, sm: 6, md: 8},
          overflow: 'hidden',
        }),
        ...(Array.isArray(sx) ? sx : [sx]),
      ]}
    >
      <Container>{children}</Container>
    </Box>
  )
}

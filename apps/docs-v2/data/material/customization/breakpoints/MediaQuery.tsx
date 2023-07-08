import {green, red} from '@mui/material/colors'
import {styled} from '@mui/material/styles'
import Typography from '@mui/material/Typography'

const Root = styled('div')(({theme}) => ({
  padding: theme.spacing(1),
  [theme.breakpoints.down('md')]: {
    backgroundColor: red[500],
  },
  [theme.breakpoints.up('md')]: {
    backgroundColor: '#007FFF',
  },
  [theme.breakpoints.up('lg')]: {
    backgroundColor: green[500],
  },
}))

export default function MediaQuery() {
  return (
    <Root>
      <Typography>down(md): red</Typography>
      <Typography>up(md): blue</Typography>
      <Typography>up(lg): green</Typography>
    </Root>
  )
}

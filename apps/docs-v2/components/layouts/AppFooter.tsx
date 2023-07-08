import GitHubIcon from '@mui/icons-material/GitHub'
import LinkedInIcon from '@mui/icons-material/LinkedIn'
import TwitterIcon from '@mui/icons-material/Twitter'
import YouTubeIcon from '@mui/icons-material/YouTube'
import Box from '@mui/material/Box'
import Container from '@mui/material/Container'
import IconButton from '@mui/material/IconButton'
import Stack from '@mui/material/Stack'
import Typography from '@mui/material/Typography'
import SvgMuiLogotype from 'components/icons/SvgMuiLogotype'
import SvgStackOverflow from 'components/icons/SvgStackOverflow'
import Link from 'next/link'

interface AppFooterProps {
  stackOverflowUrl?: string
}

export default function AppFooter(props: AppFooterProps) {
  const {stackOverflowUrl} = props

  return (
    <Container component='footer'>
      <Box
        sx={{
          my: 3,
          display: {xs: 'block', sm: 'flex'},
          alignItems: {sm: 'center'},
          justifyContent: {sm: 'space-between'},
        }}
      >
        <Link href='/' aria-label='Go to homepage'>
          <SvgMuiLogotype height={28} width={91} />
        </Link>
        <Box sx={{mt: {xs: 3, sm: 0}}}>
          <Stack spacing={2} direction='row'>
            <IconButton
              target='_blank'
              rel='noopener noreferrer'
              href=''
              aria-label='github'
              title='GitHub'
              size='small'
            >
              <GitHubIcon fontSize='small' />
            </IconButton>
            <IconButton
              target='_blank'
              rel='noopener noreferrer'
              href=''
              aria-label='twitter'
              title='Twitter'
              size='small'
            >
              <TwitterIcon fontSize='small' />
            </IconButton>
            <IconButton
              target='_blank'
              rel='noopener noreferrer'
              href=''
              aria-label='linkedin'
              title='LinkedIn'
              size='small'
            >
              <LinkedInIcon fontSize='small' />
            </IconButton>
            <IconButton
              target='_blank'
              rel='noopener noreferrer'
              href=''
              aria-label='YouTube'
              title='YouTube'
              size='small'
            >
              <YouTubeIcon fontSize='small' />
            </IconButton>
            {stackOverflowUrl ? (
              <IconButton
                target='_blank'
                rel='noopener noreferrer'
                href={stackOverflowUrl}
                aria-label='Stack Overflow'
                title='Stack Overflow'
                size='small'
              >
                <SvgStackOverflow fontSize='small' />
              </IconButton>
            ) : null}
          </Stack>
        </Box>
      </Box>
      <Typography color='text.secondary' variant='body2' sx={{mb: 4}}>
        Copyright © {new Date().getFullYear()}
      </Typography>
    </Container>
  )
}

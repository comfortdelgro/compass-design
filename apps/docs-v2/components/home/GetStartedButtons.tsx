import CheckRounded from '@mui/icons-material/CheckRounded'
import ContentCopyRounded from '@mui/icons-material/ContentCopyRounded'
import KeyboardArrowRightRounded from '@mui/icons-material/KeyboardArrowRightRounded'
import Box, {BoxProps} from '@mui/material/Box'
import Button from '@mui/material/Button'
import copy from 'clipboard-copy'
import ROUTES from 'docs/src/route'
import Link from 'next/link'
import * as React from 'react'

interface GetStartedButtonsProps extends BoxProps {
  installation?: string
  to?: string
}

export default function GetStartedButtons(props: GetStartedButtonsProps) {
  const [copied, setCopied] = React.useState(false)
  const {
    installation = 'npm install @mui/material @emotion/react @emotion/styled',
    to = ROUTES.documentation,
    ...other
  } = props
  const handleCopy = () => {
    setCopied(true)
    copy(installation).then(() => {
      setTimeout(() => setCopied(false), 2000)
    })
  }
  return (
    <Box
      {...other}
      sx={{
        display: 'flex',
        flexWrap: {xs: 'wrap', md: 'nowrap'},
        '&& > *': {
          minWidth: {xs: '100%', md: '0%'},
        },
        ...other.sx,
      }}
    >
      <Button
        href={to}
        component={Link}
        size='large'
        variant='contained'
        endIcon={<KeyboardArrowRightRounded />}
        sx={{
          flexShrink: 0,
          mr: {xs: 0, md: 2},
          mb: {xs: 2, md: 0},
        }}
      >
        Get started
      </Button>
      <Button
        size='large'
        // @ts-expect-error
        variant='code'
        endIcon={
          copied ? <CheckRounded color='primary' /> : <ContentCopyRounded />
        }
        onClick={handleCopy}
        sx={{
          maxWidth: '324px',
          display: 'inline-block',
          justifyContent: 'start',
          overflowX: 'hidden',
          whiteSpace: 'nowrap',
          textOverflow: 'ellipsis',
          position: 'relative',
          pr: 5,
        }}
      >
        {installation}
      </Button>
    </Box>
  )
}

import {Box, Button} from '@comfortdelgro/react-compass-old'
import copy from 'clipboard-copy'
import * as React from 'react'

import Copy from '@comfortdelgro/compass-icons/react/copy'
import ArrowRightFilled from '@comfortdelgro/compass-icons/react/filled/arrow-right-filled'
import Tick from '@comfortdelgro/compass-icons/react/tick'

export default function GetStartedButtons() {
  const [copied, setCopied] = React.useState(false)
  const installation = 'npm install @comfortdelgro/react-compass-old'
  const handleCopy = () => {
    setCopied(true)
    copy(installation).then(() => {
      setTimeout(() => setCopied(false), 2000)
    })
  }
  return (
    <Box>
      <Button
        size='md'
        variant='primary'
        css={{marginRight: 10, marginTop: 10}}
        rightIcon={<ArrowRightFilled />}
      >
        Get started
      </Button>
      <Button
        size='md'
        variant='secondary'
        rightIcon={copied ? <Tick color='primary' /> : <Copy />}
        onClick={handleCopy}
        css={{
          display: 'inline-block',
          justifyContent: 'start',
          overflowX: 'hidden',
          whiteSpace: 'nowrap',
          textOverflow: 'ellipsis',
          position: 'relative',
          background: '#f4f6f9',
          color: '#2d3843',
          fontWeight: 400,
          marginTop: 10,
        }}
      >
        {installation}
      </Button>
    </Box>
  )
}

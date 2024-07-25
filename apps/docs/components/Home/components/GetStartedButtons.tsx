import {Box, Button} from '@comfortdelgro/react-compass'
import copy from 'clipboard-copy'
import * as React from 'react'

import Copy from '@comfortdelgro/compass-icons/react/copy'
import ArrowRightFilled from '@comfortdelgro/compass-icons/react/filled/arrow-right-filled'
import Tick from '@comfortdelgro/compass-icons/react/tick'

export default function GetStartedButtons() {
  const [copied, setCopied] = React.useState(false)
  const installation = 'npm install @comfortdelgro/react-compass'
  const handleCopy = () => {
    setCopied(true)
    copy(installation).then(() => {
      setTimeout(() => setCopied(false), 2000)
    })
  }
  return (
    <Box
      css={{marginTop: 10, display: 'flex', gap: 10, flexDirection: 'column'}}
    >
      <Button
        size='md'
        variant='primary'
        href='/getting-started/installation/'
        rightIcon={<ArrowRightFilled />}
      >
        Get started
      </Button>
      <Box
        css={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          backgroundColor: '#f4f6f9',
          borderRadius: 'var(--cdg-border-radius-md)',
          border: '1px solid var(--cdg-color-cdgBlue)',
          fontSize: '10px',
          color: '#2d3843',
        }}
        onClick={handleCopy}
      >
        <Box
          css={{
            lineHeight: 1.5,
            padding: 'var(--cdg-spacing-2)',
            overflow: 'hidden',
            display: "flex", 
            flexFlow: "row nowrap",
            fontSize: '13px',
            margin: '0',
            border: '0',
            flexGrow: 1,
          }}
        >
          {installation}
        </Box>
        <Box
          css={{
            display: 'inline-flex',
            flexDirection: 'row-reverse',
            alignItems: ['center', 'center'],
            width: '26px',
            height: '26px',
            cursor: 'pointer',
            position: 'relative',
            padding: 'var(--cdg-spacing-1)',
            margin: 'var(--cdg-spacing-1)',
            fontFamily: 'inherit',
            fontWeight: 500,
            borderRadius: '4px',
            border: 'none',
            svg: {
              userSelect: 'none',
              width: '16px',
              height: '16px',
              display: 'inline-block',
              flexShrink: 0,
              fontSize: '18px',
              margin: 'auto',
              color: '#2d3843',
            },
          }}
        >
          {copied ? <Tick color='primary' /> : <Copy />}
        </Box>
      </Box>
    </Box>
  )
}

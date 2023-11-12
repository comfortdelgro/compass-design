import {Box} from '@comfortdelgro/react-compass-old'
import * as React from 'react'

export default function ShowcaseContainer({
  preview,
  code,
}: {
  preview?: React.ReactNode
  code?: React.ReactNode
}) {
  return (
    <Box>
      <Box
        css={{
          display: 'flex',
          flexDirection: 'column',
          height: '100%',
        }}
      >
        <Box
          css={{
            display: 'flex',
            position: 'relative',
            justifyContent: 'center',
            alignItems: 'center',
            borderRadius: 20,
            backgroundColor: '#E2DEEB',
            borderBottomLeftRadius: 0,
            borderBottomRightRadius: 0,
          }}
        >
          {preview}
        </Box>
        <Box
          css={{
            flexGrow: 0,
            display: 'flex',
            flexDirection: 'column',
            maxWidth: '100%',
            position: 'relative',
            borderWidth: '0 1px 1px 1px',
            borderStyle: 'solid',
            borderColor: '$gray100',
            backgroundColor: '$black',
            borderBottomLeftRadius: 20,
            borderBottomRightRadius: 20,
            '.token.punctuation': {
              color: 'white',
            },
          }}
        >
          {code}
        </Box>
      </Box>
    </Box>
  )
}

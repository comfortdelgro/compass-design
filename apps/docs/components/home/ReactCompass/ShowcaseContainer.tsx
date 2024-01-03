import {Box} from '@comfortdelgro/react-compass'
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
            borderRadius: 8,
            padding: 'var(--cdg-spacing-4)',
            '.token.punctuation': {
              color: 'white',
            },
          }}
        >
          <Box
            css={{
              padding: '$3',
              overflow: 'hidden',
              flexGrow: 1,
              '&::-webkit-scrollbar': {
                display: 'none',
              },
              pre: {
                backgroundColor: 'transparent !important',
                position: 'relative',
                overflow: 'initial !important',
                zIndex: 1,
                '&::-webkit-scrollbar': {
                  display: 'none',
                },
              },
            }}
          >
            {code}
          </Box>
        </Box>
      </Box>
    </Box>
  )
}

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
            minHeight: 220,
            justifyContent: 'center',
            alignItems: 'center',
            borderRadius: 20,
            backgroundColor: '$gray40',
            borderColor: '$gray50',
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
            minHeight: 200,
            borderWidth: '0 1px 1px 1px',
            borderStyle: 'solid',
            borderColor: '$gray100',
            backgroundColor: '$gray110',
            borderBottomLeftRadius: 20,
            borderBottomRightRadius: 20,
          }}
        >
          {code}
        </Box>
      </Box>
    </Box>
  )
}

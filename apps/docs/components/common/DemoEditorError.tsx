import {Box} from '@comfortdelgro/react-compass'
import * as React from 'react'

export default function DemoEditorError(props: {children: React.ReactNode}) {
  if (!props.children) {
    return null
  }

  return (
    <Box
      css={{
        position: 'absolute',
        top: 20,
        left: '50%',
        transform: 'translateX(-50%) translateY(-50%)',
        py: '2px',
        px: '6px',
        background: '$dangerBg',
        color: '$danger',
        border: '1px solid $danger',
        padding: 'var(--cdg-spacing-2)',
        borderRadius: 8,
      }}
    >
      {props.children}
    </Box>
  )
}

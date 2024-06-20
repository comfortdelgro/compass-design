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
        background: 'var(--cdg-color-dangerBg)',
        color: 'var(--cdg-color-danger)',
        border: '1px solid var(--cdg-color-danger)',
        padding: 'var(--cdg-spacing-2)',
        borderRadius: 8,
      }}
    >
      {props.children}
    </Box>
  )
}

import prism from '@comfortdelgro/markdown/prism'
import {Box} from '@comfortdelgro/react-compass'
import * as React from 'react'
import SimpleCodeEditor from 'react-simple-code-editor'
interface EditorProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode
  onChange: (value: any) => void
  value: string
}

export default function Editor(props: EditorProps) {
  const {value, onChange, children, ...other} = props
  const wrapperRef = React.useRef<HTMLDivElement | null>(null)
  const enterRef = React.useRef<HTMLElement | null>(null)

  return (
    <div
      ref={wrapperRef}
      onKeyDown={(event: React.KeyboardEvent) => {
        if (event.key === 'Tab') {
          return
        }

        if (event.key === 'Escape') {
          enterRef.current!.focus()
          return
        }

        if (event.key === 'Enter') {
          const textarea = wrapperRef.current!.querySelector('textarea')
          if (textarea !== document.activeElement) {
            event.preventDefault()
            event.stopPropagation()
            textarea!.focus()
          }
        }
      }}
      {...other}
    >
      <Box
        className='cdg-copy'
        css={{
          maxHeight: 500,
          background: 'var(--cdg-color-gray10)',
          overflow: 'auto',
          '.cdg-code-editor': {
            fontSize: 13,
            lineHeight: 1.5,
            background: 'var(--cdg-color-gray10)',
            pre: {
              outline: 'none',
              padding: 'var(--cdg-spacing-4) !important',
            },
            textarea: {
              outline: 'none',
              padding: 'var(--cdg-spacing-4) !important',
            },
          },
        }}
      >
        <SimpleCodeEditor
          value={value}
          onValueChange={onChange}
          className='cdg-code-editor'
          highlight={(code: any) =>
            `<code class="language-tsx">${prism(code)}</code>`
          }
        />
      </Box>
      {children}
    </div>
  )
}

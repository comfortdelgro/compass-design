import prism from '@comfortdelgro/markdown/prism'
import {Box} from '@comfortdelgro/react-compass'
import * as React from 'react'
import SimpleCodeEditor from 'react-simple-code-editor'
import {useCodeCopy} from 'utils/CodeCopy'
import styles from './styles/DemoEditor.module.css'
interface DemoEditorProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode
  language: string
  onChange: (value: any) => void
  value: string
}

export default function DemoEditor(props: DemoEditorProps) {
  const {language, value, onChange, children, ...other} = props
  const wrapperRef = React.useRef<HTMLDivElement | null>(null)
  const enterRef = React.useRef<HTMLElement | null>(null)
  const handlers = useCodeCopy()

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
        {...handlers}
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
        {/* @ts-ignore */}
        <SimpleCodeEditor
          value={value}
          onValueChange={onChange}
          className='cdg-code-editor'
          highlight={(code: any) =>
            `<code class="language-${language}">${prism(code, language)}</code>`
          }
        />
      </Box>
      <Box
        ref={enterRef}
        tabIndex={0}
        className={`${styles.CdgDemoEditorInfo}`}
        dangerouslySetInnerHTML={{
          __html: 'Press <kbd>Enter</kbd> to start editing',
        }}
      />
      {children}
    </div>
  )
}

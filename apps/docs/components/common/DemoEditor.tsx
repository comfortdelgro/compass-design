import prism from '@comfortdelgro/markdown/prism'
import {Box} from '@comfortdelgro/react-compass'
import * as React from 'react'
import SimpleCodeEditor from 'react-simple-code-editor'
import {useCodeCopy} from 'utils/CodeCopy'
import styles from './styles/DemoEditor.module.css'
import simpleCodeStyles from './styles/SimpleCodeEditor.module.css'

interface DemoEditorProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode
  id: string
  language: string
  onChange: (value: any) => void
  value: string
}

export default function DemoEditor(props: DemoEditorProps) {
  const {language, value, onChange, children, id, ...other} = props
  const wrapperRef = React.useRef<HTMLDivElement | null>(null)
  const enterRef = React.useRef<HTMLElement | null>(null)
  const handlers = useCodeCopy()

  return (
    <div
      className={'markDownElement'}
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
      <div className={`cdg-root ${'cdg-root'}`} {...handlers}>
        <div className={`scrollContainer ${'scrollContainer'}`}>
          {/* @ts-ignore */}
          <SimpleCodeEditor
            className={simpleCodeStyles.simpleCodeEditor}
            highlight={(code: any) =>
              `<code class="language-${language}">${prism(
                code,
                language,
              )}</code>`
            }
            id={id}
            value={value}
            onValueChange={onChange}
          />
        </div>
        <Box
          ref={enterRef}
          tabIndex={0}
          className={styles.box}
          dangerouslySetInnerHTML={{
            __html: 'Press <kbd>Enter</kbd> to start editing',
          }}
        />
        {/* <NoSsr>
          <CodeCopyButton {...copyButtonProps} code={value} />
        </NoSsr> */}
        {children}
      </div>
    </div>
  )
}

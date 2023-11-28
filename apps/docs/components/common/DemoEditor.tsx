import prism from '@comfortdelgro/markdown/prism'
import { Box } from '@comfortdelgro/react-compass'
import * as React from 'react'
import SimpleCodeEditor from 'react-simple-code-editor'
import { useCodeCopy } from 'utils/CodeCopy'
import simpleCodeStyles from './styles/SimpleCodeEditor.module.css'
import styles from './styles/DemoEditor.module.css'
interface DemoEditorProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode
  id: string
  language: string
  onChange: (value: any) => void
  value: string
}

export default function DemoEditor(props: DemoEditorProps) {
  const { language, value, onChange, children, id, ...other } = props
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
          className={`${styles.CdgDemoEditorInfo} asdasd`}
          // css={{
          //   color: 'var(--cdg-color-gray80)',
          //   position: 'absolute',
          //   top: 'var(--cdg-spacing-1)',
          //   padding: 'var(--cdg-spacing-1)',
          //   outline: 0,
          //   left: '50%',
          //   border: '1px solid',
          //   borderColor: '#6B89F7',
          //   backgroundColor: '#91A7F9',
          //   transform: 'translateX(-50%)',
          //   borderRadius: '6px',
          //   fontSize: 12,
          //   transition: 'all 0.3s',
          //   boxShadow: '0 2px 4px rgba(0,0,0,0.5)',
          //   '&:not(:focus)': {
          //     top: 0,
          //     opacity: 0,
          //     pointerEvents: 'none',
          //   },
          //   '> kbd': {
          //     color: 'var(--cdg-color-whiteText)',
          //     padding: 'var(--cdg-spacing-1)',
          //     backgroundColor: 'var(--cdg-color-cdgBlue60)',
          //     fontSize: 11,
          //     borderRadius: '6px',
          //     border: '1px solid',
          //     borderColor: 'var(--cdg-color-cdgBlue40)',
          //   },
          // }}
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

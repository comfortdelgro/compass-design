import prism from '@comfortdelgro/markdown/prism'
import {Box, styled} from '@comfortdelgro/react-compass'
import MarkdownElement from 'components/common/MarkdownElement'
import * as React from 'react'
import SimpleCodeEditor from 'react-simple-code-editor'
import {useCodeCopy} from 'utils/CodeCopy'

const StyledMarkdownElement = styled(MarkdownElement, {
  backgroundColor: 'red',
  '& .scrollContainer': {
    maxHeight: 'min(68vh, 1000px)',
    overflow: 'auto',
    backgroundColor: '$cdgBlue120',
    marginTop: -1,
    border: `1px solid $divider`,
    colorScheme: 'dark',
    '&:hover': {
      boxShadow: `0 0 0 3px $gray50`,
    },
    '&:focus-within': {
      boxShadow: `0 0 0 2px $gray60`,
    },
  },
  '& pre': {
    maxWidth: 'initial',
    maxHeight: 'initial',
  },
})

const StyledSimpleCodeEditor = styled(SimpleCodeEditor, {
  fontSize: 12,
  fontWeight: 400,
  WebkitFontSmoothing: 'subpixel-antialiased',
  color: '#f8f8f2',
  direction: 'ltr /*! @noflip */' as any,
  float: 'left',
  minWidth: '100%',
  '& textarea': {
    outline: 0,
  },
  '& > textarea, & > pre': {
    whiteSpace: 'pre !important',
  },
})

interface DemoEditorProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode
  copyButtonProps: {}
  id: string
  language: string
  onChange: (value: any) => void
  value: string
}

export default function DemoEditor(props: DemoEditorProps) {
  const {language, value, onChange, copyButtonProps, children, id, ...other} =
    props
  const wrapperRef = React.useRef<HTMLElement | null>(null)
  const enterRef = React.useRef<HTMLElement | null>(null)
  const handlers = useCodeCopy()

  return (
    <StyledMarkdownElement
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
      <div className='MuiCode-root' {...handlers}>
        <div className='scrollContainer'>
          {/* @ts-ignore */}
          <StyledSimpleCodeEditor
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
          css={{
            position: 'absolute',
            top: '$1',
            padding: '$1',
            outline: 0,
            left: '50%',
            border: '1px solid',
            borderColor: '$6B89F7',
            backgroundColor: '$91A7F9',
            color: '#FFF',
            transform: 'translateX(-50%)',
            borderRadius: '6px',
            fontSize: 13,
            transition: 'all 0.3s',
            boxShadow: '0 2px 4px rgba(0,0,0,0.5)',
            '&:not(:focus)': {
              top: 0,
              opacity: 0,
              pointerEvents: 'none',
            },
            '> kbd': {
              padding: '$1',
              backgroundColor: '$cdgBlue60',
              fontSize: 11,
              borderRadius: '6px',
              border: '1px solid',
              borderColor: '$cdgBlue40',
            },
          }}
          dangerouslySetInnerHTML={{
            __html: 'Press <kbd>Enter</kbd> to start editing',
          }}
        />
        {/* <NoSsr>
          <CodeCopyButton {...copyButtonProps} code={value} />
        </NoSsr> */}
        {children}
      </div>
    </StyledMarkdownElement>
  )
}

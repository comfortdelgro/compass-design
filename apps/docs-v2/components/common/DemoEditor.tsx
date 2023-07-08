import prism from '@comfortdelgro/markdown/prism'
import Box from '@mui/material/Box'
import {styled, useTheme} from '@mui/material/styles'

import MarkdownElement from 'components/common/MarkdownElement'
import {blueDark} from 'docs/src/modules/brandingTheme'
import {useCodeCopy} from 'docs/src/modules/utils/CodeCopy'
import {useTranslate} from 'docs/src/modules/utils/i18n'
import * as React from 'react'
import SimpleCodeEditor from 'react-simple-code-editor'

const StyledMarkdownElement = styled(MarkdownElement)(({theme}) => [
  {
    '& .scrollContainer': {
      maxHeight: 'min(68vh, 1000px)',
      overflow: 'auto',
      backgroundColor: blueDark[800],
      marginTop: -1,
      border: `1px solid ${(theme.vars || theme).palette.divider}`,
      colorScheme: 'dark',
      '&:hover': {
        boxShadow: `0 0 0 3px ${(theme.vars || theme).palette.primary.light}`,
      },
      '&:focus-within': {
        boxShadow: `0 0 0 2px ${(theme.vars || theme).palette.primary.main}`,
      },
      [theme.breakpoints.up('sm')]: {
        borderRadius: '0 0 12px 12px',
      },
    },
    '& pre': {
      // The scroll container needs to be the parent of the editor, overriding:
      // https://github.com/mui/material-ui/blob/269c1d0c7572fcb6ae3b270a2622d16c7e40c848/components/common/MarkdownElement.js#L27-L26
      maxWidth: 'initial',
      maxHeight: 'initial',
    },
  },
  theme.applyDarkStyles({
    '& .scrollContainer': {
      '&:hover': {
        boxShadow: `0 0 0 3px ${
          (theme.vars || theme).palette.primaryDark[300]
        }`,
      },
      '&:focus-within': {
        boxShadow: `0 0 0 2px ${
          (theme.vars || theme).palette.primaryDark[400]
        }`,
      },
    },
  }),
]) as any

const StyledSimpleCodeEditor = styled(SimpleCodeEditor)(({theme}) => ({
  ...theme.typography.body2,
  fontSize: theme.typography.pxToRem(13),
  fontFamily: theme.typography.fontFamilyCode,
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
    // Override inline-style
    whiteSpace: 'pre !important',
  },
}))

interface DemoEditorProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode
  copyButtonProps: {}
  id: string
  language: string
  onChange: () => {}
  value: string
}

export default function DemoEditor(props: DemoEditorProps) {
  const {language, value, onChange, copyButtonProps, children, id, ...other} =
    props
  const t = useTranslate()
  const contextTheme = useTheme()
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
          aria-live='polite'
          tabIndex={0}
          sx={(theme) => ({
            position: 'absolute',
            top: theme.spacing(1),
            padding: theme.spacing(0.2, 1, 0.5, 1),
            outline: 0,
            left: '50%',
            border: '1px solid',
            borderColor: blueDark[600],
            backgroundColor: blueDark[700],
            color: '#FFF',
            transform: 'translateX(-50%)',
            borderRadius: '6px',
            fontSize: theme.typography.pxToRem(13),
            transition: 'all 0.3s',
            boxShadow: '0 2px 4px rgba(0,0,0,0.5)',
            '&:not(:focus)': {
              top: 0,
              opacity: 0,
              pointerEvents: 'none',
            },
            '> kbd': {
              padding: theme.spacing(0.2, 0.4),
              backgroundColor: blueDark[500],
              fontSize: theme.typography.pxToRem(11),
              borderRadius: '6px',
              border: '1px solid',
              borderColor: blueDark[400],
            },
          })}
          dangerouslySetInnerHTML={{
            __html: t('editorHint'),
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

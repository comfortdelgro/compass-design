import {styled} from '@comfortdelgro/react-compass'
import clsx from 'clsx'
import * as React from 'react'

const Root = styled('div', {
  color: '$primaryText',
  '& pre': {
    backgroundColor: '$cdgBlue140',
    color: '#f8f8f2', // fallback color until Prism's theme is loaded
    overflow: 'auto',
    margin: 0,
    WebkitOverflowScrolling: 'touch', // iOS momentum scrolling.
    maxWidth: 'calc(100vw - 32px)',
  },
  '& code': {
    fontFamily: '$mono !important',
    fontWeight: 400,
    WebkitFontSmoothing: 'subpixel-antialiased',
    // Reset for Safari
    // https://github.com/necolas/normalize.css/blob/master/normalize.css#L102
    fontSize: '1em',
  },
})

type MarkdownElementProps = {
  renderedMarkdown: string
} & Omit<JSX.IntrinsicElements['div'], 'ref'>

const MarkdownElement = React.forwardRef<HTMLDivElement, MarkdownElementProps>(
  function MarkdownElement(props, ref) {
    const {className, renderedMarkdown, ...other} = props
    const more: Record<string, unknown> = {}

    if (typeof renderedMarkdown === 'string') {
      // workaround for https://github.com/facebook/react/issues/17170
      // otherwise we could just set `dangerouslySetInnerHTML={undefined}`
      more.dangerouslySetInnerHTML = {__html: renderedMarkdown}
    }

    return (
      <Root
        className={clsx('markdown-body', className)}
        {...more}
        {...other}
        ref={ref}
      />
    )
  },
)

export default MarkdownElement

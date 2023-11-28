import clsx from 'clsx'
import * as React from 'react'
import styles from './styles/MarkdownElement.module.css'

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
      <div
        className={clsx('markdown-body', className, styles.markdownElement)}
        {...more}
        {...other}
        ref={ref}
      />
    )
  },
)

export default MarkdownElement

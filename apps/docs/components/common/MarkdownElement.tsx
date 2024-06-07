import * as React from 'react'

const MarkdownElement = React.forwardRef(function MarkdownElement(
  props: any,
  ref,
) {
  const {className, renderedMarkdown, ...other} = props as any
  const more = {}

  if (
    typeof renderedMarkdown === 'string' &&
    !renderedMarkdown.includes('class="description hidden"')
  ) {
    // @ts-ignore
    more.dangerouslySetInnerHTML = {__html: renderedMarkdown}
  }

  return (
    <div
      className={['markdown-body', className, 'markDownElement'].join(' ')}
      {...more}
      {...other}
      ref={ref}
    />
  )
})

export default MarkdownElement

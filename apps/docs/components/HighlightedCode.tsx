import prism from '@comfortdelgro/markdown/prism'
import MarkdownElement from 'components/MarkdownElement'
import * as React from 'react'

const HighlightedCode = React.forwardRef(function HighlightedCode(
  props: any,
  ref,
) {
  const {code, component: Component = MarkdownElement, ...other} = props
  const renderedCode = React.useMemo(() => {
    return prism(code.trim())
  }, [code])
  return (
    <Component ref={ref} {...other}>
      <div>
        <pre>
          <code
            className={`language-tsx`}
            dangerouslySetInnerHTML={{__html: renderedCode}}
          />
        </pre>
      </div>
    </Component>
  )
})

export default HighlightedCode

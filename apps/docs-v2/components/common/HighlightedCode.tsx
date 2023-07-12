import prism from '@comfortdelgro/markdown/prism'
import NoSsr from '@mui/base/NoSsr'

import CodeCopyButton from 'components/common/CodeCopyButton'
import MarkdownElement from 'components/common/MarkdownElement'
import * as React from 'react'
import {useCodeCopy} from 'utils/CodeCopy'

const HighlightedCode = React.forwardRef(function HighlightedCode(
  props: any,
  ref,
) {
  const {
    copyButtonHidden = false,
    copyButtonProps,
    code,
    language,
    component: Component = MarkdownElement,
    ...other
  } = props
  const renderedCode = React.useMemo(() => {
    return prism(code.trim(), language)
  }, [code, language])
  const handlers = useCodeCopy()

  return (
    <Component ref={ref} {...other}>
      <div {...handlers}>
        <pre>
          <code
            className={`language-${language}`}
            dangerouslySetInnerHTML={{__html: renderedCode}}
          />
        </pre>
        {copyButtonHidden ? null : (
          <NoSsr>
            <CodeCopyButton code={code} {...copyButtonProps} />
          </NoSsr>
        )}
      </div>
    </Component>
  )
})

export default HighlightedCode

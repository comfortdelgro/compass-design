import MarkdownElement from 'components/common/MarkdownElementV2'
import PropTypes from 'prop-types'
import * as React from 'react'

export default function DemosDocs(props) {
  const {
    WrapperComponent: Wrapper,
    wrapperProps,
    rendered = [],
    ...rest
  } = props
  return (
    <React.Fragment key='demos-docs'>
      {rendered.map((renderedMarkdownOrDemo, index) => {
        return (
          <MarkdownElement
            renderedMarkdownOrDemo={renderedMarkdownOrDemo}
            WrapperComponent={Wrapper}
            wrapperProps={{...wrapperProps, key: `demos-docs-${index}`}}
            {...rest}
          />
        )
      })}
    </React.Fragment>
  )
}

DemosDocs.propTypes = {
  rendered: PropTypes.array,
  WrapperComponent: PropTypes.node,
  wrapperProps: PropTypes.object,
}

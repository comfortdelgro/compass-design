import React from 'react'
import generateRandomString from '../generateRandomString'
import objectToCSS, {StyleObject} from './object-to-css'

export interface Props {
  children?: React.ReactNode
  css?: unknown
  childrenRef?: React.Ref<HTMLDivElement>
}

const CssInjection = React.forwardRef<HTMLDivElement, Props>((props) => {
  const {children, css, childrenRef} = props

  // Generate a unique class name for the children
  const [additionalClasses, setAdditionalClasses] = React.useState('')

  React.useEffect(() => {
    const childClassName = generateRandomString('cdg-chip')
    setAdditionalClasses(childClassName)
  }, [childrenRef])

  const modifiedChildren = React.Children.map(children, (child) => {
    if (React.isValidElement(child)) {
      // Cast child to include className property
      const childWithClassName = child as React.DetailedReactHTMLElement<
        React.HTMLAttributes<HTMLElement>,
        HTMLElement
      >
      // Clone the child element and add additional classes
      return React.cloneElement(childWithClassName, {
        className: `${
          childWithClassName.props.className || ''
        } ${additionalClasses}`,
      })
    }
    return child
  })

  // eslint-disable-next-line @typescript-eslint/no-unsafe-call
  React.useInsertionEffect(() => {
    if (additionalClasses === '') return
    if (!css) return
    const cssString = objectToCSS(css as StyleObject, `.${additionalClasses}`)
    const styleElement = document.createElement('style')
    styleElement.textContent = cssString
    document.head.appendChild(styleElement)
    return () => {
      document.head.removeChild(styleElement)
    }
  }, [css, additionalClasses])

  return <>{modifiedChildren}</>
})

export default CssInjection

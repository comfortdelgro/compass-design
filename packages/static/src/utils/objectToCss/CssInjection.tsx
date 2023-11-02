import React from 'react'
import generateRandomString from '../generateRandomString'
import objectToCSS, {StyleObject} from './object-to-css'

export interface Props {
  children?: React.ReactNode
  css?: unknown
  childrenRef?: React.Ref<HTMLElement>
}

const CssInjection = React.forwardRef<HTMLElement, Props>((props) => {
  const {children, css, childrenRef} = props

  // Generate a unique class name for the children
  const [additionalClasses, setAdditionalClasses] = React.useState('')

  React.useEffect(() => {
    const childClassName: string = generateRandomString('cdg')
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

  // should have used useInsertionEffect() but it needs typescript 5 as dependency, not sure if it works for all cdg's projects.
  React.useEffect(() => {
    if (additionalClasses === '') return
    if (!css) return
    const cssString = objectToCSS(css as StyleObject, `.${additionalClasses}`)
    const styleElement = document.createElement('style')
    styleElement.setAttribute('data-cdg', 'css')
    styleElement.textContent = cssString
    document.head.appendChild(styleElement)
    return () => {
      document.head.removeChild(styleElement)
    }
  }, [css, additionalClasses])

  return <>{modifiedChildren}</>
})

export default CssInjection

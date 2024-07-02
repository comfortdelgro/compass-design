import React, {FC} from 'react'
import {CSS, objectToCSS} from '.'
import generateRandomString from '../generateRandomString'

export interface Props {
  children?: React.ReactNode
  css?: CSS
  childrenRef?: React.Ref<HTMLElement>
}

const CssInjection: FC<Props> = (props) => {
  const {children, css, childrenRef} = props

  // Generate a unique class name for the children
  const [additionalClasses, setAdditionalClasses] = React.useState('')

  React.useEffect(() => {
    const childClassName: string = generateRandomString('cdg')
    setAdditionalClasses(childClassName)
  }, [childrenRef])

  const modifiedChildren: React.ReactNode = React.Children.map(
    children,
    (child) => {
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
      return child as React.ReactNode
    },
  )

  // should have used useInsertionEffect() but it needs typescript 5 as dependency, not sure if it works for all cdg's projects.
  React.useEffect(() => {
    if (additionalClasses === '') return
    if (!css) return
    const cssString = objectToCSS(css, [`.${additionalClasses}`])
    const styleElement = document.createElement('style')
    styleElement.setAttribute('data-cdg', 'css')
    styleElement.textContent = cssString
    document.head.appendChild(styleElement)
    return () => {
      document.head.removeChild(styleElement)
    }
  }, [css, additionalClasses])

  return <>{modifiedChildren}</>
}

export default CssInjection
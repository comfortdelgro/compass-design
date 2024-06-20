import DemoErrorBoundary from 'components/Demo/components/DemoErrorBoundary'
import * as React from 'react'
import * as ReactDOM from 'react-dom'
import styles from '../styles/DemoSandbox.module.css'

function DemoIframe(props: any) {
  const {children, name, ...other} = props

  const frameRef = React.useRef(null)

  const [iframeLoaded, onLoad] = React.useReducer(() => true, false)

  React.useEffect(() => {
    // @ts-ignore
    const document = frameRef.current.contentDocument

    if (
      document != null &&
      document.readyState === 'complete' &&
      !iframeLoaded
    ) {
      onLoad()
    }
  }, [iframeLoaded])

  // @ts-ignore
  const document = frameRef.current?.contentDocument
  return (
    <React.Fragment>
      <iframe
        className={styles.demoIframe}
        onLoad={onLoad}
        ref={frameRef}
        title={`${name} demo`}
        {...other}
      />
      {iframeLoaded !== false
        ? ReactDOM.createPortal(<>{children}</>, document.body)
        : null}
    </React.Fragment>
  )
}

function DemoSandbox(props: any) {
  const {
    children: childrenProp,
    iframe = false,
    name,
    onResetDemoClick,
    ...other
  } = props
  const Sandbox = iframe ? DemoIframe : React.Fragment
  const sandboxProps = iframe ? {name, ...other} : {}

  const children = <Sandbox {...sandboxProps}>{childrenProp}</Sandbox>

  return (
    // @ts-ignore
    <DemoErrorBoundary name={name} onResetDemoClick={onResetDemoClick}>
      {children}
    </DemoErrorBoundary>
  )
}

export default React.memo(DemoSandbox)

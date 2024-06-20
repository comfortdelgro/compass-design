import {Button, Typography} from '@comfortdelgro/react-compass'
import * as React from 'react'
import * as ReactDOM from 'react-dom'

class ErrorBoundary extends React.Component {
  state = {
    error: null,
  }

  static getDerivedStateFromError(error: any) {
    return {error}
  }

  render() {
    const {children, onResetDemoClick} = this.props as any
    const {error} = this.state

    if (error) {
      /* eslint-disable material-ui/no-hardcoded-labels */
      return (
        <div>
          <Typography.Label color='error'>
            This demo had a runtime error!
          </Typography.Label>
          <Typography.Label>
            We would appreciate it if you directly in our issue tracker. You
            will be provided with a prefilled description that includes valuable
            information about this error.
          </Typography.Label>
          <pre style={{whiteSpace: 'pre-wrap'}}>{error}</pre>
          <Button color='secondary' onClick={onResetDemoClick}>
            Reset demo
          </Button>
        </div>
      )
    }

    return children
  }
}

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
        style={{
          backgroundColor: '#000',
          flexGrow: 1,
          height: '400',
          border: '0',
        }}
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

function Sandbox(props: any) {
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
    <ErrorBoundary name={name} onResetDemoClick={onResetDemoClick}>
      {children}
    </ErrorBoundary>
  )
}

export default React.memo(Sandbox)

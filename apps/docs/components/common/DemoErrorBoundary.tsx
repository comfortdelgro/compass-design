import {Button, Typography} from '@comfortdelgro/react-compass-old'
import * as React from 'react'

export default class DemoErrorBoundary extends React.Component {
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

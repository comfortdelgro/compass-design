import * as React from 'react'
import ViewerCore from './ViewerCore'
import {IViewerProps} from './types'

export default (props: IViewerProps) => {
  const [init, setInit] = React.useState(false)

  React.useEffect(() => {
    if (props.visible && !init) {
      setInit(true)
    }
  }, [props.visible, init])

  if (!init) {
    return null
  }
  return <ViewerCore {...props} />
}

import * as React from 'react'
import {IViewerProps} from './types'
import ViewerCore from './ViewerCore'

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

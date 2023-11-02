import {useEffect, useState} from 'react'
import {ImageViewerProps} from './types'
import ViewerCore from './ViewerCore'

const Viewer = (props: ImageViewerProps) => {
  const [init, setInit] = useState(false)

  useEffect(() => {
    if (props.visible && !init) {
      setInit(true)
    }
  }, [props.visible, init])

  if (!init) {
    return null
  }
  return <ViewerCore {...props} />
}

export default Viewer

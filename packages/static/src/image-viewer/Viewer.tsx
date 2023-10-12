import {useEffect, useState} from 'react'
import ViewerCore from './ViewerCore'
import {ImageViewerProps} from './types'

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

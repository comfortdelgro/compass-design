import React from 'react'
import {Column} from '../utils/components'
import Progress from './index'

export const Circular: React.FC = () => {
  const [progress, setProgress] = React.useState(0)

  React.useEffect(() => {
    const timer = setInterval(() => {
      setProgress((prevProgress) =>
        prevProgress >= 100 ? 0 : prevProgress + 10,
      )
    }, 800)

    return () => {
      clearInterval(timer)
    }
  }, [])

  return (
    <Column>
      <h3>Indeterminate</h3>
      <Progress.Circular variant='indeterminate' />
      <h3>Determinate</h3>
      <Progress.Circular variant='determinate' value={progress} />
      <h3>Colorful</h3>
      <Progress.Circular variant='indeterminate' color='red' />
      <h3>Size</h3>
      <Progress.Circular variant='indeterminate' size={70} />
    </Column>
  )
}

export const Linear: React.FC = () => {
  const [progress, setProgress] = React.useState(0)
  const [buffer, setBuffer] = React.useState(10)

  const progressRef = React.useRef(() => {
    //
  })
  React.useEffect(() => {
    progressRef.current = () => {
      if (progress > 100) {
        setProgress(0)
        setBuffer(10)
      } else {
        const diff = Math.random() * 10
        const diff2 = Math.random() * 10
        setProgress(progress + diff)
        setBuffer(progress + diff + diff2)
      }
    }
  })

  React.useEffect(() => {
    const timer = setInterval(() => {
      progressRef.current()
    }, 500)

    return () => {
      clearInterval(timer)
    }
  }, [])
  return (
    <Column>
      <h3>Indeterminate</h3>
      <Progress.Linear variant='indeterminate' />
      <h3>Determinate</h3>
      <Progress.Linear variant='determinate' value={progress} />
      <h3>Buffer</h3>
      <Progress.Linear variant='buffer' value={progress} valueBuffer={buffer} />
      <h3>Colorful</h3>
      <Progress.Linear variant='indeterminate' color='red' />
      <h3>Size</h3>
      <Progress.Linear variant='indeterminate' size={10} />
      <h3>Rounded</h3>
      <Progress.Linear variant='indeterminate' size={10} rounded />
    </Column>
  )
}

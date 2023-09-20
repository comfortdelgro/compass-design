'use client'
import Progress from '@comfortdelgro/react-compass/progress'
import React from 'react'

function CircularDeterminate() {
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
    <div
      style={{display: 'flex', justifyContent: 'center', alignItems: 'center'}}
    >
      <Progress.Circular variant='determinate' value={progress} />
    </div>
  )
}

export default CircularDeterminate

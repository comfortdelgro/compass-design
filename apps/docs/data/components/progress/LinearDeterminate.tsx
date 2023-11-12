'use client'
import Progress from '@comfortdelgro/react-compass-old/progress'
// import {Progress as StaticProgress} from '@comfortdelgro/static'
import React from 'react'

function LinearDeterminate() {
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
    <div>
      <Progress.Linear variant='determinate' value={progress} />
      {/* <StaticProgress.Linear variant='determinate' value={progress} /> */}
    </div>
  )
}

export default LinearDeterminate

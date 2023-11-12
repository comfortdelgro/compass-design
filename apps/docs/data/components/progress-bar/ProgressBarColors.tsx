import {
  Button,
  Column,
  Divider,
  ProgressBar,
  Row,
  Typography,
} from '@comfortdelgro/react-compass-old'
import {useEffect, useState} from 'react'

const INIT_VALUE = 5
const MAX_VALUE = 100

export default function ProgressBarColorDocs() {
  const [startProcess, setStartProcess] = useState(false)
  const [progressValue, setProgressValue] = useState(INIT_VALUE)
  const [isCompleted, setIsCompleted] = useState(false)

  const handleReset = () => {
    setStartProcess(false)
    setProgressValue(INIT_VALUE)
    setIsCompleted(false)
  }

  useEffect(() => {
    if (!startProcess) {
      return
    }

    const timer = setInterval(() => {
      setProgressValue((currValue) => {
        if (currValue === MAX_VALUE) {
          clearInterval(timer)
          return MAX_VALUE
        }

        return Math.min(
          currValue + Math.floor(Math.random() * (MAX_VALUE / 4)),
          MAX_VALUE,
        )
      })
    }, 200)

    return () => {
      clearInterval(timer)
    }
  }, [startProcess])

  return (
    <Column css={{gap: '$4'}}>
      <ProgressBar value={20} color='blue' label='blue' />
      <ProgressBar value={40} color='green' label='green' />
      <ProgressBar
        value={20}
        label='color: $dangerShades | barColor: $FECACA'
        color='$dangerShades'
        barColor='#fecaca'
      />
      <ProgressBar
        value={60}
        label='color: $cdgBlue | barColor: $blueShades10'
        color='$cdgBlue'
        barColor='$blueShades10'
      />

      <Divider css={{marginBlock: '$8'}} />

      <ProgressBar
        value={progressValue}
        maxValue={MAX_VALUE}
        size='md'
        label='H5'
        rightLabel='color: $blueShades80 | barColor: $blueShades10 | size: md'
        color='$blueShades80'
        barColor='$blueShades10'
        onComplete={() => setIsCompleted(true)}
      />

      <Row css={{alignItems: 'unset', height: '$8'}}>
        {isCompleted ? (
          <>
            <Typography.Label>Completed</Typography.Label>
            <Button type='button' onClick={() => handleReset()}>
              Reset
            </Button>
          </>
        ) : (
          <Typography.Label>
            {Math.round((progressValue / MAX_VALUE) * 100)}%
          </Typography.Label>
        )}

        {isCompleted || startProcess || (
          <Button
            type='button'
            variant='secondary'
            onClick={() => setStartProcess(true)}
          >
            Start
          </Button>
        )}
      </Row>
    </Column>
  )
}

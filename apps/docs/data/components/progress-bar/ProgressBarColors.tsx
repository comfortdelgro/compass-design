import {
  Button,
  Column,
  Divider,
  ProgressBar,
  Row,
  Typography,
} from '@comfortdelgro/react-compass'
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
    <Column css={{gap: 'var(--cdg-spacing-4)'}}>
      <ProgressBar value={20} color='blue' label='blue' />
      <ProgressBar value={40} color='green' label='green' />
      <ProgressBar
        value={20}
        label='color: var(--cdg-color-dangerShades) | barColor: $FECACA'
        color='var(--cdg-color-dangerShades)'
        barColor='#fecaca'
      />
      <ProgressBar
        value={60}
        label='color: var(--cdg-color-cdgBlue) | barColor: var(--cdg-color-blueShades10)'
        color='var(--cdg-color-cdgBlue)'
        barColor='var(--cdg-color-blueShades10)'
      />

      <Divider css={{marginBlock: 'var(--cdg-spacing-8)'}} />

      <ProgressBar
        value={progressValue}
        maxValue={MAX_VALUE}
        size='md'
        label='H5'
        rightLabel='color: var(--cdg-color-blueShades80) | barColor: var(--cdg-color-blueShades10) | size: md'
        color='var(--cdg-color-blueShades80)'
        barColor='var(--cdg-color-blueShades10)'
        onComplete={() => setIsCompleted(true)}
      />

      <Row css={{alignItems: 'unset', height: 'var(--cdg-spacing-8)'}}>
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

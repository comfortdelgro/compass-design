import React, {useEffect, useState} from 'react'
import Button from '../button'
import Divider from '../divider'
import Typography from '../typography'
import {Column, Row} from '../utils/components'
import ProgressBar from './index'

export const Size: React.FC = () => (
  <Column>
    <div style={{width: '100%', marginBottom: '10px'}}>
      <ProgressBar value={20} size='sm' label='sm' />
    </div>
    <div style={{width: '100%', marginBottom: '10px'}}>
      <ProgressBar value={20} size='md' label='md' />
    </div>
    <div style={{width: '100%', marginBottom: '10px'}}>
      <ProgressBar value={20} size='lg' label='lg' />
    </div>
    <div style={{width: '100%', marginBottom: '10px'}}>
      <ProgressBar value={20} size='xl' label='xl' />
    </div>
  </Column>
)

export const Color: React.FC = () => (
  <Column>
    <div style={{width: '100%', marginBottom: '10px'}}>
      <ProgressBar value={20} color='blue' label='blue' />
    </div>
    <div style={{width: '100%', marginBottom: '10px'}}>
      <ProgressBar value={40} color='green' label='green' />
    </div>

    <ProgressBar
      value={60}
      label='color: $cdgBlue | barColor: $blueShades10'
      color='$cdgBlue'
      barColor='$blueShades10'
    />
  </Column>
)

const INIT_VALUE = 5
const MAX_VALUE = 100

export const Variant = () => {
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
    <Column>
      <ProgressBar value={20} variant='normal' label='normal' />
      <ProgressBar
        css={{marginBlock: '$4'}}
        value={20}
        variant='rounded'
        label='rounded'
      />

      <Divider />

      <ProgressBar
        css={{marginBlock: '$4'}}
        value={progressValue}
        maxValue={MAX_VALUE}
        size='md'
        label='H5'
        color='$blueShades80'
        barColor='$blueShades10'
        onComplete={() => setIsCompleted(true)}
      />

      <Row>
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

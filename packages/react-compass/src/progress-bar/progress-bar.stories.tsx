import React, {useEffect, useState} from 'react'
import Button from '../button'

import {Meta} from '@storybook/react'
import ProgressBar from './index'

const style: {
  display: string
  flexDirection: 'column' | 'row'
  alignItems: string
  justifyContent: string
  height: string
  width: string
  padding: string
} = {
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
  height: '100%',
  width: '50%',
  padding: '3rem',
}

export const Size: React.FC = () => (
  <div style={{...style}}>
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
  </div>
)

export const Color: React.FC = () => (
  <div style={{...style}}>
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
  </div>
)

const INIT_VALUE = 5
const MAX_VALUE = 100

export const Variants = () => {
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
    <div style={{...style}}>
      <ProgressBar value={20} variant='normal' label='normal' />
      <ProgressBar
        css={{marginBlock: '$4'}}
        value={20}
        variant='rounded'
        label='rounded'
      />

      <br></br>

      <ProgressBar
        css={{marginBlock: '$4'}}
        value={progressValue}
        maxValue={MAX_VALUE}
        size='md'
        label='H5'
        color='#3468BF'
        barColor='#E6ECF7'
        onComplete={() => setIsCompleted(true)}
      />

      <div style={{flexDirection: 'row', ...style}}>
        {isCompleted ? (
          <>
            <h3>Completed</h3>
            <Button type='button' onClick={() => handleReset()}>
              Reset
            </Button>
          </>
        ) : (
          <h3>{Math.round((progressValue / MAX_VALUE) * 100)}%</h3>
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
      </div>
    </div>
  )
}

export const LoadingState = () => (
  <div style={{...style}}>
    <ProgressBar variant='rounded' label='Loading' loading />
    <ProgressBar
      variant='rounded'
      label='Stripes'
      barColor='$blueShades10'
      loading='stripes'
    />
  </div>
)

const meta = {
  title: 'Example/Progress Bar',
  component: Variants,
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/react/writing-docs/autodocs
  tags: ['autodocs'],
  parameters: {
    // More on how to position stories at: https://storybook.js.org/docs/react/configure/story-layout
    layout: 'fullscreen',
  },
} satisfies Meta<typeof Variants>

export default meta

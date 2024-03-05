import {faBug} from '@fortawesome/free-solid-svg-icons'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {AnimatePresence, motion} from 'framer-motion'
import React, {useState} from 'react'

import {Meta} from '@storybook/react'
import Alert from './index'

const AlertContent: React.FC = () => (
  <>
    A simple alert text. We can have a <a href='#'>link</a>.
  </>
)
export const Basic: React.FC = () => (
  <div>
    <h3>Basic Alert</h3>
    <Alert>
      <AlertContent />
    </Alert>
  </div>
)

export const Dismissible: React.FC = () => {
  const [alerts, setAlerts] = useState([
    {color: 'info' as const, key: 'info'},
    {color: 'success' as const, key: 'success'},
    {color: 'danger' as const, key: 'danger'},
  ])
  const MotionAlert = motion(Alert)

  const removeAlert = (key: string) =>
    setAlerts((alerts) => alerts.filter((alert) => alert.key !== key))

  return (
    <div>
      <h3>Dimissible Alert</h3>
      <AnimatePresence mode='popLayout'>
        {alerts.map((alert) => (
          <MotionAlert
            key={alert.key}
            color={alert.color}
            dismissible
            onDismiss={() => removeAlert(alert.key)}
            // motion
            layout
            animate={{x: 0, opacity: 1}}
            exit={{x: -20, opacity: 0}}
            transition={{duration: 0.2}}
          >
            <AlertContent />
          </MotionAlert>
        ))}
      </AnimatePresence>
    </div>
  )
}

export const Indismissible: React.FC = () => (
  <div>
    <h3>1. Colors</h3>
    <Alert color='info'>
      <AlertContent />
    </Alert>

    <Alert color='success'>
      <AlertContent />
    </Alert>

    <Alert color='danger'>
      <AlertContent />
    </Alert>

    <Alert color='warning'>
      <AlertContent />
    </Alert>

    <h3>2. Without Icons</h3>

    <Alert icon={false}>
      <AlertContent />
    </Alert>

    <h3>3. Custom Icons</h3>

    <Alert color='success' icon={<FontAwesomeIcon icon={faBug} />}>
      <AlertContent />
    </Alert>
  </div>
)

const meta = {
  title: 'Example/Alert',
  component: Basic,
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/react/writing-docs/autodocs
  tags: ['autodocs'],
  parameters: {
    // More on how to position stories at: https://storybook.js.org/docs/react/configure/story-layout
    layout: 'fullscreen',
  },
} satisfies Meta<typeof Basic>

export default meta

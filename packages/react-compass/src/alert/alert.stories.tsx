import {faBug} from '@fortawesome/free-solid-svg-icons'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {AnimatePresence, motion} from 'framer-motion'
import React, {useState} from 'react'
import Link from '../link/link' // import the component directly
import {Column} from '../utils/components'
import Alert from './index'

const AlertContent: React.FC = () => (
  <>
    A simple alert text. We can have a <Link href='#'>link</Link>.
  </>
)
export const Basic: React.FC = () => (
  <Column>
    <h3>Basic Alert</h3>
    <Alert>
      <AlertContent />
    </Alert>
  </Column>
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
    <Column>
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
    </Column>
  )
}

export const Indismissible: React.FC = () => (
  <Column>
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
  </Column>
)

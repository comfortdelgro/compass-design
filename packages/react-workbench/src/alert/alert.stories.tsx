import {faChessKing} from '@fortawesome/free-solid-svg-icons'
import {AnimatePresence, motion} from 'framer-motion'
import {useState} from 'react'
import Link from '../link/link' // import the component directly
import {Column} from '../utils/components'
import Alert from './alert'

const AlertContent: React.FC = () => (
  <>
    A simple alert text. We can have a <Link href='#'>link</Link>.
  </>
)

export const Variants: React.FC = () => (
  <Column>
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

    <h3>Without Icons</h3>

    <Alert color='info'>
      <AlertContent />
      <br />
      <AlertContent />
    </Alert>

    <h3>With Custom Icons</h3>

    <Alert color='success' icon={faChessKing}>
      <AlertContent />
    </Alert>
  </Column>
)

const MotionAlert = motion(Alert)

export const Dismissible: React.FC = () => {
  const [alerts, setAlerts] = useState([
    {color: 'info' as const, key: 'info'},
    {color: 'success' as const, key: 'success'},
    {color: 'danger' as const, key: 'danger'},
  ])

  const removeAlert = (key: string) =>
    setAlerts((alerts) => alerts.filter((alert) => alert.key !== key))

  return (
    <Column>
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

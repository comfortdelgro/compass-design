import React from 'react'
import styles from './styles/preflight.module.css'

type PreflightComponent = React.FC & {flush: () => React.ReactNode}

const Preflight: PreflightComponent = () => {
  return <React.Fragment></React.Fragment>
}

Preflight.flush = () => (
  <style
    id='cdg-preflight'
    dangerouslySetInnerHTML={{__html: styles.toString()}}
  />
)

export default Preflight

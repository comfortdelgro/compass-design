import React from 'react'

interface Props {
  title?: string
}

export type WizardItemProps = Props

const WizardItem: React.FC<WizardItemProps> = (props) => {
  return <>{props.children}</>
}

export default WizardItem

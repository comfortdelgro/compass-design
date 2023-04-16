import React from 'react'
import {Column} from '../utils/components'
import Wizard from './wizard'

export const Variants: React.FC = () => (
  <Column>
    <Wizard items={['Value1', 'Value2', 'Value3', 'Value4']} currentStep={2} />
  </Column>
)

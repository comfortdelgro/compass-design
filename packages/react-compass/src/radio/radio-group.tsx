import {AriaRadioGroupProps, useRadioGroup} from '@react-aria/radio'
import {useRadioGroupState} from '@react-stately/radio'
import React from 'react'
import {StyledComponentProps} from '../utils/stitches.types'
import {useDOMRef} from '../utils/use-dom-ref'
import {RadioGroupVariantProps, StyledRadioGroup} from './radio-group.styles'

export const RadioContext = React.createContext<RadioGroupProps | null>(null)

interface Props extends AriaRadioGroupProps, StyledComponentProps {
  children?: React.ReactNode
}

export type RadioGroupProps = Props & RadioGroupVariantProps

const RadioGroup = React.forwardRef<HTMLDivElement, RadioGroupProps>(
  (props, ref) => {
    const {children, orientation = 'vertical'} = props
    const state = useRadioGroupState(props)
    const {radioGroupProps} = useRadioGroup(props, state)
    const groupRef = useDOMRef<HTMLDivElement>(ref)

    return (
      <StyledRadioGroup
        ref={groupRef}
        orientation={orientation}
        {...radioGroupProps}
      >
        <RadioContext.Provider value={state}>{children}</RadioContext.Provider>
      </StyledRadioGroup>
    )
  },
)

export default RadioGroup

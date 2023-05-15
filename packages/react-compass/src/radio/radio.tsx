import {AriaRadioProps, useRadio} from '@react-aria/radio'
import {RadioGroupState} from '@react-stately/radio'
import React, {useContext} from 'react'
import type {StyledComponentProps} from '../utils/stitches.types'
import RadioGroup, {RadioContext} from './radio-group'
import {RadioVariantProps, StyledRadio, StyledRadioInput} from './radio.styles'
import Tooltip from './tooltip'

interface Props extends AriaRadioProps, StyledComponentProps {
  className?: string
  label: string
  description?: string
  rightLabel?: string
  tooltip?: string
  variant?: 'simple' | 'outlined'
}

export type RadioProps = Props & RadioVariantProps

const Radio: React.FC<RadioProps> = (props) => {
  const {
    label,
    description,
    tooltip,
    rightLabel,
    isDisabled = false,
    variant = 'simple',
    css = {},
  } = props
  const context = useContext(RadioContext)
  const state = context as RadioGroupState
  const ref = React.useRef<HTMLInputElement | null>(null)
  const {inputProps} = useRadio(props, state, ref)
  const onClick = () => {
    if (ref.current) ref.current.click()
  }
  return (
    <StyledRadio
      disabled={isDisabled}
      variant={variant}
      onClick={onClick}
      css={css}
    >
      <input style={{display: 'none'}} {...inputProps} ref={ref} />
      <div className='radio-wrapper'>
        <StyledRadioInput
          active={!!inputProps?.checked}
          disabled={isDisabled}
        />
      </div>
      <div className='radio-content-wrapper'>
        <div className='radio-label'>
          {label} {!!tooltip && <Tooltip text={tooltip} />}
        </div>
        <p className='radio-description'>{description}</p>
      </div>
      <p className='radio-right-label'>{rightLabel}</p>
    </StyledRadio>
  )
}

export default Radio as typeof Radio & {Group: typeof RadioGroup}

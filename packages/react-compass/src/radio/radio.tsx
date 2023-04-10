import {CSSProperties} from '@stitches/react'
import React from 'react'
import {StyledRadio, StyledRadioInput} from './radio.styles'
import Tooltip from './tooltip'

type RadioProps = {
  title: string
  description: string
  rightLabel: string
  tooltip: string
  value: string
  isDisabled?: boolean
  css?: CSSProperties
  checked?: boolean
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void
}

export const Radio: React.FC<RadioProps> = ({
  title,
  description,
  rightLabel,
  tooltip,
  value,
  isDisabled = false,
  css,
  checked,
  onChange,
}) => {
  return (
    <StyledRadio style={css}>
      <div className='radio-wrapper'>
        <StyledRadioInput
          type='radio'
          value={value}
          checked={checked}
          onChange={onChange}
          disabled={isDisabled}
        />
      </div>
      <div className='radio-content-wrapper'>
        <div className='radio-label'>
          {title} {!!tooltip && <Tooltip text={tooltip} />}
        </div>
        <p className='radio-description'>{description}</p>
      </div>
      <p className='radio-right-label'>{rightLabel}</p>
    </StyledRadio>
  )
}
export default Radio

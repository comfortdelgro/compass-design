import React, {useEffect, useState} from 'react'
import type {StyledComponentProps} from '../utils/stitches.types'
import RadioGroup, {RadioContext} from './radio-group'
import {RadioVariantProps, StyledRadio, StyledRadioInput} from './radio.styles'
import Tooltip from './tooltip'

interface Props extends StyledComponentProps {
  className?: string
  label: string
  description?: string
  rightLabel?: string
  tooltip?: string
  variant?: 'simple' | 'outlined'
  isDisabled?: boolean
  value: string
  id?: string
}

export type RadioProps = Props & RadioVariantProps

const Radio: React.FC<RadioProps> = (props) => {
  const {
    value,
    label,
    description,
    tooltip,
    rightLabel,
    isDisabled = false,
    variant = 'simple',
    css = {},
    ...delegated
  } = props
  // eslint-disable-next-line @typescript-eslint/no-unsafe-argument
  const context = React.useContext(RadioContext)
  // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
  const state = context
  const [isChecked, setIsChecked] = useState(state.selectedValue === value)

  useEffect(() => {
    setIsChecked(state.selectedValue === value)
  }, [state.selectedValue, value])

  const ref = React.useRef<HTMLInputElement | null>(null)
  const onClick = () => {
    if (!isDisabled) {
      if (ref.current) ref.current.click()
      setIsChecked(true)
      state.setSelectedValue(value)
    }
  }
  return (
    <StyledRadio
      disabled={isDisabled}
      variant={variant}
      onClick={onClick}
      css={css}
      {...delegated}
    >
      <input style={{display: 'none'}} ref={ref} />
      <div className='radio-wrapper'>
        <StyledRadioInput active={!!isChecked} disabled={isDisabled} />
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

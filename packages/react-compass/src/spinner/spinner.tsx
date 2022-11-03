import React from 'react'
import {StyledComponentProps} from '../utils/stitches.types'
import {useDOMRef} from '../utils/use-dom-ref'
import {SpinnerVariantProps, StyledSpinner} from './spinner.styles'

interface Props extends StyledComponentProps {
  label?: boolean | string
}

export type SpinnerProps = Props & SpinnerVariantProps

const Spinner = React.forwardRef<HTMLDivElement, SpinnerProps>((props, ref) => {
  const {
    // StyledComponentProps
    css = {},
    // ComponentProps
    label = true,
    // VariantProps
    size = 'md',
  } = props

  const variantProps = {size} as SpinnerVariantProps
  const spinnerRef = useDOMRef<HTMLDivElement>(ref)
  const labelText =
    typeof label === 'boolean' ? (label ? 'Loading...' : null) : label

  return (
    <StyledSpinner css={css} ref={spinnerRef} {...variantProps}>
      <div className='ring'>
        <div className='bg' />
        <div className='segment' />
        <div className='segment' />
        <div className='segment' />
      </div>
      {labelText ? <div className='label'>{labelText}</div> : null}
    </StyledSpinner>
  )
})

export default Spinner

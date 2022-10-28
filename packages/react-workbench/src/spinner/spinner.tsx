import type {CSS} from '@stitches/react'
import React, {useRef} from 'react'
import {SpinnerVariantProps, StyledSpinner} from './spinner.styles'

interface Props extends SpinnerVariantProps {
  css?: CSS
  label?: boolean | string
}

export type SpinnerProps = Props &
  Omit<React.ComponentPropsWithoutRef<'div'>, keyof Props>

const Spinner: React.FC<SpinnerProps> = ({
  css = {},
  label = true,
  ...delegated
}) => {
  const variantProps = {} as SpinnerVariantProps
  const ref = useRef<HTMLDivElement>(null)

  const labelText =
    typeof label === 'boolean' ? (label ? 'Loading...' : null) : label

  return (
    <StyledSpinner ref={ref} css={css} {...delegated} {...variantProps}>
      <div className='path' />
      {labelText ? <div className='label'>{labelText}</div> : null}
    </StyledSpinner>
  )
}

export default Spinner

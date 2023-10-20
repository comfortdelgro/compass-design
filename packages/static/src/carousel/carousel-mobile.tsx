import React from 'react'
import CssInjection from '../utils/objectToCss/CssInjection'
import {useDOMRef} from '../utils/use-dom-ref'

export interface Props {
  data?: any
  css?: unknown
  active: boolean
}

const CarouselMobile = React.forwardRef<HTMLDivElement, Props>((props, ref) => {
  const {
    // StyledComponentProps
    css = {},
    children,
    active,
    ...htmlProps
  } = props

  const buttonRef = useDOMRef<HTMLDivElement>(ref)

  return (
    <CssInjection css={css} childrenRef={buttonRef}>
      <div className='slider-slide' {...htmlProps}>
        {children}
      </div>
    </CssInjection>
  )
})

export default CarouselMobile

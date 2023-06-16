import React from 'react'
import {StyledComponentProps} from '../utils/stitches.types'
import {useDOMRef} from '../utils/use-dom-ref'
import {AvatarAddVariantProps, StyledAvatarAdd} from './avatar-add.styles'

interface Props extends StyledComponentProps {
  size?: 'lg' | 'md' | 'sm' | 'xs'
  isDisabled?: boolean
}

export type AvatarAddProps = Props &
  AvatarAddVariantProps &
  Omit<React.HTMLAttributes<HTMLButtonElement>, keyof Props>

const AvatarAdd = React.forwardRef<HTMLButtonElement, AvatarAddProps>(
  (props, ref) => {
    const {
      // StyledComponentProps
      css = {},
      size = 'md',
      isDisabled = false,
      ...delegated
    } = props

    const domRef = useDOMRef<HTMLButtonElement>(ref)

    return (
      <StyledAvatarAdd
        css={css}
        size={size}
        ref={domRef}
        disabled={isDisabled}
        {...delegated}
      >
        <svg width='16' height='16' viewBox='0 0 16 16'>
          <path
            d='M9.07692 2.07692C9.07692 1.48125 8.59567 1 8 1C7.40433 1 6.92308 1.48125 6.92308 2.07692V6.92308H2.07692C1.48125 6.92308 1 7.40433 1 8C1 8.59567 1.48125 9.07692 2.07692 9.07692H6.92308V13.9231C6.92308 14.5188 7.40433 15 8 15C8.59567 15 9.07692 14.5188 9.07692 13.9231V9.07692H13.9231C14.5188 9.07692 15 8.59567 15 8C15 7.40433 14.5188 6.92308 13.9231 6.92308H9.07692V2.07692Z'
            fill='#424D57'
          />
        </svg>
      </StyledAvatarAdd>
    )
  },
)

export default AvatarAdd

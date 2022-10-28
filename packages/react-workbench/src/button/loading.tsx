import type {CSS} from '@stitches/react'
import React from 'react'
import {LoadingVariantProps, StyledLoading} from './loading.styles'

interface Props extends LoadingVariantProps {
  css?: CSS
}

export type LoadingProps = Props &
  Omit<React.ComponentPropsWithoutRef<'span'>, keyof Props>

const Loading: React.FC<LoadingProps> = ({css = {}, ...delegated}) => (
  <StyledLoading css={css} {...delegated}>
    <i className='dot-1' />
    <i className='dot-2' />
    <i className='dot-3' />
  </StyledLoading>
)

export default Loading

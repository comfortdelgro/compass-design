import React from 'react'
import CssInjection from '../utils/objectToCss/CssInjection'
import {useDOMRef} from '../utils/use-dom-ref'
import styles from './styles/skeleton.module.css'

interface Props {
  css?: unknown
  color?: string
  width?: string | number
  height?: string | number
  children?: React.ReactNode
  component?: keyof JSX.IntrinsicElements
  animation?: 'pulse' | 'wave' | false
  variant?: 'circular' | 'rectangular' | 'rounded' | 'text'
}

export type SkeletonProps = Props &
  Omit<React.HTMLAttributes<HTMLElement>, keyof Props>

const Skeleton = React.forwardRef<HTMLElement, SkeletonProps>((props, ref) => {
  const {
    width,
    height,
    children,
    className,
    css = {},
    variant = 'text',
    component = 'span',
    animation = 'pulse',
    color = '#0000001c',
    ...delegated
  } = props

  const skeletonRef = useDOMRef<HTMLElement>(ref)

  const skeletonClass = React.useMemo(() => {
    return [
      styles.skeleton,
      variant === 'text' && styles.skeletonVariantText,
      variant === 'circular' && styles.skeletonVariantCircular,
      variant === 'rounded' && styles.skeletonVariantRounded,
      animation === 'pulse' && styles.skeletonAnimationPulse,
      animation === 'wave' && styles.skeletonAnimationWave,
      !!children && styles.skeletonHasChildren,
      !!children && !width && styles.skeletonHasChildrenNotHasWidth,
      'cdg-skeleton',
      className,
    ]
      .filter(Boolean)
      .join(' ')
  }, [className])

  return (
    <CssInjection css={css} childrenRef={skeletonRef}>
      {React.createElement(
        component,
        {
          ...delegated,
          className: skeletonClass,
          style: {'--skeleton-color': color, width, height},
          ref: skeletonRef,
        },
        children,
      )}
    </CssInjection>
  )
})

export default Skeleton

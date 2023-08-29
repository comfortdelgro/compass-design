'use client'

import React, {
  forwardRef,
  HTMLAttributes,
  ReactNode,
  useEffect,
  useMemo,
} from 'react'
import useDrag from '../utils/hooks/useDrag'
import {StyledComponentProps} from '../utils/stitches.types'
import {useDOMRef} from '../utils/use-dom-ref'
import {
  StyledSlideAction,
  StyledSlideDragger,
  StyledSlideLabel,
} from './slide-action.styles'

export type SlideActionProps = {
  icon?: ReactNode
  label?: string
  color?: string
  onChange?: () => void
} & HTMLAttributes<HTMLDivElement> &
  StyledComponentProps

const SlideAction = forwardRef<HTMLDivElement, SlideActionProps>(
  (
    {
      css = {},
      className = '',
      icon,
      label = 'Slide',
      color = '#E31617',
      onChange,
      children,
    },
    ref,
  ) => {
    const SlideRef = useDOMRef<HTMLDivElement>(ref)
    const slideWidth = useMemo(() => {
      if (typeof window === 'undefined' || !SlideRef.current) {
        return undefined
      }

      const computedStyle = window.getComputedStyle(SlideRef.current)
      const elementPadding =
        parseFloat(computedStyle.paddingLeft) +
        parseFloat(computedStyle.paddingRight)

      console.log(elementPadding)
      return 0
    }, [])

    const {
      target: slideDragRef,
      position: {x},
      setPosition,
    } = useDrag<HTMLButtonElement>({
      direction: 'horizontal',
      // maxDistance: {x: {min: 0, max: SlideRef.current?.offsetWidth}},
    })

    useEffect(() => {
      console.log(slideWidth)
    }, [slideWidth])

    return (
      <StyledSlideAction
        ref={SlideRef}
        className={`${className} slide-action`}
        css={{...css, borderColor: color}}
      >
        <StyledSlideDragger
          ref={slideDragRef}
          css={{backgroundColor: color}}
          className='slide-action__button'
        >
          {icon || (
            <svg
              width='14'
              height='15'
              viewBox='0 0 14 15'
              fill='none'
              xmlns='http://www.w3.org/2000/svg'
            >
              <g id='Frame 105'>
                <g id='Vector'>
                  <path
                    d='M0.886667 14.998C0.66 14.998 0.433333 14.9106 0.26 14.74C-0.0866667 14.3988 -0.0866667 13.8432 0.26 13.502L5.85111 7.99914L0.26 2.49188C-0.0866667 2.15068 -0.0866667 1.59514 0.26 1.25394C0.606667 0.912748 1.17111 0.912748 1.51778 1.25394L7.74 7.37799C8.08667 7.71918 8.08667 8.27472 7.74 8.61592L1.51778 14.74C1.34 14.9106 1.11333 14.998 0.886667 14.998Z'
                    fill='white'
                  />
                  <path
                    d='M0.886667 14.998C0.66 14.998 0.433333 14.9106 0.26 14.74C-0.0866667 14.3988 -0.0866667 13.8432 0.26 13.502L5.85111 7.99914L0.26 2.49188C-0.0866667 2.15068 -0.0866667 1.59514 0.26 1.25394C0.606667 0.912748 1.17111 0.912748 1.51778 1.25394L7.74 7.37799C8.08667 7.71918 8.08667 8.27472 7.74 8.61592L1.51778 14.74C1.34 14.9106 1.11333 14.998 0.886667 14.998Z'
                    stroke='white'
                  />
                </g>
                <g id='Vector_2'>
                  <path
                    d='M6.88667 14.998C6.66 14.998 6.43333 14.9106 6.26 14.74C5.91333 14.3988 5.91333 13.8432 6.26 13.502L11.8511 7.99914L6.26 2.49188C5.91333 2.15068 5.91333 1.59514 6.26 1.25394C6.60667 0.912748 7.17111 0.912748 7.51778 1.25394L13.74 7.37799C14.0867 7.71918 14.0867 8.27472 13.74 8.61592L7.51778 14.74C7.34 14.9106 7.11333 14.998 6.88667 14.998Z'
                    fill='white'
                  />
                  <path
                    d='M6.88667 14.998C6.66 14.998 6.43333 14.9106 6.26 14.74C5.91333 14.3988 5.91333 13.8432 6.26 13.502L11.8511 7.99914L6.26 2.49188C5.91333 2.15068 5.91333 1.59514 6.26 1.25394C6.60667 0.912748 7.17111 0.912748 7.51778 1.25394L13.74 7.37799C14.0867 7.71918 14.0867 8.27472 13.74 8.61592L7.51778 14.74C7.34 14.9106 7.11333 14.998 6.88667 14.998Z'
                    stroke='white'
                  />
                </g>
              </g>
            </svg>
          )}
        </StyledSlideDragger>

        <StyledSlideLabel css={{color}} className='slide-action__label'>
          {children || label}
        </StyledSlideLabel>
      </StyledSlideAction>
    )
  },
)

export default SlideAction

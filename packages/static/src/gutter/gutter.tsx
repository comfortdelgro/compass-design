/* eslint-disable react-refresh/only-export-components */
import React, {CSSProperties, useEffect} from 'react'
import CssInjection from '../utils/objectToCss/CssInjection'
import {useDOMRef} from '../utils/use-dom-ref'
import styles from './styles/gutter.module.css'
import Icon from './utils/Icon'
import useGutter from './utils/useGutter'

export enum GutterSide {
  RIGHT = 'right',
  LEFT = 'left',
}

export interface Props {
  css?: unknown
  isExpand?: boolean
  side?: `${GutterSide}`
  hasExpandButton?: boolean
  maxExpand?: CSSProperties['width']
  minCollapse?: CSSProperties['width']
  parentRef?: React.RefObject<HTMLDivElement> | null
  onChange?: (width: CSSProperties['width']) => void
}

export type GutterProps = Props &
  Omit<React.HTMLAttributes<HTMLElement>, keyof Props>

const Gutter = React.forwardRef<HTMLDivElement, GutterProps>((props, ref) => {
  const {
    css = {},
    onChange,
    className,
    hasExpandButton,
    side = GutterSide.RIGHT,
  } = props

  const gutterRef = useDOMRef<HTMLDivElement>(ref)
  const {width, isExpand, toggleExpand, handlePointerDown} = useGutter(
    props,
    gutterRef,
  )

  useEffect(() => {
    onChange?.(width)
  }, [onChange, width])

  const gutterClasses = [
    styles.gutter,
    side === GutterSide.LEFT && styles.gutterVariantLeft,
    side === GutterSide.RIGHT && styles.gutterVariantRight,
    'cdg-gutter',
    className,
  ]
    .filter(Boolean)
    .join(' ')

  return (
    <CssInjection css={css}>
      <div
        ref={gutterRef}
        className={gutterClasses}
        onPointerDown={handlePointerDown}
      >
        {hasExpandButton && (
          <button
            type='button'
            onClick={(e) => {
              e.stopPropagation()
              toggleExpand()
            }}
            className={`${styles.collapse} cdg-gutter-collapse-button`}
          >
            <Icon side={side} isExpand={isExpand} />
          </button>
        )}
      </div>
    </CssInjection>
  )
})

export default Gutter

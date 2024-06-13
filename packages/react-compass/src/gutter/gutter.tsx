/* eslint-disable react-refresh/only-export-components */
import React, {CSSProperties, useEffect} from 'react'
import {CSS, CssInjection} from '../utils/objectToCss'
import {classNames} from '../utils/string'
import {useDOMRef} from '../utils/use-dom-ref'
import styles from './styles/gutter.module.css'
import Icon from './utils/Icon'
import useGutter from './utils/useGutter'

export enum GutterSide {
  RIGHT = 'right',
  LEFT = 'left',
}

export interface Props {
  css?: CSS
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

  const gutterClasses = classNames(
    styles.gutter,
    side === GutterSide.LEFT && styles.gutterVariantLeft,
    side === GutterSide.RIGHT && styles.gutterVariantRight,
    className,
    'cdg-gutter',
  )

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
            className={classNames(
              styles.collapse,
              'cdg-gutter-collapse-button',
            )}
          >
            <Icon side={side} isExpand={isExpand} />
          </button>
        )}
      </div>
    </CssInjection>
  )
})

export default Gutter

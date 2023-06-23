import {faChevronLeft, faChevronRight} from '@fortawesome/free-solid-svg-icons'
import React, {CSSProperties, useEffect} from 'react'
import Icon, {IconProp} from '../icon'
import {StyledComponentProps} from '../utils/stitches.types'
import {useDOMRef} from '../utils/use-dom-ref'
import {StyledGutter, StyledGutterCollapseButton} from './gutter.styles'
import useGutter from './useGutter'

export enum GutterSide {
  RIGHT = 'right',
  LEFT = 'left',
}

const iconStyles: CSSProperties = {
  width: '14px',
  height: '14px',
}

export interface GutterProps extends StyledComponentProps {
  parentRef?: React.RefObject<HTMLDivElement> | null
  side?: 'left' | 'right'
  isExpand?: boolean
  hasExpandButton?: boolean
  minCollapse?: CSSProperties['width']
  maxExpand?: CSSProperties['width']
  onChange?: (width: CSSProperties['width']) => void
}

const Gutter = React.forwardRef<HTMLDivElement, GutterProps>((props, ref) => {
  const {onChange, hasExpandButton, side = GutterSide.RIGHT, css = {}} = props
  const domRef = useDOMRef<HTMLDivElement>(ref)
  const {width, isExpand, toggleExpand, handlePointerDown} = useGutter(
    props,
    domRef,
  )

  useEffect(() => {
    onChange?.(width)
  }, [width])

  const renderCollapseSymbol = () => {
    let icon: IconProp = faChevronLeft
    if (side === GutterSide.RIGHT) {
      icon = isExpand ? faChevronLeft : faChevronRight
    } else {
      icon = isExpand ? faChevronRight : faChevronLeft
    }

    return <Icon icon={icon} style={iconStyles} />
  }

  return (
    <StyledGutter
      css={css}
      ref={domRef}
      onPointerDown={handlePointerDown}
      side={side}
    >
      {hasExpandButton ? (
        <StyledGutterCollapseButton
          onClick={(e) => {
            e.stopPropagation()
            toggleExpand()
          }}
          type='button'
        >
          {renderCollapseSymbol()}
        </StyledGutterCollapseButton>
      ) : (
        <></>
      )}
    </StyledGutter>
  )
})

export default Gutter

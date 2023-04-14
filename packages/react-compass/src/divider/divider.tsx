import React, {RefObject} from 'react'
import {StyledComponentProps} from '../utils/stitches.types'
import {useDOMRef} from '../utils/use-dom-ref'
import {
  StyledDivider,
  StyledDividerContent,
  StyledDividerHr,
  StyledDividerLine,
} from './divider.styles'

interface Props extends StyledComponentProps {
  align?: 'center' | 'right' | 'left' | 'top' | 'bottom'
  orientation?: 'vertical' | 'horizontal'
  children?: React.ReactNode
}

export type DividerProps = Props

const Divider = React.forwardRef<HTMLHRElement | HTMLDivElement, DividerProps>(
  (props, ref) => {
    const {
      css = {},
      // ComponentProps
      align = 'center',
      orientation = 'horizontal',
      children,
    } = props

    const hrRef = useDOMRef<HTMLHRElement>(ref as RefObject<HTMLHRElement>)
    const divRef = useDOMRef<HTMLDivElement>(ref as RefObject<HTMLDivElement>)

    const alignWidth = React.useMemo(() => {
      switch (align) {
        case 'top':
        case 'left': {
          return {
            left: '10%',
            right: '90%',
          }
        }
        case 'bottom':
        case 'right': {
          return {
            left: '90%',
            right: '10%',
          }
        }
      }
      return {
        left: '50%',
        right: '50%',
      }
    }, [align])

    return children ? (
      <StyledDivider css={css} ref={divRef} orientation={orientation}>
        <StyledDividerLine
          css={
            orientation === 'horizontal'
              ? {width: alignWidth.left}
              : {height: alignWidth.left}
          }
          orientation={orientation}
        />
        <StyledDividerContent orientation={orientation}>
          {children}
        </StyledDividerContent>
        <StyledDividerLine
          css={
            orientation === 'horizontal'
              ? {width: alignWidth.right}
              : {height: alignWidth.right}
          }
          orientation={orientation}
        />
      </StyledDivider>
    ) : (
      <StyledDividerHr css={css} ref={hrRef} orientation={orientation} />
    )
  },
)

export default Divider

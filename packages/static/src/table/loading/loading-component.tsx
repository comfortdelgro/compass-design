import React, {HTMLAttributes} from 'react'
import {StyledComponentProps} from '../../utils/stitches.types'
import {useDOMRef} from '../../utils/use-dom-ref'
import {StyledLoadingComponent} from './loading-component.styles'

interface Props extends StyledComponentProps {
  colSpan: number
  loadingIndicator: React.ReactNode
}

export type LoadingComponentProps = Props &
  Omit<HTMLAttributes<HTMLTableRowElement>, keyof Props>
const LoadingComponent = React.forwardRef<
  HTMLTableRowElement,
  LoadingComponentProps
>(({colSpan, loadingIndicator, ...delegated}, ref) => {
  const loadingComponentRef = useDOMRef(ref)
  return (
    <StyledLoadingComponent ref={loadingComponentRef} {...delegated}>
      <td colSpan={colSpan}>{loadingIndicator}</td>
    </StyledLoadingComponent>
  )
})

export default LoadingComponent

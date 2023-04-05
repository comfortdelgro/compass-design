import React, {Key} from 'react'
import {DropdownItemProps} from '../item'
import {
  OptionVariantProps,
  StyledColor,
  StyledContent,
  StyledIcon,
  StyledOption,
} from './index.styles'

interface Props extends OptionVariantProps {
  key: Key | null
  item: React.DetailedReactHTMLElement<DropdownItemProps, HTMLElement>
}

function Option({item}: Props) {
  const ref = React.useRef(null)
  const {type = 'icon', leftIcon, rightIcon, rightColor, children} = item.props

  return (
    <StyledOption
      ref={ref}
      // isFocused={isFocused}
      // isSelected={isSelected}
      // isDisabled={isDisabled}
    >
      {leftIcon && <StyledIcon>{leftIcon}</StyledIcon>}
      <StyledContent>{children}</StyledContent>
      {type === 'icon' && rightIcon && <StyledIcon>{rightIcon}</StyledIcon>}
      {type === 'color' && rightColor && (
        <StyledColor css={{$$bg: rightColor}} />
      )}
    </StyledOption>
  )
}

export default Option

// export interface Node<T> {
//   type: string
//   key: Key
//   value: T
//   level: number
//   hasChildNodes: boolean
//   childNodes: Iterable<Node<T>>
//   rendered: React.ReactNode
//   textValue: string
//   'aria-label'?: string
//   index?: number
//   wrapper?: (element: React.ReactElement) => React.ReactElement
//   parentKey?: Key
//   prevKey?: Key
//   nextKey?: Key
//   props?: DropdownItemProps
//   /** @private */
//   shouldInvalidate?: (context: unknown) => boolean
// }

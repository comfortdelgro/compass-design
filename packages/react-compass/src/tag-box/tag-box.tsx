import {LabelAriaProps, useLabel} from '@react-aria/label'
import React from 'react'
import {pickChild} from '../utils/pick-child'
import {StyledComponentProps} from '../utils/stitches.types'
import {useDOMRef} from '../utils/use-dom-ref'
import TagBoxAction from './tag-box-action'
import {
  StyledBoxWrapper,
  StyledTagBox,
  StyledTagBoxActionWrapper,
  TagBoxVariantProps,
} from './tag-box.styles'

type Item = {
  id: string | number
  value: string
}

interface Props extends LabelAriaProps, StyledComponentProps {
  items: Item[]
  helperText?: string
  children?: React.ReactNode
  onRemove?: (index: string | number) => void
}

export type TagBoxProps = Props & TagBoxVariantProps

const TagBox = React.forwardRef<HTMLDivElement, TagBoxProps>((props, ref) => {
  const {
    // StyledComponentProps
    css = {},
    items,
    helperText,
    children,
    onRemove,
    // AriaTagBoxProps
    ...ariaSafeProps
  } = props

  const tagBoxRef = useDOMRef<HTMLDivElement>(ref)
  const {child: TagBoxActionElement} = pickChild<typeof TagBoxAction>(
    children,
    TagBoxAction,
  )
  const {labelProps, fieldProps} = useLabel(ariaSafeProps)

  return (
    <StyledTagBox css={css} ref={tagBoxRef}>
      {props.label && <label {...labelProps}>{props.label}</label>}
      <StyledBoxWrapper {...fieldProps}>
        {items.map((item) => (
          <div key={item.id}>
            <span>{item.value}</span>
            <Xmark onClick={() => onRemove?.(item.id)} />
          </div>
        ))}
      </StyledBoxWrapper>
      {(helperText || TagBoxActionElement) && (
        <StyledTagBoxActionWrapper>
          <span>{helperText}</span> {TagBoxActionElement}
        </StyledTagBoxActionWrapper>
      )}
    </StyledTagBox>
  )
})

const Xmark = ({...rest}) => (
  <svg
    {...rest}
    width='12'
    height='12'
    viewBox='0 0 12 12'
    fill='none'
    xmlns='http://www.w3.org/2000/svg'
  >
    <path
      d='M10.9408 9.45858C11.3509 9.8687 11.3509 10.5331 10.9408 10.9432C10.7373 11.1483 10.4683 11.25 10.1993 11.25C9.93022 11.25 9.66183 11.1475 9.4571 10.9424L5.99959 7.4867L2.54241 10.9416C2.33734 11.1483 2.06863 11.25 1.79992 11.25C1.5312 11.25 1.26282 11.1483 1.05759 10.9416C0.647469 10.5315 0.647469 9.86706 1.05759 9.45694L4.51576 5.99877L1.05759 2.54224C0.647469 2.13212 0.647469 1.46772 1.05759 1.05759C1.46772 0.647469 2.13212 0.647469 2.54224 1.05759L5.99959 4.5174L9.45776 1.05923C9.86788 0.64911 10.5323 0.64911 10.9424 1.05923C11.3525 1.46936 11.3525 2.13376 10.9424 2.54388L7.48424 6.00205L10.9408 9.45858Z'
      fill='#201F1E'
    />
  </svg>
)

export default TagBox as typeof TagBox & {
  Action: typeof TagBoxAction
}

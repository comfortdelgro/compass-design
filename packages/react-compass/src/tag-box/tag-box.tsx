import {LabelAriaProps, useLabel} from '@react-aria/label'
import React, {createRef, RefObject} from 'react'
import {pickChild} from '../utils/pick-child'
import {StyledComponentProps} from '../utils/stitches.types'
import {useDOMRef} from '../utils/use-dom-ref'
import TagBoxAction from './tag-box-action'
import {
  StyledBox,
  StyledBoxContent,
  StyledBoxWrapper,
  StyledIcon,
  StyledItem,
  StyledTagBox,
  StyledTagBoxActionWrapper,
  TagBoxVariantProps,
} from './tag-box.styles'

type Item = {
  id: string | number
  value: string
  icon?: React.ReactNode
  isDisabled?: boolean
}

interface Props extends LabelAriaProps, StyledComponentProps {
  items: Item[]
  labelPositions?: 'top' | 'left'
  collaspable?: boolean
  icon?: React.ReactNode
  helperText?: string
  children?: React.ReactNode
  onRemove?: (index: string | number) => void
}

export type TagBoxProps = Props & TagBoxVariantProps

const TagBox = React.forwardRef<HTMLDivElement, TagBoxProps>((props, ref) => {
  const {
    // StyledComponentProps
    css = {},
    labelPositions = 'top',
    collaspable = true,
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
  const [remainingCount, setRemainingCount] = React.useState(0)
  const boxContentRef = React.useRef<HTMLDivElement>(null)
  const [elRefs, setElRefs] = React.useState<Array<RefObject<HTMLDivElement>>>(
    [],
  )

  React.useEffect(() => {
    // add or remove refs
    setElRefs((elRefs) =>
      Array(items.length)
        .fill(0)
        .map((_, i) => elRefs[i] || createRef()),
    )
  }, [items])

  React.useEffect(() => {
    let total = boxContentRef.current?.clientWidth ?? 0
    let count = 0
    for (const i of elRefs) {
      const w = i.current?.clientWidth
      if (w) {
        if (w < total) {
          total = total - w - 16
        } else {
          i.current.style.display = 'none'
          count++
        }
      }
    }
    setRemainingCount(count)
  }, [elRefs])

  return (
    <StyledTagBox css={css} ref={tagBoxRef}>
      <StyledBoxWrapper labelPositions={labelPositions}>
        {props.label && <label {...labelProps}>{props.label}</label>}
        <StyledBox {...fieldProps} collaspable={collaspable}>
          {props.icon && <StyledIcon>{props.icon}</StyledIcon>}
          <StyledBoxContent ref={boxContentRef}>
            {items.map((item, index) => (
              <StyledItem
                key={item.id}
                isDisabled={!!item.isDisabled}
                ref={elRefs[index]}
              >
                {item.icon}
                <span>{item.value}</span>
                <span style={item.isDisabled ? {} : {cursor: 'pointer'}}>
                  <Xmark
                    onClick={() => onRemove?.(item.id)}
                    isDisabled={!!item.isDisabled}
                  />
                </span>
              </StyledItem>
            ))}
            {remainingCount > 0 && (
              <StyledItem key='remainingCount'>
                <span>+{remainingCount}</span>
              </StyledItem>
            )}
          </StyledBoxContent>
          {collaspable && (
            <StyledIcon css={{cursor: 'pointer'}}>
              <ChevronDown />
            </StyledIcon>
          )}
        </StyledBox>
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
  <svg {...rest} width='12' height='12' viewBox='0 0 12 12' fill='none'>
    <path
      d='M10.9408 9.45858C11.3509 9.8687 11.3509 10.5331 10.9408 10.9432C10.7373 11.1483 10.4683 11.25 10.1993 11.25C9.93022 11.25 9.66183 11.1475 9.4571 10.9424L5.99959 7.4867L2.54241 10.9416C2.33734 11.1483 2.06863 11.25 1.79992 11.25C1.5312 11.25 1.26282 11.1483 1.05759 10.9416C0.647469 10.5315 0.647469 9.86706 1.05759 9.45694L4.51576 5.99877L1.05759 2.54224C0.647469 2.13212 0.647469 1.46772 1.05759 1.05759C1.46772 0.647469 2.13212 0.647469 2.54224 1.05759L5.99959 4.5174L9.45776 1.05923C9.86788 0.64911 10.5323 0.64911 10.9424 1.05923C11.3525 1.46936 11.3525 2.13376 10.9424 2.54388L7.48424 6.00205L10.9408 9.45858Z'
      fill='#201F1E'
    />
  </svg>
)

const ChevronDown = ({...rest}) => (
  <svg {...rest} width='16' height='16' viewBox='0 0 16 16' fill='none'>
    <path
      d='M8.33276 12.3334C8.02004 12.3334 7.70717 12.2125 7.46885 11.9707L1.35805 5.78022C0.880649 5.29658 0.880649 4.5131 1.35805 4.02947C1.83546 3.54584 2.60886 3.54584 3.08626 4.02947L8.33276 9.34651L13.5804 4.03044C14.0578 3.54681 14.8312 3.54681 15.3086 4.03044C15.786 4.51407 15.786 5.29755 15.3086 5.78118L9.19782 11.9717C8.95912 12.2135 8.64594 12.3334 8.33276 12.3334Z'
      fill='#201F1E'
    />
  </svg>
)
export default TagBox as typeof TagBox & {
  Action: typeof TagBoxAction
}

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
  isError?: boolean
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
  const [isOpen, setIsOpen] = React.useState(false)

  React.useEffect(() => {
    // add or remove refs
    setElRefs((elRefs) =>
      Array(items.length)
        .fill(0)
        .map((_, i) => elRefs[i] || createRef()),
    )
  }, [items])

  React.useEffect(() => {
    if (collaspable && !isOpen) {
      let total = boxContentRef.current?.clientWidth ?? 0
      let count = 0
      for (const i of elRefs) {
        const w = i.current?.clientWidth
        if (w) {
          const t = total - w - 16
          if (t > 37) {
            total = t
          } else {
            i.current.style.display = 'none'
            count++
          }
        }
      }
      setRemainingCount(Math.min(count, 99))
    } else {
      for (const i of elRefs) {
        if (i.current) i.current.style.display = 'flex'
      }
      setRemainingCount(0)
    }
  }, [elRefs, isOpen, collaspable])

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
                isError={!!item.isError}
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
            <StyledIcon
              css={{cursor: 'pointer'}}
              onClick={() => setIsOpen((v) => !v)}
            >
              {isOpen ? <ChevronUp /> : <ChevronDown />}
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
  <svg width='24' height='24' viewBox='0 0 24 24' fill='none' {...rest}>
    <path
      d='M11.9991 18C11.5301 18 11.0608 17.8186 10.7033 17.4559L1.53708 8.1702C0.820973 7.44475 0.820973 6.26953 1.53708 5.54408C2.25319 4.81864 3.41329 4.81864 4.12939 5.54408L11.9991 13.5196L19.8706 5.54554C20.5867 4.82009 21.7468 4.82009 22.4629 5.54554C23.179 6.27098 23.179 7.44621 22.4629 8.17165L13.2967 17.4574C12.9387 17.8201 12.4689 18 11.9991 18Z'
      fill='#201F1E'
    />
  </svg>
)

const ChevronUp = ({...rest}) => (
  <svg width='24' height='24' viewBox='0 0 24 24' fill='none' {...rest}>
    <path
      d='M12.0009 5C12.4699 5 12.9392 5.18136 13.2967 5.54409L22.4629 14.8298C23.179 15.5552 23.179 16.7305 22.4629 17.4559C21.7468 18.1814 20.5867 18.1814 19.8706 17.4559L12.0009 9.48036L4.12939 17.4545C3.41329 18.1799 2.25319 18.1799 1.53708 17.4545C0.820973 16.729 0.820973 15.5538 1.53708 14.8284L10.7033 5.54264C11.0613 5.17991 11.5311 5 12.0009 5Z'
      fill='#201F1E'
    />
  </svg>
)

export default TagBox as typeof TagBox & {
  Action: typeof TagBoxAction
}

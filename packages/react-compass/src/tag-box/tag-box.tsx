import React, {createRef, RefObject} from 'react'
import {pickChild} from '../utils/pick-child'
import {StyledComponentProps} from '../utils/stitches.types'
import {useDOMRef} from '../utils/use-dom-ref'
import TagBoxAction from './tag-box-action'
import TagBoxInput from './tag-box-input'
import TagBoxItem from './tag-box-item'
import {
  StyledBox,
  StyledBoxContent,
  StyledBoxWrapper,
  StyledHelperText,
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

interface Props extends StyledComponentProps {
  id?: string
  label?: React.ReactNode
  items: Item[]
  labelPosition?: 'top' | 'left'
  collaspable?: boolean
  typeable?: boolean
  icon?: React.ReactNode
  helperText?: string
  isErrored?: boolean
  isRequired?: boolean
  errorMessage?: string
  children?: React.ReactNode
  onAdd?: (value: string) => void
  onRemove?: (index: string | number) => void
  onEdit?: (index: string | number, value: string) => void
  'aria-label'?: string
  'aria-labelledby'?: string
  'aria-describedby'?: string
  'aria-details'?: string
}

export type TagBoxProps = Props & TagBoxVariantProps

const TagBox = React.forwardRef<HTMLDivElement, TagBoxProps>((props, ref) => {
  const {
    // StyledComponentProps
    css = {},
    id,
    labelPosition = 'top',
    collaspable = false,
    typeable = false,
    items,
    helperText,
    children,
    isErrored,
    isRequired,
    errorMessage,
    onRemove,
    onAdd,
    onEdit,
  } = props

  const tagBoxRef = useDOMRef<HTMLDivElement>(ref)
  const {child: TagBoxActionElement} = pickChild<typeof TagBoxAction>(
    children,
    TagBoxAction,
  )
  const [remainingCount, setRemainingCount] = React.useState(0)
  const boxContentRef = React.useRef<HTMLDivElement>(null)
  const boxRef = React.useRef<HTMLDivElement>(null)
  const [elRefs, setElRefs] = React.useState<Array<RefObject<HTMLDivElement>>>(
    [],
  )
  const [isOpen, setIsOpen] = React.useState(false)

  const onFocus = () => {
    if (boxRef.current) {
      boxRef.current.style.outlineColor = isErrored
        ? '#A4262C'
        : '-webkit-focus-ring-color'
      boxRef.current.style.outlineStyle = 'auto'
    }
  }

  const onBlur = () => {
    if (boxRef.current) {
      boxRef.current.style.outline = 'none'
    }
  }

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
      <StyledBoxWrapper labelPosition={labelPosition}>
        {props.label && (
          <label htmlFor={id}>
            {props.label}
            {isRequired && <span>*</span>}
          </label>
        )}
        <div>
          <StyledBox
            id={id}
            ref={boxRef}
            collaspable={collaspable}
            isErrored={!!isErrored}
          >
            {props.icon && <StyledIcon>{props.icon}</StyledIcon>}

            <StyledBoxContent ref={boxContentRef}>
              {items.map((item, index) => (
                <TagBoxItem
                  key={item.id}
                  isDisabled={!!item.isDisabled}
                  isError={!!item.isError}
                  ref={elRefs[index]}
                  wrapperRef={boxContentRef}
                  icon={item.icon}
                  value={item.value}
                  id={item.id}
                  onRemove={onRemove}
                  onEdit={onEdit}
                />
              ))}
              {remainingCount > 0 && (
                <StyledItem key='remainingCount'>
                  <span>+{remainingCount}</span>
                </StyledItem>
              )}
              {((!collaspable && typeable) ||
                (collaspable && typeable && isOpen)) && (
                <TagBoxInput
                  onFocus={onFocus}
                  onBlur={onBlur}
                  onEnter={(v) => onAdd?.(v)}
                />
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
          {errorMessage && (
            <StyledHelperText error={!!isErrored}>
              {errorMessage}
            </StyledHelperText>
          )}
        </div>
      </StyledBoxWrapper>
      {(helperText || TagBoxActionElement) && (
        <StyledTagBoxActionWrapper>
          <span>{helperText}</span> {TagBoxActionElement}
        </StyledTagBoxActionWrapper>
      )}
    </StyledTagBox>
  )
})

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

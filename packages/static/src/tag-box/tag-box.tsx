import React, {createRef, RefObject} from 'react'
import CssInjection from '../utils/objectToCss/CssInjection'
import {pickChild} from '../utils/pick-child'
import {useDOMRef} from '../utils/use-dom-ref'
import stylesItem from './styles/tag-box-item.module.css'
import styles from './styles/tag-box.module.css'
import TagBoxAction from './tag-box-action'
import TagBoxInput from './tag-box-input'
import TagBoxItem from './tag-box-item'

type Item = {
  id: string | number
  value: string
  icon?: React.ReactNode
  isDisabled?: boolean
  isError?: boolean
}

interface Props {
  css?: unknown
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

export type TagBoxProps = Props &
  Omit<React.HTMLAttributes<HTMLDivElement>, keyof Props>

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
    isErrored = false,
    isRequired,
    errorMessage,
    className,
    onRemove,
    onAdd,
    onEdit,
    label,
    icon,
    ...htmlProps
  } = props

  const inputRef = useDOMRef<HTMLInputElement>(null)
  const tagBoxRef = useDOMRef<HTMLDivElement>(ref)
  const {child: TagBoxActionElement} = pickChild<typeof TagBoxAction>(
    children,
    TagBoxAction,
  )
  const [remainingCount, setRemainingCount] = React.useState(0)
  const bodyContentRef = React.useRef<HTMLDivElement>(null)
  const boxRef = React.useRef<HTMLDivElement>(null)
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

  const calculateRemainingItems = () => {
    let total = bodyContentRef.current?.clientWidth ?? 0
    let count = 0
    for (const i of elRefs) {
      if (i.current) i.current.removeAttribute('style')
    }
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
  }

  const focusInput = () => {
    inputRef.current?.focus()
  }

  const toggleCollapse = () => {
    setIsOpen((v) => !v)
    inputRef.current?.focus()
  }

  React.useEffect(() => {
    if (collaspable && !isOpen) {
      calculateRemainingItems()
    } else {
      for (const i of elRefs) {
        if (i.current) i.current.removeAttribute('style')
      }
      setRemainingCount(0)
    }
  }, [elRefs, isOpen, collaspable])

  React.useEffect(() => {
    const element = bodyContentRef.current
    if (!element) return
    const observer = new ResizeObserver(() => {
      if (!isOpen) {
        calculateRemainingItems()
      }
    })
    observer.observe(element)
    return () => {
      observer.disconnect()
    }
  }, [bodyContentRef.current, isOpen])

  const rootClass = React.useMemo(
    () => [styles.tabBox, 'cdg-tag-box', className].filter(Boolean).join(' '),
    [labelPosition],
  )

  const wrapperClass = React.useMemo(
    () =>
      [
        styles.wrapper,
        labelPosition === 'top' && styles.wrapperLabelPositionTop,
        labelPosition === 'left' && styles.wrapperLabelPositionLeft,
        'cdg-tab-box-wrapper',
      ]
        .filter(Boolean)
        .join(' '),
    [labelPosition],
  )

  const bodyClass = React.useMemo(
    () =>
      [
        styles.body,
        collaspable === false && styles.bodyCollaspableFalse,
        isErrored && styles.bodyIsErrored,
        'cdg-tag-box-body',
      ]
        .filter(Boolean)
        .join(' '),
    [labelPosition],
  )

  return (
    <CssInjection css={css}>
      <div {...htmlProps} ref={tagBoxRef} className={rootClass}>
        <div className={wrapperClass} onClick={focusInput}>
          {label && (
            <label htmlFor={id} className={`${styles.label} cdg-tag-box-label`}>
              {label}
              {isRequired && (
                <span className={`${styles.asterix} cdg-tag-box-asterix`}>
                  *
                </span>
              )}
            </label>
          )}
          <div>
            <div
              id={id}
              tabIndex={0}
              ref={boxRef}
              className={bodyClass}
              aria-label={props['aria-label']}
              aria-details={props['aria-details']}
              aria-labelledby={props['aria-labelledby']}
              aria-describedby={props['aria-describedby']}
              onFocus={focusInput}
            >
              {icon && (
                <div className={`${styles.icon} cdg-tag-box-body-icon`}>
                  {icon}
                </div>
              )}

              <div
                className={`${styles.bodyContent} cdg-tag-box-body-content`}
                ref={bodyContentRef}
              >
                {items.map((item, index) => (
                  <TagBoxItem
                    id={item.id}
                    key={item.id}
                    icon={item.icon}
                    value={item.value}
                    ref={elRefs[index]}
                    isError={!!item.isError}
                    wrapperRef={bodyContentRef}
                    isDisabled={!!item.isDisabled}
                    onEdit={onEdit}
                    onRemove={onRemove}
                    calculateRemainingItems={calculateRemainingItems}
                  />
                ))}

                {remainingCount > 0 && (
                  <div
                    key='remainingCount'
                    className={`${stylesItem.item} ${styles.count} cdg-tag-box-count`}
                  >
                    <span>+{remainingCount}</span>
                  </div>
                )}

                {((!collaspable && typeable) ||
                  (collaspable && typeable && isOpen)) && (
                  <TagBoxInput
                    ref={inputRef}
                    wrapperRef={bodyContentRef}
                    onEnter={onAdd}
                  />
                )}
              </div>
              {collaspable && (
                <div
                  className={`${styles.icon} ${styles.iconCollapse} cdg-tag-box-collapse-icon`}
                  onClick={toggleCollapse}
                >
                  {isOpen ? <ChevronUp /> : <ChevronDown />}
                </div>
              )}
            </div>
            {isErrored && errorMessage && (
              <div
                className={`${styles.helperText} ${styles.helperTextIsErrored} cdg-tag-box-error-message`}
              >
                {errorMessage}
              </div>
            )}
          </div>
        </div>
        {(helperText || TagBoxActionElement) && (
          <div className={`${styles.action} cdg-tag-box-action`}>
            <span className={`${styles.helperText} cdg-tag-box-helper-text`}>
              {helperText}
            </span>
            {TagBoxActionElement}
          </div>
        )}
      </div>
    </CssInjection>
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

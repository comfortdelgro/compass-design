import React, {createRef, RefObject} from 'react'
import {CSS, CssInjection} from '../utils/objectToCss'
import {pickChild} from '../utils/pick-child'
import {classNames} from '../utils/string'
import {useDOMRef} from '../utils/use-dom-ref'
import styles from './styles/tag-box.module.css'
import TagBoxAction from './tag-box-action'
import TagBoxInput from './tag-box-input'
import TagBoxItem from './tag-box-item'
import {ChevronDown, ChevronUp} from './utils'

type Item = {
  id: string | number
  value: string
  icon?: React.ReactNode
  isDisabled?: boolean
  isError?: boolean
}

interface Props {
  id?: string
  items: Item[]
  css?: CSS
  typeable?: boolean
  helperText?: string
  isErrored?: boolean
  isRequired?: boolean
  errorMessage?: string
  collaspable?: boolean
  icon?: React.ReactNode
  label?: React.ReactNode
  children?: React.ReactNode
  labelPosition?: 'top' | 'left'
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
    id,
    icon,
    label,
    items,
    css = {},
    children,
    className,
    isRequired,
    helperText,
    errorMessage,
    typeable = false,
    isErrored = false,
    collaspable = false,
    labelPosition = 'top',
    onRemove,
    onAdd,
    onEdit,
    ...htmlProps
  } = props

  const inputRef = useDOMRef<HTMLInputElement>(null)
  const tagBoxRef = useDOMRef<HTMLDivElement>(ref)
  const {child: TagBoxActionElement} = pickChild(children, TagBoxAction)
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

  const calculateRemainingItems = React.useCallback(() => {
    if (!isOpen) {
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
  }, [elRefs, isOpen])

  const focusInput = () => {
    inputRef.current?.focus()
  }

  const toggleCollapse = () => {
    setIsOpen((v) => !v)
    inputRef.current?.focus()
  }

  const resizing = React.useCallback(() => {
    if (collaspable && !isOpen) {
      calculateRemainingItems()
    } else {
      for (const i of elRefs) {
        if (i.current) i.current.removeAttribute('style')
      }
      setRemainingCount(0)
    }
  }, [elRefs, isOpen, collaspable, calculateRemainingItems])

  React.useEffect(() => {
    resizing()
  }, [resizing])

  React.useEffect(() => {
    const element = bodyContentRef.current
    if (!element) return
    const observer = new ResizeObserver(() => {
      resizing()
    })
    observer.observe(element)
    return () => {
      observer.disconnect()
    }
  }, [resizing])

  const rootClass = classNames(styles.tabBox, className, 'cdg-tag-box')

  const wrapperClass = classNames(
    styles.wrapper,
    labelPosition === 'top' && styles.wrapperLabelPositionTop,
    labelPosition === 'left' && styles.wrapperLabelPositionLeft,
    'cdg-tab-box-wrapper',
  )

  const bodyClass = classNames(
    styles.body,
    collaspable === false && styles.bodyCollaspableFalse,
    isErrored && styles.bodyIsErrored,
    'cdg-tag-box-body',
  )

  return (
    <CssInjection css={css}>
      <div {...htmlProps} ref={tagBoxRef} className={rootClass}>
        <div className={wrapperClass} onClick={focusInput}>
          {label && (
            <label
              htmlFor={id}
              className={classNames(styles.label, 'cdg-tag-box-label')}
            >
              {label}
              {isRequired && (
                <span
                  className={classNames(styles.label, 'cdg-tag-box-asterix')}
                >
                  *
                </span>
              )}
            </label>
          )}
          <div
            className={classNames(
              styles.bodyWrapper,
              'cdg-tag-box-body-wrapper',
            )}
          >
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
                <div
                  className={classNames(styles.icon, 'cdg-tag-box-body-icon')}
                >
                  {icon}
                </div>
              )}

              <div
                className={classNames(
                  styles.bodyContent,
                  'cdg-tag-box-body-content',
                )}
                ref={bodyContentRef}
              >
                {items.map((item, index) => (
                  <TagBoxItem
                    id={item.id}
                    key={item.id}
                    icon={item.icon}
                    value={item.value}
                    ref={elRefs[index]}
                    addInputRef={inputRef}
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
                    className={classNames(
                      styles.item,
                      styles.count,
                      'cdg-tag-box-count',
                    )}
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
                  className={classNames(
                    styles.icon,
                    styles.iconCollapse,
                    'cdg-tag-box-collapse-icon',
                  )}
                  onClick={toggleCollapse}
                >
                  {isOpen ? <ChevronUp /> : <ChevronDown />}
                </div>
              )}
            </div>
            {isErrored && errorMessage && (
              <div
                className={classNames(
                  styles.helperText,
                  styles.helperTextIsErrored,
                  'cdg-tag-box-error-message',
                )}
              >
                {errorMessage}
              </div>
            )}
          </div>
        </div>
        {(helperText || TagBoxActionElement) && (
          <div className={classNames(styles.action, 'cdg-tag-box-action')}>
            <span
              className={classNames(
                styles.helperText,
                'cdg-tag-box-helper-text',
              )}
            >
              {helperText}
            </span>
            {TagBoxActionElement}
          </div>
        )}
      </div>
    </CssInjection>
  )
})

export default TagBox as typeof TagBox & {
  Action: typeof TagBoxAction
}

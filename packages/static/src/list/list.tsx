/* eslint-disable react-refresh/only-export-components */
import React, {useState} from 'react'
import CssInjection from '../utils/objectToCss/CssInjection'
import ListH5 from './h5'
import ListImage from './list-image'
import styles from './styles/list.module.css'
interface Props {
  css?: unknown
  variant?: 'item' | 'interactive' | 'h5'
  isDisabled?: boolean
  size?: 'sm' | 'md'
  leftInfo?: React.ReactNode
  title?: string
  description?: string
  descriptionIcon?: React.ReactNode
  rightInfo?: {
    text?: string
    description?: string
    icon?: React.ReactNode
  }
  rightContent?: React.ReactNode
}

export type ListProps = Props &
  Omit<React.HTMLAttributes<HTMLDivElement>, keyof Props>

const List = React.forwardRef<HTMLDivElement, ListProps>((props, ref) => {
  const {
    leftInfo,
    title,
    description,
    rightInfo,
    rightContent,
    variant = 'interactive',
    isDisabled = false,
    size = 'md',
    css = {},
    className = '',
    descriptionIcon,
    ...delegated
  } = props

  const [isPressed, setPressed] = useState(false)
  const handleClick = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    if (isDisabled) return
    if (props.onClick) {
      props.onClick(e)
    }
  }

  const onMouse = (value: boolean) => {
    if (isDisabled) return
    setPressed(value)
  }

  const listClass = React.useMemo(() => {
    return [
      styles.list,
      isDisabled && styles.listIsDisabled,
      size == 'sm' && styles.listSizeSM,
      variant === 'interactive' &&
        !isPressed &&
        !isDisabled &&
        styles.listVariantInteractive,
      variant === 'item' && !isPressed && !isDisabled && styles.listVariantItem,
      variant === 'interactive' &&
        isPressed &&
        !isDisabled &&
        styles.listVariantInteractiveIsPressed,
      variant === 'item' &&
        isPressed &&
        !isDisabled &&
        styles.listVariantItemIsPressed,
      variant === 'interactive' &&
        isDisabled &&
        styles.listVariantInteractiveIsDisabled,
      variant === 'item' && isDisabled && styles.listVariantItemIsDisabled,
      'cdg-list',
      className,
    ]
      .filter(Boolean)
      .join(' ')
  }, [className, isDisabled, isPressed, size, variant])

  const leftDescriptionClass = React.useMemo(() => {
    return [
      styles.leftDescription,
      size == 'sm' && styles.leftDescriptionSizeSM,
      variant === 'interactive' && styles.lefttDescriptionVariantInteractive,
      size == 'sm' && isPressed && styles.leftDescriptionSizeSMIsPressed,
      variant === 'interactive' &&
        isDisabled &&
        styles.leftDescriptionVariantInteractiveIsDisabled,
      'cdg-list-description',
    ]
      .filter(Boolean)
      .join(' ')
  }, [isDisabled, isPressed, size, variant])

  const leftInfoClass = React.useMemo(() => {
    return [
      styles.leftInfo,
      size == 'sm' && styles.leftInfoSizeSM,
      size == 'sm' && isPressed && styles.leftInfoSizeSMIsPressed,
      'cdg-list-info',
    ]
      .filter(Boolean)
      .join(' ')
  }, [isPressed, size])

  const leftTitleClass = React.useMemo(() => {
    return [
      styles.leftTitle,
      size == 'sm' && styles.leftTitleSizeSM,
      size == 'sm' && isPressed && styles.leftTitleSizeSMIsPressed,
      'cdg-list-title',
    ]
      .filter(Boolean)
      .join(' ')
  }, [isPressed, size])

  const leftTextClass = React.useMemo(() => {
    return [
      styles.leftText,
      size == 'sm' && styles.leftTextSizeSM,
      size == 'sm' && isPressed && styles.leftTextSizeSMIsPressed,
      'cdg-list-left-text',
    ]
      .filter(Boolean)
      .join(' ')
  }, [isPressed, size])

  const rightTextClass = React.useMemo(() => {
    return [
      styles.rightText,
      variant === 'interactive' &&
        isDisabled &&
        styles.rightTextVariantInteractiveIsDisabled,
      'cdg-list-right-text',
    ]
      .filter(Boolean)
      .join(' ')
  }, [isDisabled, variant])

  if (variant === 'h5') return <ListH5 {...props} />

  return (
    <CssInjection css={css} childrenRef={ref}>
      <div
        ref={ref}
        tabIndex={0}
        role='button'
        className={listClass}
        onClick={handleClick}
        onMouseDown={() => onMouse(true)}
        onMouseUp={() => onMouse(false)}
        {...delegated}
      >
        <div className={styles.left}>
          {leftInfo && <div className={leftInfoClass}>{leftInfo}</div>}
          {(title || description) && (
            <div className={leftTextClass}>
              {title && <h2 className={leftTitleClass}>{title}</h2>}
              <div>
                {description && (
                  <span className={leftDescriptionClass}>{description}</span>
                )}
                {descriptionIcon && descriptionIcon}
              </div>
            </div>
          )}
        </div>
        {rightInfo && !rightContent && (
          <div className={styles.right}>
            {rightInfo.text && (
              <span className={rightTextClass}>{rightInfo?.text}</span>
            )}
            {rightInfo?.icon}
          </div>
        )}
      </div>
    </CssInjection>
  )
})

export default List as typeof List & {Image: typeof ListImage}

import React, {useState} from 'react'
import {CSS, CssInjection} from '../utils/objectToCss'
import {classNames} from '../utils/string'
import ListImage from './list-image'
import styles from './styles/list.module.css'
interface Props {
  css?: CSS
  variant?: 'item' | 'interactive'
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

  const listClass = classNames(
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
    className,
    'cdg-list',
  )

  const leftDescriptionClass = classNames(
    styles.leftDescription,
    size == 'sm' && styles.leftDescriptionSizeSM,
    variant === 'interactive' && styles.lefttDescriptionVariantInteractive,
    size == 'sm' && isPressed && styles.leftDescriptionSizeSMIsPressed,
    variant === 'interactive' &&
      isDisabled &&
      styles.leftDescriptionVariantInteractiveIsDisabled,
    'cdg-list-description',
  )

  const leftInfoClass = classNames(
    styles.leftInfo,
    size == 'sm' && styles.leftInfoSizeSM,
    size == 'sm' && isPressed && styles.leftInfoSizeSMIsPressed,
    'cdg-list-info',
  )

  const leftTitleClass = classNames(
    styles.leftTitle,
    size == 'sm' && styles.leftTitleSizeSM,
    size == 'sm' && isPressed && styles.leftTitleSizeSMIsPressed,
    'cdg-list-title',
  )

  const leftTextClass = classNames(
    styles.leftText,
    size == 'sm' && styles.leftTextSizeSM,
    size == 'sm' && isPressed && styles.leftTextSizeSMIsPressed,
    'cdg-list-left-text',
  )

  const rightTextClass = classNames(
    styles.rightText,
    variant === 'interactive' &&
      isDisabled &&
      styles.rightTextVariantInteractiveIsDisabled,
    'cdg-list-right-text',
  )

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
        <div className={classNames(styles.left, 'cdg-list-left')}>
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
          <div className={classNames(styles.right, 'cdg-list-right')}>
            {rightInfo.text && (
              <span className={rightTextClass}>{rightInfo?.text}</span>
            )}
            {rightInfo?.icon}
          </div>
        )}
      </div>
    </CssInjection>
  )
}) as typeof List & {Image: typeof ListImage}

export default List

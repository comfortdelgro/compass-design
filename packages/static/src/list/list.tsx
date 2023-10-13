/* eslint-disable react-refresh/only-export-components */
import React, {useState} from 'react'
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
    // css = {},
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
    let classes = `cdg-list ${styles.list}`
    if (isDisabled) {
      classes += ` ${styles.listIsDisabled}`
    }
    if (size == 'sm') {
      classes += ` ${styles.listSizeSM}`
    }
    if (variant === 'interactive' && !isPressed && !isDisabled) {
      classes += ` ${styles.listVariantInteractive}`
    }
    if (variant === 'item' && !isPressed && !isDisabled) {
      classes += ` ${styles.listVariantItem}`
    }
    if (variant === 'interactive' && isPressed && !isDisabled) {
      classes += ` ${styles.listVariantInteractiveIsPressed}`
    }
    if (variant === 'item' && isPressed && !isDisabled) {
      classes += ` ${styles.listVariantItemIsPressed}`
    }
    if (variant === 'interactive' && isDisabled) {
      classes += ` ${styles.listVariantInteractiveIsDisabled}`
    }
    if (variant === 'item' && isDisabled) {
      classes += ` ${styles.listVariantItemIsDisabled}`
    }
    if (className) {
      classes += ` ${className}`
    }
    return classes
  }, [className, isDisabled, isPressed, size, variant])

  const leftDescriptionClass = React.useMemo(() => {
    let classes = `cdg-list-description ${styles.leftDescription}`
    if (size == 'sm') {
      classes += ` ${styles.leftDescriptionSizeSM}`
    }
    if (variant === 'interactive') {
      classes += ` ${styles.lefttDescriptionVariantInteractive}`
    }
    if (size == 'sm' && isPressed) {
      classes += ` ${styles.leftDescriptionSizeSMIsPressed}`
    }
    if (variant === 'interactive' && isDisabled) {
      classes += ` ${styles.leftDescriptionVariantInteractiveIsDisabled}`
    }
    return classes
  }, [isDisabled, isPressed, size, variant])

  const leftInfoClass = React.useMemo(() => {
    let classes = `cdg-list-info ${styles.leftInfo}`
    if (size == 'sm') {
      classes += ` ${styles.leftInfoSizeSM}`
    }
    if (size == 'sm' && isPressed) {
      classes += ` ${styles.leftInfoSizeSMIsPressed}`
    }
    return classes
  }, [isPressed, size])

  const leftTitleClass = React.useMemo(() => {
    let classes = `cdg-list-title ${styles.leftTitle}`
    if (size == 'sm') {
      classes += ` ${styles.leftTitleSizeSM}`
    }
    if (size == 'sm' && isPressed) {
      classes += ` ${styles.leftTitleSizeSMIsPressed}`
    }
    return classes
  }, [isPressed, size])

  const leftTextClass = React.useMemo(() => {
    let classes = `cdg-list-left-text ${styles.leftText}`
    if (size == 'sm') {
      classes += ` ${styles.leftTextSizeSM}`
    }
    if (size == 'sm' && isPressed) {
      classes += ` ${styles.leftTextSizeSMIsPressed}`
    }
    return classes
  }, [isPressed, size])

  const rightTextClass = React.useMemo(() => {
    let classes = `cdg-list-right-text ${styles.rightText}`
    if (variant === 'interactive' && isDisabled) {
      classes += ` ${styles.rightTextVariantInteractiveIsDisabled}`
    }
    return classes
  }, [isDisabled, variant])

  return (
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
        <>
          {variant === 'h5' ? (
            <div className='list-h5-right-side'>
              {rightInfo?.text && (
                <h2 className='list-text-title'>{rightInfo?.text}</h2>
              )}
              {rightInfo?.description && (
                <span className='list-text-description'>
                  {rightInfo?.description}
                </span>
              )}
            </div>
          ) : (
            <div className={styles.right}>
              {rightInfo.text && (
                <span className={rightTextClass}>{rightInfo?.text}</span>
              )}
              {rightInfo?.icon}
            </div>
          )}
        </>
      )}
      {rightContent && !rightInfo && (
        <div className='list-h5-right-side'> {rightContent} </div>
      )}
    </div>
  )
})

export default List as typeof List & {Image: typeof ListImage}

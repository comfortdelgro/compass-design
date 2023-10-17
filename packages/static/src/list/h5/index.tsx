/* eslint-disable react-refresh/only-export-components */
import React, {useState} from 'react'
import CssInjection from '../../utils/objectToCss/CssInjection'
import styles from './index.module.css'

interface Props {
  css?: unknown
  isDisabled?: boolean
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

const ListH5 = React.forwardRef<HTMLDivElement, ListProps>((props, ref) => {
  const {
    leftInfo,
    title,
    description,
    rightInfo,
    rightContent,
    isDisabled = false,
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
    let classes = `cdg-list ${styles.list}`
    if (isDisabled) {
      classes += ` ${styles.listIsDisabled}`
    }
    if (className) {
      classes += ` ${className}`
    }
    return classes
  }, [className, isDisabled, isPressed])

  const leftDescriptionClass = React.useMemo(() => {
    let classes = `cdg-list-description ${styles.leftDescription}`
    return classes
  }, [isDisabled, isPressed])

  const leftInfoClass = React.useMemo(() => {
    let classes = `cdg-list-info ${styles.leftInfo}`
    return classes
  }, [isPressed])

  const leftTitleClass = React.useMemo(() => {
    let classes = `cdg-list-title ${styles.leftTitle}`
    return classes
  }, [isPressed])

  const leftTextClass = React.useMemo(() => {
    let classes = `cdg-list-left-text ${styles.leftText}`
    return classes
  }, [isPressed])

  const rightTextClass = React.useMemo(() => {
    let classes = `cdg-list-right-text ${styles.rightText}`
    return classes
  }, [isDisabled])

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
          <div className={`cdg-list-right ${styles.right}`}>
            {rightInfo?.text && (
              <h2 className={rightTextClass}>{rightInfo?.text}</h2>
            )}
            {rightInfo?.description && (
              <span className={`cdg-list-right-description ${styles.rightDescription}`}>
                {rightInfo?.description}
              </span>
            )}
          </div>
        )}
        {rightContent && !rightInfo && (
          <div className={`cdg-list-right ${styles.right}`}>{rightContent}</div>
        )}
      </div>
    </CssInjection>
  )
})

export default ListH5

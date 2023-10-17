/* eslint-disable react-refresh/only-export-components */
import React from 'react'
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

  const handleClick = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    if (isDisabled) return
    if (props.onClick) {
      props.onClick(e)
    }
  }

  const listClass = React.useMemo(() => {
    return [
      styles.list,
      isDisabled && styles.listIsDisabled,
      'cdg-list',
      className,
    ]
      .filter(Boolean)
      .join(' ')
  }, [className, isDisabled])

  const leftDescriptionClass = React.useMemo(() => {
    return [
      styles.leftDescription,
      isDisabled && styles.leftDescriptionVariantInteractiveIsDisabled,
      'cdg-list-description',
    ]
      .filter(Boolean)
      .join(' ')
  }, [])

  const leftInfoClass = React.useMemo(() => {
    return [styles.leftInfo, 'cdg-list-info'].filter(Boolean).join(' ')
  }, [])

  const leftTitleClass = React.useMemo(() => {
    return [styles.leftTitle, 'cdg-list-title'].filter(Boolean).join(' ')
  }, [])

  const leftTextClass = React.useMemo(() => {
    return [styles.leftText, 'cdg-list-left-text'].filter(Boolean).join(' ')
  }, [])

  const rightTextClass = React.useMemo(() => {
    return [styles.rightText, 'cdg-list-right-text'].filter(Boolean).join(' ')
  }, [])

  return (
    <CssInjection css={css} childrenRef={ref}>
      <div
        ref={ref}
        tabIndex={0}
        role='button'
        className={listClass}
        onClick={handleClick}
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
              <span
                className={`cdg-list-right-description ${styles.rightDescription}`}
              >
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

import {faClose} from '@fortawesome/free-solid-svg-icons/faClose'
import {faPlus} from '@fortawesome/free-solid-svg-icons/faPlus'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import get from 'lodash/get'
import React, {
  AriaAttributes,
  DataHTMLAttributes,
  forwardRef,
  useImperativeHandle,
  useMemo,
  useRef,
  useState,
} from 'react'
import CssInjection from '../utils/objectToCss/CssInjection'
import styles from './styles/tag-box-v2.module.css'
import {CustomTagBoxRef, Tag, TagBoxV2Props} from './types'

const TagBoxV2 = forwardRef<
  CustomTagBoxRef,
  TagBoxV2Props & AriaAttributes & DataHTMLAttributes<HTMLDivElement>
>(
  (
    {
      isRequired,
      tagBoxLabel,
      tags,
      onAddTag,
      onEditTag,
      onRemoveTag,
      isDisabled = false,
      isEditable,
      isErrored = false,
      className,
      customValidationHandler,
      addTagPlaceholder,
      canRemoveOnDeleteAndBackspaceKey,
      css = {},
      ...props // aria-* and data-* attributes
    },
    ref,
  ) => {
    const [isUsingNewTagInput, setIsUsingNewTagInput] = useState(false)
    const [focused, setFocused] = useState(false)
    const [newTagValue, setNewTagValue] = useState('')
    const [currentlyEditingTag, setCurrentlyEditingTag] = useState<Tag | null>(
      null,
    )

    const inputRef = useRef<HTMLInputElement | null>(null)
    const tagBoxRef = useRef<HTMLDivElement | null>(null)

    useImperativeHandle(ref, () => {
      return {
        focus() {
          inputRef.current?.focus()
        },
        blur() {
          inputRef.current?.blur()
        },
      }
    })

    const checkIfNotEmptyOrWhitespace = (tagValue: string) => {
      return !!tagValue && tagValue.trim() !== ''
    }

    const handleValidation = (tagValue: string) => {
      const builtinValidationResult = checkIfNotEmptyOrWhitespace(tagValue)
      if (customValidationHandler) {
        return builtinValidationResult && customValidationHandler(tagValue)
      }
      return builtinValidationResult
    }

    const handleClickContainer = () => {
      inputRef.current?.focus()
    }

    const handleClickAddNewTag = () => {
      setIsUsingNewTagInput(true)
      setTimeout(() => inputRef.current?.focus())
    }

    const handleFocusNewTag = () => {
      if (tagBoxRef.current) {
        !isErrored && setFocused(true)
      }
    }

    const handleChangeNewTag = (event: React.ChangeEvent<HTMLInputElement>) => {
      setNewTagValue(event.target.value)
    }

    const handleKeyDownNewTag = (
      event: React.KeyboardEvent<HTMLInputElement>,
    ) => {
      switch (event.key) {
        case 'Enter':
        case 'Escape': {
          if (handleValidation(event.currentTarget.value)) {
            onAddTag?.(event.currentTarget.value.trim())
          }
          setNewTagValue('')
          setIsUsingNewTagInput(false)
          break
        }
        case 'Backspace':
        case 'Delete': {
          if (event.currentTarget.value === '') {
            canRemoveOnDeleteAndBackspaceKey &&
              tags &&
              tags.length &&
              onRemoveTag?.(tags.at(-1)!)
          }
          break
        }
      }
    }

    const handleBlurNewTag = (event: React.FocusEvent<HTMLInputElement>) => {
      if (tagBoxRef.current) {
        !isErrored && setFocused(false)
      }
      if (handleValidation(event.currentTarget.value)) {
        onAddTag?.(event.currentTarget.value.trim())
      }
      setNewTagValue('')
      setIsUsingNewTagInput(false)
    }

    const handleChangeTagInput = (
      event: React.ChangeEvent<HTMLInputElement>,
      tag: Tag,
    ) => {
      setCurrentlyEditingTag({id: tag.id, value: event.target.value})
    }

    const handleBlurTagInput = (
      event: React.FocusEvent<HTMLInputElement>,
      tag: Tag,
    ) => {
      event.preventDefault()
      if (handleValidation(event.currentTarget.value)) {
        onEditTag?.({
          id: tag.id,
          value: event.currentTarget.value.trim(),
        })
        setCurrentlyEditingTag(null)
      } else {
        onRemoveTag?.(tag)
      }
    }

    const handleKeyDownTagInput = (
      event: React.KeyboardEvent<HTMLInputElement>,
      tag: Tag,
    ) => {
      switch (event.key) {
        case 'Enter': {
          event.preventDefault()
          if (handleValidation(event.currentTarget.value)) {
            onEditTag?.({
              id: tag.id,
              value: event.currentTarget.value.trim(),
            })
            setCurrentlyEditingTag(null)
          }
          break
        }
        case 'Escape': {
          event.preventDefault()
          if (handleValidation(event.currentTarget.value)) {
            onEditTag?.({
              id: tag.id,
              value: event.currentTarget.value.trim(),
            })
            setCurrentlyEditingTag(null)
          } else {
            onRemoveTag?.(tag)
          }
          break
        }
      }
    }

    const handleClickOrDblClickTag = (event: React.MouseEvent, tag: Tag) => {
      event.stopPropagation()
      !isDisabled && isEditable && setCurrentlyEditingTag(tag)
    }

    const handleClickRemoveIcon = (event: React.MouseEvent, tag: Tag) => {
      event.stopPropagation()
      onRemoveTag?.(tag)
    }

    //  classes
    const tagBoxV2Classes = useMemo(() => {
      return [styles.tagBoxV2, className, 'cdg-tag-box-v2-container']
        .filter(Boolean)
        .join(' ')
    }, [className])

    //  classes
    const tagBoxV2ContainerClasses = useMemo(() => {
      return [
        styles.container,
        isErrored && styles.containerIsErrored,
        isDisabled && styles.containerIsDisabled,
        focused && styles.containerFocused,
      ]
        .filter(Boolean)
        .join(' ')
    }, [focused, isDisabled, isErrored])

    return (
      <CssInjection css={css}>
        <div className={tagBoxV2Classes} {...props}>
          {/**************  Label  *************/}
          <div
            aria-label={tagBoxLabel}
            onClick={handleClickContainer}
            className={`${styles.label}`}
          >
            {tagBoxLabel}
            {isRequired && <span className={`${styles.asterisk}`}>*</span>}
          </div>

          {/**************  The main box  *************/}
          <div
            ref={tagBoxRef}
            onClick={handleClickContainer}
            onFocus={handleFocusNewTag}
            onBlur={handleBlurNewTag}
            className={tagBoxV2ContainerClasses}
          >
            {/**** This is to loop and create tags ****/}
            {(tags ?? []).map((tag) => (
              <div
                key={tag.id}
                onClick={(event) => handleClickOrDblClickTag(event, tag)}
                onDoubleClick={(event) => handleClickOrDblClickTag(event, tag)}
                className={`${styles.tagContainer} ${
                  tag.isErrored ? styles.tagContainerIsErrored : ''
                }`}
              >
                <div
                  title={isEditable ? 'Click to edit' : undefined}
                  className={`tag-content ${styles.tagContent}`}
                >
                  {currentlyEditingTag && currentlyEditingTag.id === tag.id ? (
                    <input
                      type='text'
                      autoFocus
                      size={get(currentlyEditingTag, 'value.length', 0) + 1}
                      value={currentlyEditingTag.value}
                      onChange={(event) => handleChangeTagInput(event, tag)}
                      onBlur={(event) => handleBlurTagInput(event, tag)}
                      onKeyDown={(event) => handleKeyDownTagInput(event, tag)}
                      className={`${styles.tagInput}`}
                    />
                  ) : (
                    tag.value
                  )}
                </div>
                {!isDisabled && (
                  <FontAwesomeIcon
                    icon={faClose}
                    onClick={(event) => handleClickRemoveIcon(event, tag)}
                    style={{
                      display:
                        currentlyEditingTag && currentlyEditingTag.id === tag.id
                          ? 'none'
                          : 'inline-block',
                    }}
                    className={`${styles.tagCloseIcon}`}
                  />
                )}
              </div>
            ))}

            {/**** add new button ****/}
            {!isDisabled && (
              <div className={`${styles.buttonContainer}`}>
                {!isUsingNewTagInput && (
                  <div
                    onClick={handleClickAddNewTag}
                    className={`${styles.newTagButton}`}
                  >
                    <FontAwesomeIcon icon={faPlus} />
                    &nbsp;New Tag
                  </div>
                )}
                <input
                  type='text'
                  style={{
                    display: isUsingNewTagInput ? 'inline-block' : 'none',
                  }}
                  placeholder={addTagPlaceholder}
                  ref={inputRef}
                  value={newTagValue}
                  onClick={(event) => event.stopPropagation()}
                  onChange={handleChangeNewTag}
                  onKeyDown={handleKeyDownNewTag}
                  onBlur={handleBlurNewTag}
                  className={`${styles.newTagInput}`}
                />
              </div>
            )}
          </div>
        </div>
      </CssInjection>
    )
  },
)

export default TagBoxV2

import get from 'lodash/get'
import React, {
  AriaAttributes,
  DataHTMLAttributes,
  forwardRef,
  useImperativeHandle,
  useRef,
  useState,
} from 'react'
import {CssInjection} from '../utils/objectToCss'
import {classNames} from '../utils/string'
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
      tags = [],
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
    const tagBoxV2Classes = classNames(
      styles.tagBoxV2,
      className,
      'cdg-tag-box-v2',
    )

    //  classes
    const tagBoxV2ContainerClasses = classNames(
      styles.container,
      isErrored && styles.containerIsErrored,
      isDisabled && styles.containerIsDisabled,
      focused && styles.containerFocused,
      'cdg-tag-box-v2-container',
    )

    return (
      <CssInjection css={css}>
        <div className={tagBoxV2Classes} {...props}>
          {/**************  Label  *************/}
          <div
            aria-label={tagBoxLabel}
            onClick={handleClickContainer}
            className={classNames(styles.label, 'cdg-tag-box-v2-label')}
          >
            {tagBoxLabel}
            {isRequired && (
              <span
                className={classNames(
                  styles.asterisk,
                  'cdg-tag-box-v2-asterisk',
                )}
              >
                *
              </span>
            )}
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
            {tags.map((tag) => (
              <div
                key={tag.id}
                onClick={(event) => handleClickOrDblClickTag(event, tag)}
                onDoubleClick={(event) => handleClickOrDblClickTag(event, tag)}
                className={classNames(
                  styles.tagContainer,
                  tag.isErrored && styles.tagContainerIsErrored,
                  'cdg-tag-box-v2-tag',
                )}
              >
                <div
                  title={isEditable ? 'Click to edit' : undefined}
                  className={classNames(
                    styles.tagContent,
                    'cdg-tag-box-v2-tag-content',
                  )}
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
                      className={classNames(
                        styles.tagInput,
                        'cdg-tag-box-v2-tag-input',
                      )}
                    />
                  ) : (
                    tag.value
                  )}
                </div>
                {!isDisabled && (
                  <svg
                    width={9}
                    viewBox='0 0 384 512'
                    onClick={(event) => handleClickRemoveIcon(event, tag)}
                    style={{
                      display:
                        currentlyEditingTag && currentlyEditingTag.id === tag.id
                          ? 'none'
                          : 'inline-block',
                    }}
                    className={classNames(
                      styles.tagCloseIcon,
                      'cdg-tag-box-v2-tag-icon',
                    )}
                  >
                    <path
                      fill='currentColor'
                      d='M342.6 150.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L192 210.7 86.6 105.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L146.7 256 41.4 361.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L192 301.3 297.4 406.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L237.3 256 342.6 150.6z'
                    ></path>
                  </svg>
                )}
              </div>
            ))}

            {/**** add new button ****/}
            {!isDisabled && (
              <div
                className={classNames(
                  styles.buttonContainer,
                  'cdg-tag-box-v2-add',
                )}
              >
                {!isUsingNewTagInput && (
                  <div
                    onClick={handleClickAddNewTag}
                    className={classNames(
                      styles.newTagButton,
                      'cdg-tag-box-v2-add-button',
                    )}
                  >
                    <svg width={11} viewBox='0 0 448 512'>
                      <path
                        fill='currentColor'
                        d='M256 80c0-17.7-14.3-32-32-32s-32 14.3-32 32V224H48c-17.7 0-32 14.3-32 32s14.3 32 32 32H192V432c0 17.7 14.3 32 32 32s32-14.3 32-32V288H400c17.7 0 32-14.3 32-32s-14.3-32-32-32H256V80z'
                      ></path>
                    </svg>
                    <p>New Tag</p>
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
                  className={classNames(
                    styles.newTagInput,
                    'cdg-tag-box-v2-add-input',
                  )}
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

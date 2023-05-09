import {faClose} from '@fortawesome/free-solid-svg-icons/faClose'
import {faPlus} from '@fortawesome/free-solid-svg-icons/faPlus'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import get from 'lodash/get'
import React, {
  forwardRef,
  Fragment,
  useImperativeHandle,
  useRef,
  useState,
  type AriaAttributes,
  type CSSProperties,
  type DataHTMLAttributes,
} from 'react'
import {theme} from '../theme'
import {
  StyledContainer,
  StyledLabel,
  StyledNewTagButton,
  StyledNewTagInput,
  StyledTagBoxV2,
  TagBoxV2VariantProps,
} from './tag-box-v2.styles'
import {CustomTagBoxRef, Tag, TagBoxV2Props} from './types'

const TagBoxV2 = forwardRef<
  CustomTagBoxRef,
  TagBoxV2Props &
    AriaAttributes &
    DataHTMLAttributes<HTMLDivElement> &
    TagBoxV2VariantProps
>(
  (
    {
      required,
      tagBoxLabel,
      tags,
      onAddTag,
      onEditTag,
      onRemoveTag,
      isDisabled,
      editable,
      isErrored,

      customValidationHandler,
      addTagPlaceholder,
      canRemoveOnDeleteAndBackspaceKey,
      ...props // aria-* and data-* attributes
    },
    ref,
  ) => {
    const [isUsingNewTagInput, setIsUsingNewTagInput] = useState(false)
    const [newTagValue, setNewTagValue] = useState('')

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

    const [currentlyEditingTag, setCurrentlyEditingTag] = useState<Tag | null>(
      null,
    )

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

    const stylesForTagContainer: CSSProperties = {
      display: 'flex',
      alignItems: 'center',
      fontWeight: 'bold',
      borderRadius: '0.125em',
      padding: '0.5rem 1rem',
      margin: '0.5em',
      backgroundColor: theme.colors.gray30.value,
    }

    const stylesForTagInput: CSSProperties =
      (tags ?? []).length === 0
        ? {
            color: '#000000',
            background: 'transparent',
            border: 'none',
            outline: 'none',
            fontWeight: 'bold',
            padding: 0,
            margin: 0,
          }
        : {
            color: '#000000',
            background: 'transparent',
            border: 'none',
            outline: 'none',
            fontWeight: 'bold',
          }
    const stylesForTagContent: CSSProperties = {
      color: '#000000',
      fontWeight: 'bold',
    }
    const stylesForTagCloseButton: CSSProperties = {
      color: '#000000',
      cursor: 'pointer',
      fontWeight: 'bold',
      padding: '0.125rem 0',
      marginLeft: '1em',
    }
    const stylesForErrorContainer = {
      borderWidth: '2px',
      borderStyle: 'solid',
      borderColor: theme.colors.danger.value,
    }

    const stylesForNewTagInput: CSSProperties =
      (tags ?? []).length === 0
        ? {
            fontSize: '0.875rem',
            outline: 'none',
            resize: 'none',
            margin: 0,
            padding: 0,
          }
        : {
            fontSize: '0.875rem',
            outline: 'none',
            resize: 'none',
            margin: '0.5rem 0.75rem',
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
        if (isErrored) {
          Object.assign(tagBoxRef.current.style, {})
        } else {
          Object.assign(tagBoxRef.current.style, {
            borderWidth: '2px',
            borderStyle: 'solid',
            borderColor: theme.colors.cdgBlue100.value,
          })
        }
      }
    }
    const handleChangeNewTag = (event: React.ChangeEvent<HTMLInputElement>) =>
      setNewTagValue(event.target.value)
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
        if (isErrored) {
          Object.assign(tagBoxRef.current.style, {})
        } else {
          Object.assign(tagBoxRef.current.style, {
            borderWidth: '2px',
            borderStyle: 'solid',
            borderColor: theme.colors.gray30.value,
          })
        }
      }
      if (handleValidation(event.currentTarget.value)) {
        onAddTag?.(event.currentTarget.value.trim())
      }
      setNewTagValue('')
      setIsUsingNewTagInput(false)
    }

    return (
      <StyledTagBoxV2 {...props}>
        <StyledLabel aria-label={tagBoxLabel} onClick={handleClickContainer}>
          {tagBoxLabel}{' '}
          {required && (
            <span style={{color: theme.colors.danger.value}}>*</span>
          )}
        </StyledLabel>
        <StyledContainer
          ref={tagBoxRef}
          onClick={handleClickContainer}
          onFocus={handleFocusNewTag}
          onBlur={handleBlurNewTag}
        >
          {(tags ?? []).map((tag) => {
            const handleChangeTagInput = (
              event: React.ChangeEvent<HTMLInputElement>,
            ) => setCurrentlyEditingTag({id: tag.id, value: event.target.value})

            const handleBlurTagInput = (
              event: React.FocusEvent<HTMLInputElement, Element>,
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

            const handleClickOrDblClickTag = (event: React.MouseEvent) => {
              event.stopPropagation()
              !isDisabled && editable && setCurrentlyEditingTag(tag)
            }

            const handleClickRemoveIcon = (event: React.MouseEvent) => {
              event.stopPropagation()
              onRemoveTag?.(tag)
            }

            return (
              <div
                key={tag.id}
                style={stylesForTagContainer}
                onClick={handleClickOrDblClickTag}
                onDoubleClick={handleClickOrDblClickTag}
              >
                <div
                  style={stylesForTagContent}
                  title={editable ? 'Click to edit' : undefined}
                >
                  {currentlyEditingTag && currentlyEditingTag.id === tag.id ? (
                    <input
                      type='text'
                      autoFocus
                      style={stylesForTagInput}
                      size={
                        // eslint-disable-next-line @typescript-eslint/no-unnecessary-type-assertion
                        (get(
                          currentlyEditingTag,
                          'value.length',
                          0,
                        ) as number) + 1
                      }
                      value={currentlyEditingTag.value}
                      onChange={handleChangeTagInput}
                      onBlur={handleBlurTagInput}
                      onKeyDown={handleKeyDownTagInput}
                    />
                  ) : (
                    tag.value
                  )}
                </div>
                {!isDisabled && (
                  <FontAwesomeIcon
                    style={stylesForTagCloseButton}
                    icon={faClose}
                    onClick={handleClickRemoveIcon}
                  />
                )}
              </div>
            )
          })}
          {!isDisabled && (
            <Fragment>
              {!isUsingNewTagInput && (
                <StyledNewTagButton onClick={handleClickAddNewTag}>
                  <FontAwesomeIcon icon={faPlus} />
                  &nbsp;New Tag
                </StyledNewTagButton>
              )}
              <StyledNewTagInput
                type='text'
                style={{
                  ...stylesForNewTagInput,
                  display: isUsingNewTagInput ? 'inline-block' : 'none',
                  maxWidth: '90%',
                }}
                placeholder={addTagPlaceholder}
                ref={inputRef}
                value={newTagValue}
                onClick={(event) => event.stopPropagation()}
                onChange={handleChangeNewTag}
                onKeyDown={handleKeyDownNewTag}
                onBlur={handleBlurNewTag}
              />
            </Fragment>
          )}
        </StyledContainer>
      </StyledTagBoxV2>
    )
  },
)

export default TagBoxV2

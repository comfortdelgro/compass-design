import {faClose} from '@fortawesome/free-solid-svg-icons/faClose'
import {faPlus} from '@fortawesome/free-solid-svg-icons/faPlus'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import get from 'lodash/get'
import React, {
  forwardRef,
  useImperativeHandle,
  useRef,
  useState,
  type AriaAttributes,
  type DataHTMLAttributes,
} from 'react'
import {theme} from '../theme'
import {
  StyledButtonContainer,
  StyledContainer,
  StyledLabel,
  StyledNewTagButton,
  StyledNewTagInput,
  StyledTagBoxV2,
  StyledTagCloseIcon,
  StyledTagContainer,
  StyledTagContent,
  StyledTagInput,
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
      isRequired,
      tagBoxLabel,
      tags,
      onAddTag,
      onEditTag,
      onRemoveTag,
      isDisabled,
      isEditable,
      isErrored = false,

      customValidationHandler,
      addTagPlaceholder,
      canRemoveOnDeleteAndBackspaceKey,
      ...props // aria-* and data-* attributes
    },
    ref,
  ) => {
    const [isUsingNewTagInput, setIsUsingNewTagInput] = useState(false)
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

    // jsx
    return (
      <StyledTagBoxV2 {...props} isErrored={isErrored} isDisabled={isDisabled}>
        {/**************  Label  *************/}
        <StyledLabel aria-label={tagBoxLabel} onClick={handleClickContainer}>
          {tagBoxLabel}
          {isRequired && (
            <span style={{color: theme.colors.danger.value}}>*</span>
          )}
        </StyledLabel>

        {/**************  The main box  *************/}
        <StyledContainer
          ref={tagBoxRef}
          onClick={handleClickContainer}
          onFocus={handleFocusNewTag}
          onBlur={handleBlurNewTag}
        >
          {/**** This is to loop and create tags ****/}
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
              !isDisabled && isEditable && setCurrentlyEditingTag(tag)
            }

            const handleClickRemoveIcon = (event: React.MouseEvent) => {
              event.stopPropagation()
              onRemoveTag?.(tag)
            }

            return (
              <StyledTagContainer
                key={tag.id}
                onClick={handleClickOrDblClickTag}
                onDoubleClick={handleClickOrDblClickTag}
              >
                <StyledTagContent
                  title={isEditable ? 'Click to edit' : undefined}
                  className='tag-content'
                >
                  {currentlyEditingTag && currentlyEditingTag.id === tag.id ? (
                    <StyledTagInput
                      type='text'
                      autoFocus
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
                </StyledTagContent>
                {!isDisabled && (
                  <StyledTagCloseIcon
                    icon={faClose}
                    onClick={handleClickRemoveIcon}
                    style={{
                      display:
                        currentlyEditingTag && currentlyEditingTag.id === tag.id
                          ? 'none'
                          : 'inline-block',
                    }}
                  />
                )}
              </StyledTagContainer>
            )
          })}

          {/**** add new button ****/}
          {!isDisabled && (
            <StyledButtonContainer>
              {!isUsingNewTagInput && (
                <StyledNewTagButton onClick={handleClickAddNewTag}>
                  <FontAwesomeIcon icon={faPlus} />
                  &nbsp;New Tag
                </StyledNewTagButton>
              )}
              <StyledNewTagInput
                type='text'
                isEmpty={(tags ?? []).length === 0}
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
              />
            </StyledButtonContainer>
          )}
        </StyledContainer>
      </StyledTagBoxV2>
    )
  },
)

export default TagBoxV2

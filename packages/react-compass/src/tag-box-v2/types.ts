import {IconDefinition} from '@fortawesome/free-solid-svg-icons'

export interface Tag {
  id: string | number
  value: string
  icon?: IconDefinition
  isErrored?: boolean
}

export interface TagBoxV2Props {
  /**
   * @description Default to false. If true, then there will be a red (sync with theme) asterisk (*) next to the label
   */
  isRequired?: boolean
  tagBoxLabel?: string
  error?: boolean
  /**
   * @description Default to false. If true, then it won't allow add/remove/edit tag. "disabled" has higher precendence than "isEditable"
   */
  isDisabled?: boolean
  /**
   * @description Default to false. If true, then it will allow editing tag in place
   */
  isEditable?: boolean

  isErrored?: boolean
  tags?: Tag[]
  /**
   * @description Default to undefined. Placeholder text for add new tag input.
   */
  addTagPlaceholder?: string
  /**
   * @description Default to false. If true, then it will allow removing tag by pressing [Backspace] or [Delete] (if add new tag input is being focused)
   */
  canRemoveOnDeleteAndBackspaceKey?: boolean
  onAddTag?: (tagValue: string) => void
  onRemoveTag?: (tagToBeRemoved: Tag) => void
  onEditTag?: (tagToBeEdited: Tag) => void
  /**
   *
   * @param tagValue
   * @returns {boolean} Return true means pass
   */
  customValidationHandler?: (tagValue: string) => boolean

  // css
  css?: unknown
}

export interface CustomTagBoxRef {
  focus: () => void
  blur: () => void
}

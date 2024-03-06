import {Editor} from '@tiptap/react'
import React, {forwardRef} from 'react'
import {useRichTextEditorContext} from '../rich-text-editor.context'
import {PremadeControlProps} from './Control'
import {ControlBase} from './ControlBase'

interface CreateControlProps {
  icon: React.FC
  label: string
  isActive?: {name: string; attributes?: Record<string, unknown> | string}
  onClick: (editor: Editor | null) => boolean
}

export function createControl({
  isActive,
  onClick,
  icon,
  label,
}: CreateControlProps) {
  const CreatedControl = forwardRef<HTMLButtonElement, PremadeControlProps>(
    (props, ref) => {
      const {editor} = useRichTextEditorContext()
      const handleClick = React.useCallback(() => {
        if (editor !== null && editor.isEditable) {
          return onClick(editor)
        }
        return false
      }, [editor])

      return (
        <ControlBase
          active={
            !!isActive?.name &&
            !!editor?.isActive(isActive.name, isActive.attributes)
          }
          ref={ref}
          onClick={handleClick}
          icon={icon}
          aria-label={label}
          {...props}
        />
      )
    },
  )

  return CreatedControl
}

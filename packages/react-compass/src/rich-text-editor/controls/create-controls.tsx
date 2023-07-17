import {Editor} from '@tiptap/react'
import React, {forwardRef} from 'react'
import {useRichTextEditorContext} from '../rich-text-editor.context'
import {PremadeControlProps} from './Control/Control'
import {ControlBase} from './ControlBase'

interface CreateControlProps {
  icon: React.FC
  label: string
  isActive?: {name: string; attributes?: Record<string, any> | string}
  onClick: (editor: Editor | null) => () => void
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
      return (
        <ControlBase
          active={
            isActive?.name
              ? editor?.isActive(isActive.name, isActive.attributes) ?? false
              : false
          }
          ref={ref}
          onClick={onClick(editor)}
          icon={icon}
          aria-label={label}
          {...props}
        />
      )
    },
  )
  CreatedControl.defaultProps = {
    controltype: 'control',
  }
  return CreatedControl
}
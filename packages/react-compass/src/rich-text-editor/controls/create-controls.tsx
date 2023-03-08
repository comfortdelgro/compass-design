import React, {forwardRef} from 'react'
import {useRichTextEditorContext} from '../rich-text-editor.context'
import {PremadeControlProps} from './Control/Control'
import {ControlBase} from './ControlBase'

interface CreateControlProps {
  icon: React.FC
  label: string
  isActive?: {name: string; attributes?: Record<string, any> | string}
  operation: {name: string; attributes?: Record<string, any> | string}
}

export function createControl({
  isActive,
  operation,
  icon,
  label,
}: CreateControlProps) {
  return forwardRef<HTMLButtonElement, PremadeControlProps>((props, ref) => {
    const {editor} = useRichTextEditorContext()
    return (
      <ControlBase
        active={
          isActive?.name
            ? editor?.isActive(isActive.name, isActive.attributes) ?? false
            : false
        }
        ref={ref}
        onPress={() =>
          editor?.chain().focus()[operation.name](operation.attributes).run()
        }
        icon={icon}
        aria-label={label}
        {...props}
      />
    )
  })
}

import {Item} from '@react-stately/collections'
import React from 'react'
import {useRichTextEditorContext} from '../../../rich-text-editor.context'
import {StyledColorItem} from '../../../rich-text-editor.styles'
import {ColorSelector} from './ColorSelector'

export type ColorControlProps = {
  colors: string[]
}
export const ColorControl = ({colors}: ColorControlProps) => {
  const {editor} = useRichTextEditorContext()
  const colorSet = new Set(colors)
  const handleSelectionChange = (key: React.Key) => {
    editor
      ?.chain()
      .focus()
      .setColor(key as string)
      .run()
  }
  return (
    <ColorSelector
      onSelectionChange={handleSelectionChange}
      defaultSelectedKey={[...colorSet][0] as React.Key}
    >
      {[...colorSet].map((color) => (
        <Item key={color}>
          <StyledColorItem
            style={{backgroundColor: color}}
            active={editor?.isActive('color', color) ?? false}
          ></StyledColorItem>
        </Item>
      ))}
    </ColorSelector>
  )
}

import React from 'react'
import {useRichTextEditorContext} from '../../rich-text-editor.context'
import Select from '../../select'

export type ColorControlProps = {
  colors?: string[]
}

const defaultColors = [
  '#212529',
  '#845EF7',
  '#339AF0',
  '#22B8CF',
  '#51CF66',
  '#FCC419',
  '#FF6B6B',
  '#F06595',
  '#CED4DA',
  '#5F3DC4',
  '#1864AB',
  '#0B7285',
  '#2B8A3E',
  '#E67700',
  '#C92A2A',
  '#C2255C',
]
export const ColorControl = ({colors = defaultColors}: ColorControlProps) => {
  const {editor} = useRichTextEditorContext()
  const colorSet = new Set(colors)
  const [selectedColor, setColor] = React.useState<React.Key>([...colorSet][0])

  const handleSelectionChange = (key: React.Key) => {
    if (editor?.isEditable) {
      setColor(key)
      editor
        .chain()
        .focus()
        .setColor(key as string)
        .run()
    }
  }
  return (
    <Select
      selectedKey={selectedColor}
      onSelectionChange={handleSelectionChange}
      type='color'
      css={{
        width: '70px',
        height: '28px',
        float: 'left',
        margin: '0 var(--cdg-spacing-2) var(--cdg-spacing-2)',
        button: {
          color: '$gray110',
        },
      }}
    >
      {[...colorSet].map((color) => (
        <Select.Item key={color}>
          <div
            className='colorItem'
            style={{
              backgroundColor: color,
              width: '24px',
              height: '24px',
              borderRadius: '4px',
            }}
          ></div>
        </Select.Item>
      ))}
    </Select>
  )
}

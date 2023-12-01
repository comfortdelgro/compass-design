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
        button: {
          color: '$gray110',
          width: '60px',
          height: '28px',
        },
      }}
    >
      {[...colorSet].map((color) => (
        <Select.Item
          key={color}
          renderAs={
            <div
              className='colorItem'
              style={{
                boxSizing: 'border-box',
                backgroundColor: color,
                width: '20px',
                height: '20px',
                borderRadius: '4px',
                border: '1px #323130 solid',
              }}
            />
          }
        >
          <div
            className='colorItem'
            style={{
              backgroundColor: color,
              width: '24px',
              height: '24px',
              borderRadius: '4px',
            }}
          />
        </Select.Item>
      ))}
    </Select>
  )
}

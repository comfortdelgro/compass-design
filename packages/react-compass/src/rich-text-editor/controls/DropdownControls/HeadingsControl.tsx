import React from 'react'
import { useRichTextEditorContext } from '../../rich-text-editor.context'
import Select from '../../select'
export type HeadingsControlProps = {
  levels?: number[]
}
export type Level = 1 | 2 | 3 | 4 | 5 | 6

const heading = [
  {
    level: 0,
    text: 'Normal Text',
    style: {
      fontWeight: '400',
      fontSize: '14px',
      lineHeight: '21px',
    },
  },
  {
    level: 1,
    text: 'Header 1',
    style: {
      fontWeight: '600',
      fontSize: '32px',
      lineHeight: '48px',
    },
  },
  {
    level: 2,
    text: 'Header 2',
    style: {
      fontWeight: '600',
      fontSize: '28px',
      lineHeight: '42px',
    },
  },
  {
    level: 3,
    text: 'Header 3',
    style: {
      fontWeight: '600',
      fontSize: '24px',
      lineHeight: '36px',
    },
  },
  {
    level: 4,
    text: 'Header 4',
    style: {
      fontWeight: '600',
      fontSize: '20px',
      lineHeight: '30px',
    },
  },
  {
    level: 5,
    text: 'Header 5',
    style: {
      fontWeight: '600',
      fontSize: '16px',
      lineHeight: '24px',
    },
  },
]

export const HeadingsControl = () => {
  const {editor} = useRichTextEditorContext()
  const [selectedHeadingLevel, setLevel] = React.useState<string>('0')
  const handleSelectionChange = React.useCallback(
    (key: React.Key) => {
      setLevel(String(key))
      if (Number(key) === 0) {
        editor?.commands.setNode('paragraph')
        editor?.chain().focus().run()
      } else {
        editor
          ?.chain()
          .focus()
          .setHeading({level: Number(key) as Level})
          .run()
      }
    },
    [editor],
  )

  return (
    <Select
      onSelectionChange={handleSelectionChange}
      selectedKey={selectedHeadingLevel}
      type='heading'
      css={{
        width: '124px',
        height: '28px',
        float: 'left',
        button: {
          color: '$gray110',
        },
      }}
    >
      {heading.map((h) => (
        <Select.Item key={h.level} renderAs={h.text}>
          <p style={{...h.style, ...{padding: 0, margin: 0}}}>{h.text}</p>
        </Select.Item>
      ))}
    </Select>
  )
}

import React from 'react'
import {useRichTextEditorContext} from '../../rich-text-editor.context'
import Select from '../../select'
export type HeadingsControlProps = {
  levels?: number[]
}
export type Level = 1 | 2 | 3 | 4 | 5 | 6

export const HeadingsControl = ({
  levels = [1, 2, 3, 4, 5, 6],
}: HeadingsControlProps) => {
  const {editor} = useRichTextEditorContext()
  const levelsSet = new Set([0, ...levels])
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
      css={{
        width: '140px',
        height: '28px',
        float: 'left',
      }}
    >
      {[...levelsSet].map((level) => {
        const levelName = level === 0 ? 'Normal Text' : `Heading ${level}`
        return (
          <Select.Item key={level} textValue={levelName}>
            {levelName}
          </Select.Item>
        )
      })}
    </Select>
  )
}

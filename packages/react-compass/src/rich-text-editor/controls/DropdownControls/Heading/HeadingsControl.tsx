import {Item} from '@react-stately/collections'
import {Level} from '@tiptap/extension-heading'
import React from 'react'
import {useRichTextEditorContext} from '../../../rich-text-editor.context'
import {HeadingSelector} from './HeadingSelector'
export type HeadingsControlProps = {
  levels: number[]
}
export const HeadingsControl = ({levels}: HeadingsControlProps) => {
  const {editor} = useRichTextEditorContext()
  const levelsSet = new Set([0, ...levels])
  const [selectedHeadingLevel, setLevel] = React.useState<string>('0')
  const handleSelectionChange = React.useCallback(
    (key: React.Key) => {
      setLevel(String(key))
      if (Number(key) === 0) {
        editor?.commands.setNode('paragraph')
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
    <HeadingSelector
      onSelectionChange={handleSelectionChange}
      selectedKey={selectedHeadingLevel}
    >
      {[...levelsSet].map((level) => {
        const levelName = level === 0 ? 'Normal Text' : `Heading ${level}`
        return (
          <Item key={level} textValue={levelName}>
            {levelName}
          </Item>
        )
      })}
    </HeadingSelector>
  )
}

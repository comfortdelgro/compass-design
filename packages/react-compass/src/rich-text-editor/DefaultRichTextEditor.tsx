import React from 'react'
import {OthersControl} from './controls/DropdownControls/Others/OthersControl'

import RichTextEditor, {RichTextEditorProps} from './index'

export const DefaultRichTextEditor = ({
  onChange,
  css = {},
  isEditable = true,
  ...delegated
}: RichTextEditorProps) => {
  return (
    <RichTextEditor css={css} {...delegated}>
      <RichTextEditor.Toolbar>
        <RichTextEditor.ControlsGroup>
          <RichTextEditor.Undo />
          <RichTextEditor.Redo />
        </RichTextEditor.ControlsGroup>
        <RichTextEditor.ControlsGroup>
          <RichTextEditor.HeadingsControl levels={[1, 2, 3, 4, 5, 6]} />
        </RichTextEditor.ControlsGroup>
        <RichTextEditor.ControlsGroup>
          <RichTextEditor.ColorControl
            colors={[
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
            ]}
          />
        </RichTextEditor.ControlsGroup>
        <RichTextEditor.ControlsGroup>
          <RichTextEditor.TextAlginmentSelector />
        </RichTextEditor.ControlsGroup>
        <RichTextEditor.ControlsGroup>
          <RichTextEditor.Bold />
          <RichTextEditor.Italic />
          <RichTextEditor.Underline />
          <RichTextEditor.Strikethrough />
        </RichTextEditor.ControlsGroup>
        <RichTextEditor.ControlsGroup>
          <RichTextEditor.BulletList />
          <RichTextEditor.OrderedList />
        </RichTextEditor.ControlsGroup>
        <RichTextEditor.ControlsGroup>
          <RichTextEditor.Link />
          <RichTextEditor.Image />
          <RichTextEditor.Blockquote />
        </RichTextEditor.ControlsGroup>
        <RichTextEditor.ControlsGroup>
          <OthersControl />
        </RichTextEditor.ControlsGroup>
      </RichTextEditor.Toolbar>
    </RichTextEditor>
  )
}

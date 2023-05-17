import React from 'react'
import {Column} from '../utils/components'
import RichTextEditor from './index'

export const Default: React.FC = () => {
  return (
    <Column>
      <h3>Default Rich Text Editor</h3>
      <RichTextEditor characterCount={200}>
        <RichTextEditor.Toolbar>
          <RichTextEditor.ControlsGroup>
            <RichTextEditor.Undo />
            <RichTextEditor.Redo />
          </RichTextEditor.ControlsGroup>
          <RichTextEditor.ControlsGroup>
            <RichTextEditor.HeadingsControl />
          </RichTextEditor.ControlsGroup>
          <RichTextEditor.ControlsGroup>
            <RichTextEditor.ColorControl />
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
          <RichTextEditor.BulletList />
          <RichTextEditor.OrderedList />
          <RichTextEditor.Link />
          <RichTextEditor.Unlink />
          <RichTextEditor.Image />
          <RichTextEditor.Superscript />
          <RichTextEditor.Subscript />
          <RichTextEditor.Hr />
          <RichTextEditor.CodeBlock />
          <RichTextEditor.Blockquote />
        </RichTextEditor.Toolbar>
      </RichTextEditor>
    </Column>
  )
}

export const Cutomized: React.FC = () => {
  return (
    <Column>
      <h3>Cutomized Rich Text Editor</h3>
      <RichTextEditor characterCount={200}>
        <RichTextEditor.Toolbar>
          <RichTextEditor.ControlsGroup>
            <RichTextEditor.H1 />
            <RichTextEditor.H2 />
            <RichTextEditor.H3 />
            <RichTextEditor.H4 />
            <RichTextEditor.H5 />
            <RichTextEditor.H6 />
          </RichTextEditor.ControlsGroup>
          <RichTextEditor.ControlsGroup>
            <RichTextEditor.AlignLeft />
            <RichTextEditor.AlignCenter />
            <RichTextEditor.AlignRight />
            <RichTextEditor.AlignJustify />
          </RichTextEditor.ControlsGroup>
          <RichTextEditor.ControlsGroup>
            <RichTextEditor.Bold />
            <RichTextEditor.Italic />
            <RichTextEditor.Underline />
            <RichTextEditor.Strikethrough />
          </RichTextEditor.ControlsGroup>
          <RichTextEditor.BulletList />
          <RichTextEditor.OrderedList />
          <RichTextEditor.Link />
          <RichTextEditor.Unlink />
          <RichTextEditor.Image />
          <RichTextEditor.Superscript />
          <RichTextEditor.Subscript />
          <RichTextEditor.Hr />
          <RichTextEditor.Undo />
          <RichTextEditor.Redo />
        </RichTextEditor.Toolbar>
      </RichTextEditor>
    </Column>
  )
}
